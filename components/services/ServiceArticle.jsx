import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import CoverImage from '@/components/CoverImage';
import DoctorCard from '@/components/DoctorCard';
import BookCallButton from '@/components/BookCallButton';
import EmergencyBanner from '@/components/EmergencyBanner';
import KeyFacts from '@/components/KeyFacts';
import PcpndtNotice from '@/components/PcpndtNotice';
import YouTubeShort from '@/components/YouTubeShort';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, LocationIcon } from '@/components/Icons';
import { getDoctor, hasProfile } from '@/lib/data';
import { googleMapsUrl, site, whatsappLink } from '@/lib/site';
import { breadcrumbSchema, faqSchema, serviceWebPageSchema } from '@/lib/schema';
import { serviceUi } from '@/lib/service-languages';

// Pages that mention scans or fertility treatment carry the PC & PNDT statement.
const pcpndtServices = ['pregnancy', 'diagnostics', 'fertility'];

// One service page, in English (/services/[slug]) or Telugu (/te/services/[slug]).
// `service`: the service's fields in this page's language (title, heading, intro, treatments …) plus
// `slug`, `image` and `doctors`. `guides`, `otherServices`: [{ href, title }]. `languageLink`: the same
// page in the other language, if there is one: { href, hrefLang, lang, label }.
export default function ServiceArticle({
  lang = 'en',
  path,
  service,
  faqs = [],
  videos = [],
  sources = [],
  guides = [],
  otherServices = [],
  whyChoose = [],
  banner,
  showAbroad = false,
  alternates = [],
  languageLink,
}) {
  const ui = serviceUi[lang];
  const specialists = service.doctors.map(getDoctor).filter(Boolean);
  const heading = service.heading || service.title;

  const facts = [
    specialists.length > 0 && {
      label: specialists.length > 1 ? ui.facts.specialists : ui.facts.specialist,
      value: specialists.map((doctor, index) => (
        <span key={doctor.slug}>
          {index > 0 && <br />}
          {hasProfile(doctor) ? (
            <Link href={`/doctors/${doctor.slug}`} className="text-navy-700 hover:underline">
              {doctor.name}
            </Link>
          ) : (
            doctor.name
          )}
          , {doctor.credentials}
        </span>
      )),
    },
    {
      label: ui.facts.where,
      value: (
        <>
          {site.address.full}
          <br />
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-navy-700 hover:underline">
            {ui.facts.getDirections}
          </a>
        </>
      ),
    },
    { label: ui.facts.opd, value: site.hours.opd },
    {
      label: ui.facts.emergency,
      value: ui.facts.emergencyValue(
        <a href={site.phones.emergency.href} className="text-navy-700 hover:underline">
          {site.phones.emergency.display}
        </a>
      ),
    },
    {
      label: ui.facts.howToBook,
      value: ui.facts.howToBookValue(
        <a href={site.phones.main.href} className="text-navy-700 hover:underline">
          {site.phones.main.display}
        </a>,
        <a href={site.phones.mobile.href} className="text-navy-700 hover:underline">
          {site.phones.mobile.display}
        </a>,
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-navy-700 hover:underline">
          {ui.facts.whatsappUs}
        </a>
      ),
    },
  ].filter(Boolean);

  const schemas = [
    serviceWebPageSchema(service, specialists, { path, inLanguage: ui.hrefLang }),
    breadcrumbSchema([
      { name: ui.home, path: '/' },
      { name: ui.eyebrow, path: '/services' },
      { name: service.title, path },
    ]),
  ];
  if (faqs.length) schemas.push(faqSchema(faqs));

  return (
    <Layout
      title={service.seoTitle || service.title}
      description={service.seoDescription || `${service.summary} ${service.title} at Dhruva Hospitals, Kadapa.`}
      image={service.image}
      imageAlt={service.imageAlt}
      ogLocale={ui.ogLocale}
      alternates={alternates}
      jsonLd={schemas}
    >
      <div lang={lang === 'te' ? 'te' : undefined} className={lang === 'te' ? 'telugu-page' : undefined}>
        <PageHeader eyebrow={ui.eyebrow} title={heading} subtitle={service.summary} />

        <section className="container-page py-16 sm:py-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/services" className="text-link">
              <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
              {ui.allServices}
            </Link>
            {languageLink && (
              <Link
                href={languageLink.href}
                hrefLang={languageLink.hrefLang}
                lang={languageLink.lang}
                className="rounded-full border border-navy-200 px-4 py-1.5 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-50"
              >
                {languageLink.label}
              </Link>
            )}
          </div>

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
                {ui.expertise(service.title)}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">{service.intro}</p>

              <KeyFacts title={ui.facts.atAGlance} rows={facts} className="mt-8" />
              {pcpndtServices.includes(service.slug) && <PcpndtNotice lang={lang} className="mt-6" />}

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-neutral-950">{ui.treatments}</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {service.treatments.map((treatment) => (
                  <div key={treatment.name} className="info-card">
                    <h3 className="text-base font-semibold text-neutral-950">{treatment.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{treatment.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-neutral-950">{ui.highlights}</h2>
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
                  <h2 className="text-2xl font-bold tracking-tight text-neutral-950">{ui.questions(service.title)}</h2>
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

              {sources.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-base font-semibold text-neutral-950">{ui.sources}</h2>
                  <ul className="mt-3 space-y-2 text-sm">
                    {sources.map((source) => (
                      <li key={source.url}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-navy-700 underline-offset-2 hover:underline"
                        >
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {videos.length > 0 && (
                <div className="mt-14">
                  <h2 className="text-2xl font-bold tracking-tight text-neutral-950">{ui.videosTitle}</h2>
                  <p className="mt-2 text-sm text-neutral-500">{ui.videosNote}</p>
                  <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {videos.map((video) => (
                      <li key={video.id}>
                        <YouTubeShort id={video.id} title={video.title} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="mt-12 text-sm text-neutral-500">{ui.disclaimer(site.phones.emergency.display)}</p>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl bg-navy-700 p-7 text-white">
                <h2 className="text-xl font-semibold">{ui.bookTitle}</h2>
                <p className="mt-2 text-sm leading-relaxed text-navy-100">{ui.bookText(site.hours.opd)}</p>
                <BookCallButton label={ui.bookButton} className="btn-light mt-6 w-full" />
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
                    {ui.directions}
                  </a>
                </div>
                <div className="mt-6 border-t border-white/15 pt-5 text-sm text-navy-100">
                  <p>{ui.emergency247}</p>
                  <a href={site.phones.emergency.href} className="mt-1 block text-lg font-semibold text-white hover:underline">
                    {site.phones.emergency.display}
                  </a>
                </div>
              </div>

              {showAbroad && (
                <div className="rounded-3xl border border-navy-200 p-7">
                  <h2 className="text-lg font-semibold text-neutral-950">{ui.abroadTitle}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{ui.abroadText}</p>
                  <Link href="/nri" className="text-link mt-4">
                    {ui.abroadLink}
                    <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              )}

              {guides.length > 0 && (
                <div className="rounded-3xl border border-navy-200 p-7">
                  <h2 className="text-lg font-semibold text-neutral-950">{ui.guidesTitle}</h2>
                  <ul className="mt-4 divide-y divide-neutral-100">
                    {guides.map((guide) => (
                      <li key={guide.href}>
                        <Link
                          href={guide.href}
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

              {whyChoose.length > 0 && (
                <div className="rounded-3xl border border-navy-200 p-7">
                  <h2 className="text-lg font-semibold text-neutral-950">{ui.whyTitle}</h2>
                  <ul className="mt-5 space-y-3">
                    {whyChoose.map((reason) => (
                      <li key={reason} className="check-bullet">
                        <span className="check-bullet-icon">
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {otherServices.length > 0 && (
                <div className="rounded-3xl border border-navy-200 p-7">
                  <h2 className="text-lg font-semibold text-neutral-950">{ui.otherTitle}</h2>
                  <ul className="mt-4 divide-y divide-neutral-100">
                    {otherServices.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
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
              )}
            </aside>
          </div>

          {specialists.length > 0 && (
            <div className="mt-20">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                {ui.specialistsEyebrow}
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                {specialists.length > 1 ? ui.meetMany : ui.meetOne}
              </h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {specialists.map((doctor) => (
                  <DoctorCard key={doctor.slug} doctor={doctor} />
                ))}
              </div>
            </div>
          )}

          {banner && (
            <EmergencyBanner
              className="mt-20"
              title={banner.title}
              description={banner.description}
              callLabel={ui.emergencyCall}
              ambulanceLabel={ui.ambulance}
            />
          )}
        </section>
      </div>
    </Layout>
  );
}
