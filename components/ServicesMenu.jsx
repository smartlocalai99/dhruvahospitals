import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import { ArrowRightIcon } from './Icons';
import { getServiceIcon } from './serviceIcons';
import { services } from '@/lib/data';
import { site } from '@/lib/site';

// Desktop "Services" item: opens on hover or click, closes on Escape, outside click or navigation.
export default function ServicesMenu({ active, textClass }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const wrapper = useRef(null);
  const button = useRef(null);
  const closeTimer = useRef(0);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    const onPointer = (event) => {
      if (!wrapper.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on('routeChangeStart', close);
    return () => router.events.off('routeChangeStart', close);
  }, [router.events]);

  const show = () => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      ref={wrapper}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onBlur={(event) => {
        if (!wrapper.current?.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls="services-menu"
        onClick={() => setOpen((value) => !value)}
        className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${textClass}`}
      >
        Services
        <LuChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
        {active && <span className="sr-only">(current section)</span>}
      </button>

      {/* Always rendered (hidden while closed) so the links are in the page for search engines. */}
      <div id="services-menu" hidden={!open} className="absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 pt-5">
        <div className="overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-[0_24px_60px_-20px_rgba(10,38,80,0.35)]">
          <ul className="grid grid-cols-2 gap-1 p-3">
            {services.map((service) => {
              const Icon = getServiceIcon(service.slug);
              const current = router.asPath === `/services/${service.slug}`;
              return (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    aria-current={current ? 'page' : undefined}
                    className={`group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-navy-50 focus-visible:bg-navy-50 focus-visible:outline-none ${
                      current ? 'bg-navy-50' : ''
                    }`}
                  >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-white">
                      {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-neutral-950 group-hover:text-navy-700">
                        {service.title}
                      </span>
                      <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-neutral-500">
                        {service.summary}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-between gap-4 border-t border-neutral-100 bg-navy-50/60 px-6 py-3.5 text-sm">
            <Link href="/services" className="text-link">
              All services
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={site.phones.emergency.href} className="font-semibold text-brandred-600 hover:underline">
              24/7 emergency: {site.phones.emergency.display}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
