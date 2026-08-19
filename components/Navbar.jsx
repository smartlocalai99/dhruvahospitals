import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AppointmentModal from './AppointmentModal';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/dhruva-speaks', label: 'Dhruva speaks' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  function openAppointment() {
    setOpen(false);
    setAppointmentOpen(true);
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src="/images/dhruva.jpg"
            alt="Dhruva Hospitals"
            className="h-14  w-auto object-contain"
          />
          <span className="sr-only">Dhruva Hospitals</span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = router.pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium transition-colors ${
                  active ? 'text-neutral-400' : 'text-neutral-800 hover:text-navy-700'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <button type="button" onClick={openAppointment} className="btn-primary">
            Book now
          </button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
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
        <div className="border-t border-neutral-100 bg-white lg:hidden">
          <nav
            className="container-page flex flex-col gap-1 py-4"
            aria-label="Primary mobile"
          >
            {navLinks.map((link) => {
              const active = router.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-[15px] font-medium ${
                    active ? 'bg-navy-50 text-navy-700' : 'text-neutral-800'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <button type="button" onClick={openAppointment} className="btn-primary mt-2 w-full">
              Book now
            </button>
          </nav>
        </div>
      )}

      </header>

      {appointmentOpen && <AppointmentModal onClose={() => setAppointmentOpen(false)} />}
    </>
  );
}