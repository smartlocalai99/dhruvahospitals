import Image from 'next/image';
import Link from 'next/link';
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';
import { site, callNumbers, whatsappLink } from '@/lib/site';

const pageLinks = [
  { href: '/services', label: 'Services' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/dhruva-speaks', label: 'Dhruva Speaks' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

const socialLinks = [
  {
    href: site.socials.instagram,
    label: 'Instagram',
    icon: FaInstagram,
  },
  {
    href: site.socials.facebook,
    label: 'Facebook',
    icon: FaFacebookF,
  },
  {
    href: site.socials.youtube,
    label: 'YouTube',
    icon: FaYoutube,
  },
  {
    href: whatsappLink(),
    label: 'WhatsApp',
    icon: FaWhatsapp,
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-700 text-white">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

        {/* Logo + Address */}
        <div>
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white">
            <Image
              src="/images/logo.png"
              alt="Dhruva Hospitals"
              width={54}
              height={16}
              className="h-auto w-[54px]"
            />
          </div>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-100">
            {site.tagline}
          </p>

          <address className="mt-4 max-w-sm text-sm not-italic leading-relaxed text-navy-100">
            {site.address.full}.
          </address>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-semibold tracking-wide">
            Contact
          </h2>

          <ul className="mt-5 space-y-3 text-sm text-navy-100">
            {callNumbers.map((number) => (
              <li key={number.href}>
                <a
                  href={number.href}
                  className="transition-colors hover:text-white"
                >
                  {number.display}
                </a>
              </li>
            ))}

            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </li>

            <li className="pt-1 text-white">
              24/7 Emergency:{' '}
              <a href={site.phones.emergency.href} className="font-semibold hover:underline">
                {site.phones.emergency.display}
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-sm font-semibold tracking-wide">
            Social Media
          </h2>

          <div className="mt-5 flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Dhruva Hospitals on ${link.label}`}
                  title={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-navy-100 transition-all duration-200 hover:border-white hover:bg-white hover:text-navy-700"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>

          <h2 className="mt-8 text-sm font-semibold tracking-wide">
            Timings
          </h2>

          <ul className="mt-5 space-y-3 text-sm text-navy-100">
            <li>OPD: {site.hours.opd}</li>
            <li>Emergency: {site.hours.emergency}</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h2 className="text-sm font-semibold tracking-wide">
            Pages
          </h2>

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

          <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <span>Kadapa, Andhra Pradesh</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
