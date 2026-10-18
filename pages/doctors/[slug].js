import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import CoverImage from '@/components/CoverImage';
import DoctorCard from '@/components/DoctorCard';
import BookCallButton from '@/components/BookCallButton';
import { ArrowLeftIcon, CheckIcon } from '@/components/Icons';
import { doctors, getDoctor, getService, hasProfile } from '@/lib/data';
import { site } from '@/lib/site';
import { guidePath } from '@/lib/guide-languages';
import { publishedGuides } from '@/lib/guides';
import { breadcrumbSchema, hospitalSchema, physicianSchema } from '@/lib/schema';

function CheckList({ items }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
          <span className="check-bullet-icon mt-px bg-white">
            <CheckIcon className="h-3 w-3" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function DoctorProfilePage({ slug, reviewedGuides }) {
  const doctor = getDoctor(slug);
  const relatedServices = (doctor.services || []).map(getService).filter(Boolean);
  const otherDoctors = doctors.filter((item) => item.slug !== slug && hasProfile(item));
  // Fact sheet: only rows the hospital has confirmed are shown.
  const facts = [
    { label: 'Specialisation', value: doctor.designation },
    { label: 'Qualifications', value: doctor.credentials },
    { label: 'Medical registration', value: doctor.registration },
    { label: 'Languages', value: doctor.languages.join(', ') },
    { label: 'OPD timings', value: doctor.opd },
    { label: 'Teleconsultation', value: doctor.teleconsult },
  ].filter((fact) => fact.value);

  return (
    <Layout
      title={doctor.seoTitle || `${doctor.name} – ${doctor.title}`}
      description={`${doctor.name} (${doctor.credentials}), ${doctor.designation} at Dhruva Hospitals, Kadapa. Book on ${site.phones.main.display}.`}
      image={doctor.image}
      imageAlt={doctor.name}
      jsonLd={[
        physicianSchema(doctor),
        hospitalSchema(),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Doctors', path: '/doctors' },
          { name: doctor.name, path: `/doctors/${slug}` },
        ]),
      ]}
    >
      <PageHeader eyebrow="Doctors" title={doctor.name} subtitle={doctor.designation} />

      <section className="container-page py-16 sm:py-20">
        <Link href="/doctors" className="text-link">
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          All doctors
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">
          <div className="relative space-y-5">
            <CoverImage
              src={doctor.image}
              alt={`${doctor.name}, ${doctor.title} at Dhruva Hospitals, Kadapa`}
              priority
              sizes="(min-width: 1024px) 380px, 100vw"
              className="aspect-[4/5] w-full rounded-3xl"
            />
            {doctor.photoAtHospital && (
              <figure>
                <CoverImage
                  src={doctor.photoAtHospital}
                  alt={`${doctor.name} at the reception of Dhruva Hospitals, Kadapa`}
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="aspect-square w-full rounded-3xl"
                  imageClassName="object-cover object-[70%_center]"
                />
                <figcaption className="mt-2 text-sm text-neutral-600">{doctor.name} at Dhruva Hospitals, Kadapa</figcaption>
              </figure>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">{doctor.title}</h2>
            {doctor.role && <p className="mt-2 text-sm font-semibold text-navy-700">{doctor.role}</p>}

            <div className="mt-5 flex flex-wrap gap-2">
              {doctor.qualifications.map((qualification) => (
                <span
                  key={qualification}
                  className="rounded-full border border-navy-200 px-4 py-1.5 text-sm font-medium text-navy-800"
                >
                  {qualification}
                </span>
              ))}
            </div>

            <blockquote className="mt-8 border-l-4 border-navy-700 pl-5 text-base leading-relaxed text-neutral-600">
              {doctor.bio}
            </blockquote>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="info-card">
                <h3 className="text-base font-semibold text-neutral-950">Experience Highlights</h3>
                <CheckList items={doctor.experience} />
              </div>
              {doctor.fellowships.length > 0 && (
                <div className="info-card">
                  <h3 className="text-base font-semibold text-neutral-950">Fellowships &amp; Certifications</h3>
                  <CheckList items={doctor.fellowships} />
                </div>
              )}
            </div>

            <dl className="mt-8 grid gap-6 border-t border-neutral-100 pt-8 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-sm font-semibold text-neutral-950">{fact.label}</dt>
                  <dd className="mt-1 text-sm text-neutral-600">{fact.value}</dd>
                </div>
              ))}
              {relatedServices.length > 0 && (
                <div>
                  <dt className="text-sm font-semibold text-neutral-950">Specialities</dt>
                  <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    {relatedServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="font-medium text-navy-700 hover:text-navy-900 hover:underline"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </dd>
                </div>
              )}
              {reviewedGuides.length > 0 && (
                <div className="sm:col-span-2">
                  <dt className="text-sm font-semibold text-neutral-950">Patient guides reviewed</dt>
                  <dd className="mt-1 flex flex-col gap-1 text-sm">
                    {reviewedGuides.map((guide) => (
                      <Link
                        key={guide.slug}
                        href={guidePath(guide.slug)}
                        className="font-medium text-navy-700 hover:text-navy-900 hover:underline"
                      >
                        {guide.title}
                      </Link>
                    ))}
                  </dd>
                </div>
              )}
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <BookCallButton />
              <span className="text-sm font-semibold text-neutral-900">{site.phones.main.display}</span>
            </div>
          </div>
        </div>

        {otherDoctors.length > 0 && (
          <div className="mt-20 border-t border-neutral-100 pt-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">Other Specialists</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {otherDoctors.map((item) => (
                <DoctorCard key={item.slug} doctor={item} />
              ))}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: doctors.filter(hasProfile).map((doctor) => ({ params: { slug: doctor.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const reviewedGuides = publishedGuides
    .filter((guide) => guide.reviewer === params.slug && guide.reviewedOn)
    .map((guide) => ({ slug: guide.slug, title: guide.en.title }));
  return { props: { slug: params.slug, reviewedGuides } };
}
