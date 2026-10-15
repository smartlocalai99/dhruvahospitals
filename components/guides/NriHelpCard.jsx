import { FaWhatsapp } from 'react-icons/fa';
import { PhoneIcon } from '@/components/Icons';
import { nriDesk } from '@/lib/nri';
import { site, whatsappLink } from '@/lib/site';

// Navy call-to-action card for the NRI WhatsApp desk. `ui` holds the strings for the page's language.
export default function NriHelpCard({ ui, className = '' }) {
  return (
    <div className={`rounded-3xl bg-navy-700 p-6 text-white sm:p-7 ${className}`}>
      <h2 className="text-lg font-bold">{ui.helpTitle}</h2>
      <p className="mt-2 text-sm leading-relaxed text-navy-100">{ui.helpText}</p>
      {(nriDesk.coordinator || nriDesk.hours) && (
        <p className="mt-3 text-sm text-white">
          {nriDesk.coordinator}
          {nriDesk.coordinator && nriDesk.hours && <br />}
          {nriDesk.hours && <span className="text-navy-100">{nriDesk.hours}</span>}
        </p>
      )}
      <a
        href={whatsappLink(nriDesk.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-light mt-5 w-full gap-2"
      >
        <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
        {ui.whatsapp}
      </a>
      <a
        href={site.phones.main.href}
        className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-white hover:underline"
      >
        <PhoneIcon className="h-4 w-4" aria-hidden="true" />
        {ui.call} {site.phones.main.display}
      </a>
    </div>
  );
}
