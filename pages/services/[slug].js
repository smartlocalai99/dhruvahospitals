import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import CoverImage from '@/components/CoverImage';
import DoctorCard from '@/components/DoctorCard';
import BookCallButton from '@/components/BookCallButton';
import EmergencyBanner from '@/components/EmergencyBanner';
import KeyFacts from '@/components/KeyFacts';
import YouTubeShort from '@/components/YouTubeShort';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, LocationIcon } from '@/components/Icons';
import { getDoctor, getService, services, whyChooseUs } from '@/lib/data';
import { googleMapsUrl, site, whatsappLink } from '@/lib/site';
import { breadcrumbSchema, faqSchema, serviceWebPageSchema } from '@/lib/schema';
import { guidePath } from '@/lib/guide-languages';
import { guideLinks } from '@/lib/guides';
import { getServiceDetails } from '@/lib/service-details';

// Patient guides linked from a service page's sidebar.
const serviceGuides = {
  pregnancy: ['delivering-in-kadapa-from-dubai', 'baby-birth-certificate-aadhaar-passport-nri', 'nicu-levels-of-care'],
  gynaecology: ['gynaecology-appointment-kadapa'],
  paediatrics: ['paediatrician-appointment-kadapa', 'nicu-levels-of-care'],
  neonatal: ['nicu-levels-of-care', 'baby-birth-certificate-aadhaar-passport-nri'],
};

// Services that families abroad most often plan around; these pages link to /nri.
const abroadServices = ['pregnancy', 'gynaecology', 'paediatrics', 'neonatal', 'fertility'];

const emergencyBanners = {
  neonatal: {
    title: 'Neonatal Emergency?',
    description:
      'Every second counts. Our NICU team is ready 24 hours a day, 7 days a week, with rapid admission protocols for newborns who need immediate care.',
  },
  paediatrics: {
    title: 'Is Your Child Unwell Right Now?',
    description:
      'Our neonatal and paediatric emergency team is on duty 24 hours a day, 7 days a week. Call the emergency line or come straight to the hospital.',
  },
};

