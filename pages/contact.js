import { useState } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import PlaceholderImage from '@/components/PlaceholderImage';
import { PhoneIcon, MailIcon, ClockIcon, LocationIcon, ExternalLinkIcon } from '@/components/Icons';

const infoCards = [
  { icon: PhoneIcon, label: 'Call Us', value: '+91 9********5' },
  { icon: MailIcon, label: 'Mail Us', value: 'dhruv@ac.in' },
  { icon: ClockIcon, label: 'Our Timings', value: 'Mon-Sun, 9am to 5pm' },
];

const address =
  'Venu Gopal House, s reddy hospital, 1/705-1, beside Raithu Bazar Dwaraka nagar, Old, Kadapa, Andhra Pradesh 516001.';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', query: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

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
        <div className="grid gap-5 sm:grid-cols-3">
          {infoCards.map(({ icon: Icon, label, value }) => (
            <div key={label} className="info-card">
              <span className="text-navy-700">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-neutral-950">{label}</h3>
              <p className="mt-1 text-sm text-neutral-600">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-2xl font-bold text-neutral-950">Reach out for any queries</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="field-label">Full Name*</label>
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
              <div>
                <label htmlFor="email" className="field-label">Email</label>
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
              <div>
                <label htmlFor="phone" className="field-label">Contact Number*</label>
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
              <div>
                <label htmlFor="query" className="field-label">Ask Query*</label>
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
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Submit
              </button>
              {submitted && (
                <p className="text-sm font-medium text-navy-700" role="status">
                  Thanks — we&apos;ve received your query and will get back to you shortly.
                </p>
              )}
            </form>
          </div>

          <div className="rounded-2xl border border-neutral-100 p-5">
            <div className="flex items-start gap-2 text-navy-700">
              <LocationIcon className="mt-0.5 h-5 w-5 flex-none" />
              <div>
                <h3 className="text-base font-semibold text-neutral-950">Location</h3>
                <p className="mt-1 text-sm text-neutral-500">{address}</p>
              </div>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-navy-800"
            >
              Open in Google Maps
              <ExternalLinkIcon className="h-3.5 w-3.5" />
            </a>
            <PlaceholderImage
              icon="map"
              file="public/images/map-embed.jpg"
              className="mt-4 aspect-[4/3] w-full rounded-xl"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
