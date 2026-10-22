import { useEffect, useRef, useState } from 'react';

function formatNumber(number, grouped) {
  const text = String(number);
  return grouped ? text.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : text;
}

// Counts a stat such as "5,000+" or "24/7" up from zero the first time it scrolls into view.
// The final value is the only text in the HTML, so screen readers, search engines and visitors
// without JavaScript always read it. While counting it stays in place (it holds the width) but is
// drawn transparent, and the running number is painted by CSS (`.countup` in globals.css).
export default function CountUp({ value, duration = 1600 }) {
  const ref = useRef(null);
  const match = /^(\d[\d,]*)(.*)$/.exec(value);
  const target = match ? Number(match[1].replace(/,/g, '')) : 0;
  const grouped = Boolean(match && match[1].includes(','));
  const suffix = match ? match[2] : '';
  const animatable = Boolean(match);

  const [status, setStatus] = useState('pending');

  useEffect(() => {
    if (!animatable) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setStatus('ready');
      return undefined;
    }

    const element = ref.current;
    const show = (number) => element.style.setProperty('--countup-text', `"${formatNumber(number, grouped)}${suffix}"`);
    show(0);
    setStatus('counting');

    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          show(Math.round(target * eased));
          if (progress < 1) frame = requestAnimationFrame(step);
          else setStatus('ready');
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [animatable, target, grouped, suffix, duration]);

  if (!animatable) return value;

  return (
    <span ref={ref} data-countup={status} className="countup">
      <span data-countup-value>{value}</span>
    </span>
  );
}
