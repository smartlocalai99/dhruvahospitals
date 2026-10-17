import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import NriHelpCard from '@/components/guides/NriHelpCard';
import { ArrowRightIcon, CheckIcon } from '@/components/Icons';
import { formatDate, guideLanguages, guidePath } from '@/lib/guide-languages';
import { guideLinks } from '@/lib/guides';
import {
  airports,
  familyCare,
  nriDesk,
  nriPackages,
  nriPackagesCheckedOn,
  nriSteps,
  opdInGulfTime,
  recordChecklist,
} from '@/lib/nri';
import { site } from '@/lib/site';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';

const { ui } = guideLanguages.en;

// Services we arrange for families travelling from abroad. Described as services, with charges
// confirmed in writing, not as offers.
const services = [
  {
    title: 'WhatsApp NRI desk',
    text: nriDesk.coordinator
      ? `${nriDesk.coordinator} answers your questions and arranges each step below, so you deal with one person.`
      : 'One coordinator answers your questions and arranges each step below, so you deal with one person.',
  },
  {
    title: 'Pre-arrival video consult',
    text: 'A video consultation with obstetrician Dr. S Mounika Reddy before you travel, booked once your records are reviewed.',
  },
  {
    title: 'Record review',
    text: 'Our obstetrician reads your reports from abroad and tells you what to finish there and what can wait until Kadapa.',
  },
  {
    title: 'Attendant stay',
    text: 'One family member can stay with you during your admission. The desk can share options nearby for other family members.',
  },
  {
    title: 'Airport pickup',
    text: 'Pickup from Kadapa, Tirupati, Bengaluru, Chennai or Hyderabad airport. The vehicle and charge are confirmed before you fly.',
  },
  {
    title: 'Help with your baby’s documents',
    text: 'The hospital reports the birth to the registrar, and we give you a checklist for the birth certificate, Baal Aadhaar and passport.',
  },
];

// Questions families abroad ask most. Shown on the page and as FAQPage data.
const faqs = [
  {
    question: 'Can I book an appointment at Dhruva Hospitals from Dubai, Kuwait or the UAE?',
    answer: `Yes. Call ${site.phones.main.display} or ${site.phones.mobile.display}, or WhatsApp ${site.phones.main.display}, from any country. Tell us who the appointment is for and when they will be in Kadapa.`,
  },
  {
    question: 'What are the OPD hours in UAE and Kuwait time?',
    answer: `The OPD runs ${site.hours.opd} India time: 7:30 AM – 6:30 PM in the UAE and Oman, and 6:30 AM – 5:30 PM in Kuwait, Saudi Arabia, Qatar and Bahrain. The emergency line, ${site.phones.emergency.display}, is answered 24/7.`,
  },
  {
    question: 'Does Dhruva Hospitals have a clinic in Dubai, Kuwait or the UAE?',
    answer: `No. Dhruva Hospitals is in Kadapa, Andhra Pradesh, India (${site.address.full}), and has no clinics in the Gulf. Families abroad book by phone or WhatsApp and visit us in Kadapa.`,
  },
  {
    question: 'Can a relative in Kadapa book an appointment for my parents or children?',
    answer: 'Yes. Anyone can book by phone or WhatsApp, and a relative can come with the patient to the appointment.',
  },
  {
    question: 'Can I speak to the obstetrician before I travel to Kadapa to deliver?',
    answer: 'Yes. After reviewing your reports, our desk books a pre-arrival video consultation with obstetrician Dr. S Mounika Reddy.',
  },
  {
    question: 'Which airports are closest to Dhruva Hospitals?',
    answer:
      'Kadapa airport is about 12 km away. Tirupati (about 140 km), Bengaluru (about 260 km), Chennai (about 270 km) and Hyderabad (about 400 km) have more international flights.',
  },
];

