import { useState } from 'react';
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
    value: '+91 9********5',
  },
  {
    icon: MailIcon,
    label: 'Mail Us',
    value: 'dhruv@ac.in',
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
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

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
      <PageHeader
        eyebrow="Contact Us"
        title="Your Health Is Always Within Reach"
        subtitle="Connect with Dhruva Hospitals for appointments, medical enquiries, or round-the-clock emergency support."
      />

      <section className="container-page py-16 sm:py-20">

        {/* Contact Information Cards */}
        <div className="grid gap-5 sm:grid-cols-3">
          {infoCards.map(({ icon: Icon, label, value }) => (
            <div key={label} className="info-card">
              <span className="text-navy-700">
                <Icon className="h-5 w-5" />
              </span>

              <h3 className="mt-4 text-base font-semibold text-neutral-950">
                {label}
              </h3>

              <p className="mt-1 text-sm text-neutral-600">
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form + Location */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-950">
              Reach out for any queries
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="field-label"
                >
                  Full Name*
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="field-input"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="field-label"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="johnsmith@gmail.com"
                  className="field-input"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="field-label"
                >
                  Contact Number*
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 12345 67890"
                  className="field-input"
                />
              </div>

              {/* Query */}
              <div>
                <label
                  htmlFor="query"
                  className="field-label"
                >
                  Ask Query*
                </label>

                <textarea
                  id="query"
                  name="query"
                  required
                  rows={4}
                  value={form.query}
                  onChange={handleChange}
                  placeholder="Write something..."
                  className="field-input resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary w-full sm:w-auto"
              >
                Submit
              </button>

              {/* Success Message */}
              {submitted && (
                <p
                  className="text-sm font-medium text-navy-700"
                  role="status"
                >
                  Thanks — we&apos;ve received your query and will get back
                  to you shortly.
                </p>
              )}
            </form>
          </div>

          {/* Location */}
          <div className="rounded-2xl border border-neutral-100 p-5">

            {/* Location Heading */}
            <div className="flex items-start gap-2 text-navy-700">
              <LocationIcon className="mt-0.5 h-5 w-5 flex-none" />

              <div>
                <h3 className="text-base font-semibold text-neutral-950">
                  Location
                </h3>

                <p className="mt-1 text-sm leading-6 text-neutral-500">
                  {address}
                </p>
              </div>
            </div>

            {/* Open in Google Maps */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-navy-800"
            >
              Open in Google Maps

              <ExternalLinkIcon className="h-3 w-3" />
            </a>

            {/* Google Maps Embed */}
            <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200">
              <iframe
                title="Dhruva Hospitals Location"
                src={googleMapsEmbedUrl}
                className="h-[350px] w-full border-0"
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







