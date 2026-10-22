import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import EmergencyBanner from '@/components/EmergencyBanner';
import {
  PhoneIcon,
  MailIcon,
  ClockIcon,
  LocationIcon,
  ExternalLinkIcon,
} from '@/components/Icons';
import { site, callNumbers, whatsappLink, googleMapsUrl, googleMapsEmbedUrl } from '@/lib/site';
import { breadcrumbSchema, hospitalSchema } from '@/lib/schema';
import { opdInGulfTime } from '@/lib/nri';

const linkClass = 'transition-colors hover:text-navy-700';

const infoCards = [
  {
    icon: PhoneIcon,
    label: 'Call Us',
    lines: callNumbers.map((number) => ({ text: number.display, href: number.href })),
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    lines: [{ text: site.phones.main.display, href: whatsappLink(), external: true }],
  },
  {
    icon: MailIcon,
    label: 'Mail Us',
    lines: [{ text: site.email, href: `mailto:${site.email}` }],
  },
  {
    icon: ClockIcon,
    label: 'Our Timings',
    lines: [{ text: `OPD: ${site.hours.opd}` }, { text: `Emergency: ${site.hours.emergency}` }],
  },
];

export default function ContactPage() {
  return (
    <Layout
      title="Contact & Directions in Kadapa"
      description="Address, map, phone and WhatsApp for Dhruva Hospitals at Sandhya Circle, Dwaraka Nagar, Kadapa, beside Raithu Bazar. OPD 9 AM – 8 PM; 24/7 emergency +91 90368 52311."
      jsonLd={[
        hospitalSchema(),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]),
      ]}
    >
      {/* Page Header */}
      <PageHeader
        eyebrow="Contact Us"
        title="Contact Dhruva Hospitals, Kadapa"
        subtitle="Connect with Dhruva Hospitals for appointments, medical enquiries, or round-the-clock emergency support."
      />

      <section className="container-page py-16 sm:py-20">

        {/* Contact Information Cards */}
        <h2 className="sr-only">Contact information</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map(({ icon: Icon, label, lines }) => (
            <div key={label} className="info-card">
              <span className="text-navy-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>

              <h3 className="mt-4 text-base font-semibold text-neutral-950">
                {label}
              </h3>

              <ul className="mt-1 space-y-1 text-sm text-neutral-600">
                {lines.map((line) => (
                  <li key={line.text}>
                    {line.href ? (
                      <a
                        href={line.href}
                        className={linkClass}
                        {...(line.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {line.text}
                      </a>
                    ) : (
                      line.text
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Full Width Location */}
        <div className="mt-14">
          <div className="rounded-2xl border border-neutral-100 p-5 sm:p-6">

            {/* Location Header */}
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-navy-700">
                <LocationIcon className="h-6 w-6" />
              </span>

              <div>
                <h2 className="text-2xl font-bold text-neutral-950">
                  Location
                </h2>

                <address className="mt-2 max-w-5xl text-sm not-italic leading-6 text-neutral-500">
                  {site.name}, {site.address.full}.
                </address>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-600">
                  We are at Sandhya Circle in Dwaraka Nagar, beside Raithu Bazar and near the RTC bus stand in Kadapa
                  (Cuddapah). Kadapa airport is about 12 km away.
                </p>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-600">
                  Coming from Proddatur, Rayachoti, Pulivendula, Badvel, Rajampet, Mydukur or elsewhere in YSR Kadapa
                  district? Take a bus to the Kadapa RTC bus stand; the hospital is nearby at Sandhya Circle. Call{' '}
                  <a href={site.phones.main.href} className={linkClass}>
                    {site.phones.main.display}
                  </a>{' '}
                  if you need directions.
                </p>
              </div>
            </div>

            {/* Google Maps Link */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 transition-colors hover:text-navy-800"
            >
              Open in Google Maps

              <ExternalLinkIcon className="h-4 w-4" />
            </a>

            {/* Google Maps */}
            <div className="mt-5 overflow-hidden rounded-xl border border-neutral-200">
              <iframe
                title="Dhruva Hospitals Location"
                src={googleMapsEmbedUrl}
                className="h-[450px] w-full border-0 sm:h-[550px] lg:h-[600px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-neutral-100 p-5 sm:p-6">
          <h2 className="text-2xl font-bold text-neutral-950">Calling from Dubai, Kuwait or the UAE?</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-600">
            Call {site.phones.main.display} or WhatsApp us from any country. Our OPD hours ({site.hours.opd} India time)
            are {opdInGulfTime[1].hours} in the UAE and {opdInGulfTime[2].hours} in Kuwait.
          </p>
          <Link href="/nri" className="mt-3 inline-flex text-sm font-semibold text-navy-700 hover:text-navy-900">
            Arranging care in Kadapa from abroad
          </Link>
        </div>

        <EmergencyBanner className="mt-14" />

      </section>
    </Layout>
  );
}
