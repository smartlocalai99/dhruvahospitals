import Link from 'next/link';
import Logo from './Logo';

const pageLinks = [
  { href: '/facilities', label: 'Services' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://facebook.com', label: 'Facebook' },
  { href: 'https://youtube.com', label: 'Youtube' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-700 text-white">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white">
            <Logo className="h-14 w-14" />
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-navy-100">
            Venu Gopal House, s reddy hospital, 1/705-1, beside Raithu Bazar
            Dwaraka nagar, Old, Kadapa, Andhra Pradesh 516001.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-navy-100">
            <li>
              <a href="tel:+919000000005" className="hover:text-white">+91 9********5</a>
            </li>
            <li>
              <a href="mailto:dhruv@ac.in" className="hover:text-white">dhruv@ac.in</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide">Social media</h3>
          <ul className="mt-5 space-y-3 text-sm text-navy-100">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide">Pages</h3>
          <ul className="mt-5 space-y-3 text-sm text-navy-100">
            {pageLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-navy-200 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Dhruva Hospitals. All rights reserved.</span>
          <span>Kadapa, Andhra Pradesh</span>
        </div>
      </div>
    </footer>
  );
}
