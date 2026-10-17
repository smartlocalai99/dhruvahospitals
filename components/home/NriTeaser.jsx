import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { ArrowRightIcon, CheckIcon } from '../Icons';
import { guidePath } from '@/lib/guide-languages';
import { nriDesk } from '@/lib/nri';
import { whatsappLink } from '@/lib/site';

const points = [
  'Video consult with our obstetrician before you fly',
  'One WhatsApp desk for records, travel and stay',
  'Airport pickup from Kadapa, Tirupati, Bengaluru, Chennai or Hyderabad',
];

// Home-page banner for families who live abroad. `guides`: [{ slug, title }].
export default function NriTeaser({ guides = [] }) {
  return (
    <section className="container-page py-10 sm:py-14">
      <div className="grid gap-10 rounded-3xl bg-navy-700 px-6 py-10 text-white sm:px-10 sm:py-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:px-14 lg:py-14">
        <div>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Living abroad?
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Have your baby in Kadapa, close to family</h2>
          <p className="mt-4 max-w-lg text-navy-100">
            Families in the Gulf and beyond plan their delivery with us from home, from the first report to the baby’s
            passport.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm sm:text-base">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/15">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href="/nri" className="btn-light">
              Plan your delivery
            </Link>
            <a
              href={whatsappLink(nriDesk.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
              WhatsApp the NRI desk
            </a>
          </div>
        </div>

        {guides.length > 0 && (
          <div className="self-center">
            <h3 className="text-sm font-semibold text-navy-100">Answers before you travel</h3>
            <ul className="mt-4 space-y-3">
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={guidePath(guide.slug)}
                    className="group flex items-center justify-between gap-4 rounded-2xl bg-white/10 px-5 py-4 ring-1 ring-inset ring-white/15 transition-colors hover:bg-white/15"
                  >
                    <span className="text-sm font-semibold leading-snug sm:text-base">{guide.title}</span>
                    <ArrowRightIcon
                      className="h-4 w-4 flex-none transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/te/guides"
              hrefLang="te-IN"
              lang="te"
              className="mt-4 inline-block text-sm font-medium text-navy-100 hover:text-white hover:underline"
            >
              తెలుగులో చదవండి
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
