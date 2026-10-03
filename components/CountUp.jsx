import { useEffect, useRef, useState } from 'react';

function formatNumber(number, grouped) {
  const text = String(number);
  return grouped ? text.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : text;
}

// Counts a stat such as "5,000+" or "24/7" up from zero the first time it scrolls into view.
// The final value is rendered on the server, so it still shows without JavaScript and stays
// readable to screen readers and search engines.
export default function CountUp({ value, duration = 1600 }) {
  const ref = useRef(null);
  const match = /^(\d[\d,]*)(.*)$/.exec(value);
  const target = match ? Number(match[1].replace(/,/g, '')) : 0;
  const grouped = Boolean(match && match[1].includes(','));
  const suffix = match ? match[2] : '';
  const animatable = Boolean(match);

  const [current, setCurrent] = useState(target);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    if (!animatable) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setCurrent(target);
      setStatus('ready');
      return undefined;
    }

    setCurrent(0);
    setStatus('ready');

    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          setCurrent(Math.round(target * eased));
          if (progress < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [animatable, target, duration]);

  if (!animatable) return value;

  return (
    <span ref={ref} data-countup={status} className="relative inline-block whitespace-nowrap">
      <span className="sr-only">{value}</span>
      {/* Reserves the final width so nearby text doesn't shift while counting. */}
      <span aria-hidden="true" className="invisible">
        {value}
      </span>
      <span aria-hidden="true" data-countup-value className="absolute left-0 top-0">
        {formatNumber(current, grouped)}
        {suffix}
      </span>
    </span>
  );
}
