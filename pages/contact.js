import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

import {
  PhoneIcon,
  MailIcon,
  ClockIcon,
  LocationIcon,
  ExternalLinkIcon,
} from '@/components/Icons';

const infoCards = [
  {
    icon: PhoneIcon,
    label: 'Call Us',
    value: '+91 9959959693',
    href: 'tel:+919959959693',
  },
  {
    icon: MailIcon,
    label: 'Mail Us',
    value: 'dhruvahospitalkadapa@gmail.com',
    href: 'mailto:dhruvahospitalkadapa@gmail.com',
  },
  {
    icon: ClockIcon,
    label: 'Our Timings',
    value: 'Mon-Sun, 9am to 5pm',
  },
];

const address =
  'Venu Gopal House, S Reddy Hospital, 1/705-1, beside Raithu Bazar, Dwaraka Nagar, Old Kadapa, Andhra Pradesh 516001.';

const mapAddress =
  'Dhruva Hospitals, Venu Gopal House, S Reddy Hospital, 1/705-1, beside Raithu Bazar, Dwaraka Nagar, Old Kadapa, Andhra Pradesh 516001';

export default function ContactPage() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapAddress
  )}`;

  const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    mapAddress
  )}&output=embed`;

  return (
    <Layout
      title="Contact Us"
      description="Connect with Dhruva Hospitals for appointments, medical enquiries, or round-the-clock emergency support."
    >
      {/* Page Header */}
      <PageHeader
        eyebrow="Contact Us"
        title="Your Health Is Always Within Reach"
        subtitle="Connect with Dhruva Hospitals for appointments, medical enquiries, or round-the-clock emergency support."
      />

      <section className="container-page py-16 sm:py-20">

        {/* Contact Information Cards */}
        <div className="grid gap-5 sm:grid-cols-3">
          {infoCards.map(({ icon: Icon, label, value, href }) => {
            const Card = href ? 'a' : 'div';

            return (
            <Card
              key={label}
              href={href}
              className="info-card"
            >
              <span className="text-navy-700">
                <Icon className="h-5 w-5" />
              </span>

              <h3 className="mt-4 text-base font-semibold text-neutral-950">
                {label}
              </h3>

              <p className="mt-1 text-sm text-neutral-600">
                {value}
              </p>
            </Card>
            );
          })}
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

                <p className="mt-2 max-w-5xl text-sm leading-6 text-neutral-500">
                  {address}
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

      </section>
    </Layout>
  );
}