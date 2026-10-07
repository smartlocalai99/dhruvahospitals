import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BookCallButton from './BookCallButton';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/dhruva-speaks', label: 'Dhruva speaks' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const isHome = router.pathname === '/';
  const [overHero, setOverHero] = useState(isHome);

  // On the home page the header floats over the hero video as frosted glass,
  // then turns more opaque once the video has scrolled away.
  useEffect(() => {
    if (!isHome) {
      setOverHero(false);
      return undefined;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      setOverHero(window.scrollY < window.innerHeight - 120);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
    };
  }, [isHome]);

  const glass = overHero && !open;

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 ${
        glass ? 'border-white/25 bg-white/60' : 'border-neutral-200/70 bg-white/80'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Dhruva Hospitals"
            width={83}
            height={24}
            priority
            className="h-6 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = isActive(router.pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`text-[15px] font-medium transition-colors ${
                  active
                    ? glass
                      ? 'text-navy-700'
                      : 'text-neutral-400'
                    : 'text-neutral-800 hover:text-navy-700'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <BookCallButton label="Book now" />
        </div>

        <button
          type="button"
          className={`flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
            glass ? 'border-white/60 bg-white/40' : 'border-neutral-200'
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-neutral-100 bg-white/95 lg:hidden">
          <nav
            className="container-page flex flex-col gap-1 py-4"
            aria-label="Primary mobile"
          >
            {navLinks.map((link) => {
              const active = isActive(router.pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-lg px-3 py-2.5 text-[15px] font-medium ${
                    active ? 'bg-navy-50 text-navy-700' : 'text-neutral-800'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <BookCallButton label="Book now" className="btn-primary mt-2 w-full" onClick={() => setOpen(false)} />
          </nav>
        </div>
      )}

    </header>
  );
}
