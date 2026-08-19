import Link from 'next/link';
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';

const pageLinks = [
  { href: '/facilities', label: 'Services' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

const socialLinks = [
  {
    href: 'https://www.instagram.com/dhruva_hospitals_kadapa?igsh=MXdybHp3ODJ0Zms1bA==',
    label: 'Instagram',
    icon: FaInstagram,
  },
  {
    href: 'https://www.facebook.com/',
    label: 'Facebook',
    icon: FaFacebookF,
  },
  {
    href: 'https://www.youtube.com/',
    label: 'YouTube',
    icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-700 text-white">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

        {/* Logo + Address */}
        <div>
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white">
            <img
              src="/images/dhruva.jpg"
              alt="Dhruva Hospitals"
              className="h-16 w-16 object-contain"
            />
          </div>

          <p className="mt-6 text-sm leading-relaxed text-navy-100">
            Venu Gopal House, s reddy hospital, 1/705-1, beside Raithu Bazar
            Dwaraka nagar, Old, Kadapa, Andhra Pradesh 516001.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide">
            Contact
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-navy-100">
            <li>
              <a
                href="tel:+919000000005"
                className="transition-colors hover:text-white"
              >
                +91 9959959693
              </a>
            </li>

            <li>
              <a
                href="mailto:dhruv@ac.in"
                className="transition-colors hover:text-white"
              >
                dhruvahospitalkadapa@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide">
            Social Media
          </h3>

          <div className="mt-5 flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Dhruva Hospitals ${link.label}`}
                  title={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-navy-100 transition-all duration-200 hover:border-white hover:bg-white hover:text-navy-700"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide">
            Pages
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-navy-100">
            {pageLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-navy-200 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Dhruva Hospitals. All rights reserved.
          </span>

          <span>
            Kadapa, Andhra Pradesh
          </span>
        </div>
      </div>
    </footer>
  );
}