export default function NriPage({ guides }) {
  return (
    <Layout
      title="Book a Doctor in Kadapa from Dubai, Kuwait or the UAE"
      description="Living in Dubai, Kuwait or the UAE? Book a gynaecologist, paediatrician or delivery at Dhruva Hospitals in Kadapa by phone or WhatsApp. OPD hours in Gulf time."
      jsonLd={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Families abroad', path: '/nri' },
        ]),
        faqSchema(faqs),
      ]}
    >
      <PageHeader
        eyebrow="For families abroad"
        title="Arranging Care in Kadapa from Dubai, Kuwait or the UAE"
        subtitle="Dhruva Hospitals is in Kadapa, India. Book from any country by phone or WhatsApp, for yourself, your parents or your children."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-14">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">Booking from abroad</h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
              Dhruva Hospitals is in Kadapa, Andhra Pradesh, and has no clinics in the Gulf. You can still book from
              anywhere: call{' '}
              <a href={site.phones.main.href} className="font-semibold text-navy-700 hover:underline">
                {site.phones.main.display}
              </a>{' '}
              or{' '}
              <a href={site.phones.mobile.href} className="font-semibold text-navy-700 hover:underline">
                {site.phones.mobile.display}
              </a>
              , or send a WhatsApp message to {site.phones.main.display}. WhatsApp works from any country with an
              internet connection.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-neutral-950">Our OPD hours in your time</h3>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-neutral-200">
              <table className="w-full min-w-[420px] text-left text-sm">
                <thead className="bg-navy-50 text-navy-900">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Where you are</th>
                    <th scope="col" className="px-4 py-3 font-semibold">OPD hours, local time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-neutral-700">
                  {opdInGulfTime.map((row) => (
                    <tr key={row.place}>
                      <th scope="row" className="px-4 py-3 font-semibold text-neutral-950">{row.place}</th>
                      <td className="whitespace-nowrap px-4 py-3">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-neutral-500">
              The emergency line, {site.phones.emergency.display}, is answered 24 hours a day.
            </p>

            <h2 className="mt-14 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
              Arranging care for your family in Kadapa
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {familyCare.map((item) => (
                <div key={item.title} className="info-card flex flex-col">
                  <h3 className="text-base font-semibold text-neutral-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.text}</p>
                  <Link href={item.link.href} className="text-link mt-auto pt-4">
                    {item.link.label}
                    <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>

            <h2 className="mt-14 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
              Having your baby in Kadapa: how it works
            </h2>
            <ol className="mt-8 space-y-7">
              {nriSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-navy-700 text-sm font-bold text-white"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-base font-semibold text-neutral-950">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600 sm:text-base">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <NriHelpCard ui={ui} />
          </aside>
        </div>

        <div className="mt-20 border-t border-neutral-100 pt-16">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
            Services for families travelling to deliver
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            We arrange these on request. Where a service has a charge, it is confirmed in writing before you book.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="info-card">
                <h3 className="text-base font-semibold text-neutral-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-neutral-100 pt-16 lg:grid-cols-2 lg:gap-14 [&>*]:min-w-0">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
              Send these before your video consult
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
              Photos or PDFs on WhatsApp are fine. Send what you have; the doctor tells you if anything else is needed.
            </p>
            <ul className="mt-6 space-y-3">
              {recordChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700 sm:text-base">
                  <span className="check-bullet-icon mt-0.5">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">Airport pickup</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
              Approximate road distance and drive time to the hospital.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200">
              <table className="w-full min-w-[420px] text-left text-sm">
                <thead className="bg-navy-50 text-navy-900">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Airport</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Distance</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Drive</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-neutral-700">
                  {airports.map((airport) => (
                    <tr key={airport.code}>
                      <th scope="row" className="px-4 py-3 font-semibold text-neutral-950">
                        {airport.city} ({airport.code})
                      </th>
                      <td className="px-4 py-3">{airport.distance}</td>
                      <td className="px-4 py-3">{airport.drive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {nriPackages.length > 0 && nriPackagesCheckedOn && (
          <div className="mt-20 border-t border-neutral-100 pt-16">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">Package prices</h2>
            <p className="mt-3 text-sm text-neutral-600">
              Prices as of <time dateTime={nriPackagesCheckedOn}>{formatDate(nriPackagesCheckedOn)}</time>. Your
              final bill depends on your stay and any extra treatment.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead className="bg-navy-50 text-navy-900">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Package</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Price</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Includes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-neutral-700">
                  {nriPackages.map((item) => (
                    <tr key={item.name}>
                      <th scope="row" className="px-4 py-3 font-semibold text-neutral-950">{item.name}</th>
                      <td className="whitespace-nowrap px-4 py-3">{item.price}</td>
                      <td className="px-4 py-3">{item.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-20 border-t border-neutral-100 pt-16">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
            Questions from families abroad
          </h2>
          <div className="mt-6 max-w-3xl border-t border-neutral-200">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-neutral-200 py-5">
                <h3 className="text-base font-semibold text-neutral-950">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-neutral-100 pt-16">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">Read before you plan</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={guidePath(guide.slug)}
                  className="flex h-full flex-col rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-navy-300 hover:bg-navy-50/50"
                >
                  <h3 className="text-base font-bold leading-snug text-neutral-950">{guide.title}</h3>
                  <span className="text-link mt-auto pt-4">
                    Read the guide
                    <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
                <Link
                  href={guidePath(guide.slug, 'te')}
                  hrefLang="te-IN"
                  lang="te"
                  className="mt-1 inline-block py-1.5 text-sm font-medium text-navy-700 hover:underline"
                >
                  తెలుగులో చదవండి
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  return { props: { guides: guideLinks('en') } };
}
