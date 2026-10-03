import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import CoverImage from '@/components/CoverImage';
import DoctorCard from '@/components/DoctorCard';
import EmergencyBanner from '@/components/EmergencyBanner';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from '@/components/Icons';
import { getDoctor, getService, services, whyChooseUs } from '@/lib/data';
import { site } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/schema';

export default function ServicePage({ slug }) {
  const service = getService(slug);
  const specialists = service.doctors.map(getDoctor).filter(Boolean);
  const otherServices = services.filter((item) => item.slug !== slug);

  return (
    <Layout
      title={service.title}
      description={`${service.summary} ${service.title} at Dhruva Hospitals, Kadapa.`}
      image={service.image}
      imageAlt={service.imageAlt}
      jsonLd={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: service.title, path: `/services/${slug}` },
      ])}
    >
      <PageHeader eyebrow="Services" title={service.title} subtitle={service.summary} />

      <section className="container-page py-16 sm:py-20">
        <Link href="/services" className="text-link">
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          All services
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
          <div>
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

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
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
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-navy-700 p-7 text-white">
              <h2 className="text-xl font-semibold">Book an Appointment</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-100">
                Consult our specialists for a personalised treatment plan tailored to your needs.
              </p>
              <Link href={`/book-appointment?service=${slug}`} className="btn-light mt-6 w-full">
                Book an appointment
              </Link>
              <div className="mt-6 border-t border-white/15 pt-5 text-sm text-navy-100">
                <p>24/7 Emergency</p>
                <a href={site.phones.emergency.href} className="mt-1 block text-lg font-semibold text-white hover:underline">
                  {site.phones.emergency.display}
                </a>
              </div>
            </div>

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

        {slug === 'neonatal' && (
          <EmergencyBanner
            className="mt-20"
            title="Neonatal Emergency?"
            description="Every second counts. Our NICU team is ready 24 hours a day, 7 days a week, with rapid admission protocols for newborns who need immediate care."
          />
        )}
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

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
