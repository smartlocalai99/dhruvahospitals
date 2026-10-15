import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import NriHelpCard from '@/components/guides/NriHelpCard';
import { ArrowRightIcon, CheckIcon } from '@/components/Icons';
import { formatDate, guideLanguages, guidePath } from '@/lib/guide-languages';
import { guideLinks } from '@/lib/guides';
import { airports, nriDesk, nriPackages, nriPackagesCheckedOn, nriSteps, recordChecklist } from '@/lib/nri';
import { breadcrumbSchema } from '@/lib/schema';

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

export default function NriPage({ guides }) {
  return (
    <Layout
      title="Delivering in Kadapa from Abroad"
      description="Plan your delivery at Dhruva Hospitals, Kadapa from the Gulf or anywhere abroad: WhatsApp NRI desk, pre-arrival video consult with the obstetrician, record review, attendant stay and airport pickup."
      jsonLd={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'NRI care', path: '/nri' },
      ])}
    >
      <PageHeader
        eyebrow="NRI care"
        title="Having Your Baby in Kadapa While You Live Abroad"
        subtitle="One WhatsApp desk to plan your delivery from the Gulf or anywhere abroad, from your first report to your baby’s passport."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-14">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">How it works</h2>
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
            Services for families travelling from abroad
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
                  className="mt-2 inline-block text-sm font-medium text-navy-700 hover:underline"
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