export default function ServicePage({ slug, guides, faqs, videos }) {
  const service = getService(slug);
  const specialists = service.doctors.map(getDoctor).filter(Boolean);
  const otherServices = services.filter((item) => item.slug !== slug);
  const heading = service.heading || service.title;
  const banner = emergencyBanners[slug];

  const facts = [
    specialists.length > 0 && {
      label: specialists.length > 1 ? 'Specialists' : 'Specialist',
      value: specialists.map((doctor, index) => (
        <span key={doctor.slug}>
          {index > 0 && <br />}
          <Link href={`/doctors/${doctor.slug}`} className="text-navy-700 hover:underline">
            {doctor.name}
          </Link>
          , {doctor.credentials}
        </span>
      )),
    },
    {
      label: 'Where',
      value: (
        <>
          {site.address.full}
          <br />
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-navy-700 hover:underline">
            Get directions
          </a>
        </>
      ),
    },
    { label: 'Outpatient (OPD) hours', value: site.hours.opd },
    {
      label: 'Emergency',
      value: (
        <>
          24/7 on{' '}
          <a href={site.phones.emergency.href} className="text-navy-700 hover:underline">
            {site.phones.emergency.display}
          </a>
        </>
      ),
    },
    {
      label: 'How to book',
      value: (
        <>
          Call{' '}
          <a href={site.phones.main.href} className="text-navy-700 hover:underline">
            {site.phones.main.display}
          </a>{' '}
          or{' '}
          <a href={site.phones.mobile.href} className="text-navy-700 hover:underline">
            {site.phones.mobile.display}
          </a>
          , or{' '}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-navy-700 hover:underline">
            WhatsApp us
          </a>
        </>
      ),
    },
  ].filter(Boolean);

  const schemas = [
    serviceWebPageSchema(service, specialists),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: service.title, path: `/services/${slug}` },
    ]),
  ];
  if (faqs.length) schemas.push(faqSchema(faqs));

  return (
    <Layout
      title={service.seoTitle || service.title}
      description={service.seoDescription || `${service.summary} ${service.title} at Dhruva Hospitals, Kadapa.`}
      image={service.image}
      imageAlt={service.imageAlt}
      jsonLd={schemas}
    >
      <PageHeader eyebrow="Services" title={heading} subtitle={service.summary} />

      <section className="container-page py-16 sm:py-20">
        <Link href="/services" className="text-link">
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          All services
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
          <div className="min-w-0">
            <CoverImage
              src={service.image}
              alt={service.imageAlt}
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="aspect-[16/9] w-full rounded-3xl"
            />

            <h2 className="mt-10 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
              Our Expertise in {service.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">{service.intro}</p>

            <KeyFacts rows={facts} className="mt-8" />

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-neutral-950">Treatments & Services</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {service.treatments.map((treatment) => (
                <div key={treatment.name} className="info-card">
                  <h3 className="text-base font-semibold text-neutral-950">{treatment.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{treatment.description}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-neutral-950">Highlights</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="check-bullet">
                  <span className="check-bullet-icon">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            {faqs.length > 0 && (
              <div className="mt-14">
                <h2 className="text-2xl font-bold tracking-tight text-neutral-950">
                  Questions About {service.title} at Dhruva
                </h2>
                <div className="mt-6 border-t border-neutral-200">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="border-b border-neutral-200 py-5">
                      <h3 className="text-base font-semibold text-neutral-950">{faq.question}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {videos.length > 0 && (
              <div className="mt-14">
                <h2 className="text-2xl font-bold tracking-tight text-neutral-950">Watch Our Doctors Explain</h2>
                <p className="mt-2 text-sm text-neutral-500">Short videos from the Dhruva Hospitals YouTube channel.</p>
                <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {videos.map((video) => (
                    <li key={video.id}>
                      <YouTubeShort id={video.id} title={video.title} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-navy-700 p-7 text-white">
              <h2 className="text-xl font-semibold">Book an Appointment</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-100">
                Call or WhatsApp us to book a consultation. OPD hours are {site.hours.opd}.
              </p>
              <BookCallButton className="btn-light mt-6 w-full" />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <LocationIcon className="h-4 w-4" aria-hidden="true" />
                  Directions
                </a>
              </div>
              <div className="mt-6 border-t border-white/15 pt-5 text-sm text-navy-100">
                <p>24/7 Emergency</p>
                <a href={site.phones.emergency.href} className="mt-1 block text-lg font-semibold text-white hover:underline">
                  {site.phones.emergency.display}
                </a>
              </div>
            </div>

            {abroadServices.includes(slug) && (
              <div className="rounded-3xl border border-navy-200 p-7">
                <h2 className="text-lg font-semibold text-neutral-950">Living in Dubai, Kuwait or the UAE?</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Book from abroad by phone or WhatsApp, and plan your family’s visit to Kadapa.
                </p>
                <Link href="/nri" className="text-link mt-4">
                  Arranging care from abroad
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            )}

            {guides.length > 0 && (
              <div className="rounded-3xl border border-navy-200 p-7">
                <h2 className="text-lg font-semibold text-neutral-950">Patient Guides</h2>
                <ul className="mt-4 divide-y divide-neutral-100">
                  {guides.map((guide) => (
                    <li key={guide.slug}>
                      <Link
                        href={guidePath(guide.slug)}
                        className="group flex items-center justify-between gap-3 py-3 text-sm font-medium text-neutral-800 transition-colors hover:text-navy-700"
                      >
                        {guide.title}
                        <ArrowRightIcon
                          className="h-4 w-4 flex-none text-navy-300 transition-transform group-hover:translate-x-0.5 group-hover:text-navy-700"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-3xl border border-navy-200 p-7">
              <h2 className="text-lg font-semibold text-neutral-950">Why Choose Dhruva?</h2>
              <ul className="mt-5 space-y-3">
                {whyChooseUs.map((reason) => (
                  <li key={reason} className="check-bullet">
                    <span className="check-bullet-icon">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-navy-200 p-7">
              <h2 className="text-lg font-semibold text-neutral-950">Other Services</h2>
              <ul className="mt-4 divide-y divide-neutral-100">
                {otherServices.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="group flex items-center justify-between gap-3 py-3 text-sm font-medium text-neutral-800 transition-colors hover:text-navy-700"
                    >
                      {item.title}
                      <ArrowRightIcon
                        className="h-4 w-4 flex-none text-navy-300 transition-transform group-hover:translate-x-0.5 group-hover:text-navy-700"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {specialists.length > 0 && (
          <div className="mt-20">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Specialists
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              {specialists.length > 1 ? 'Meet Your Specialists' : 'Meet Your Specialist'}
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {specialists.map((doctor) => (
                <DoctorCard key={doctor.slug} doctor={doctor} />
              ))}
            </div>
          </div>
        )}

        {banner && <EmergencyBanner className="mt-20" title={banner.title} description={banner.description} />}
      </section>
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: services.map((service) => ({ params: { slug: service.slug } })),
    fallback: false,
  };
}

// FAQs and videos come from lib/service-details.js here, so their text isn't bundled into other pages.
export function getStaticProps({ params }) {
  const { faqs, videos } = getServiceDetails(params.slug);
  return {
    props: { slug: params.slug, guides: guideLinks('en', serviceGuides[params.slug] || []), faqs, videos },
  };
}
