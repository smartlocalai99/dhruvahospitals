import { FaWhatsapp } from 'react-icons/fa';
import { LocationIcon, PhoneIcon } from './Icons';
import { googleMapsUrl, site, whatsappLink } from '@/lib/site';

const item =
  'flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[11px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy-700';

// Phones and tablets: a bottom bar with the four things people most often need from a hospital site.
// Desktop: floating WhatsApp and call buttons.
export default function MobileActionBar() {
  return (
    <>
      <nav
        aria-label="Quick actions"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden"
      >
        <div className="mx-auto flex max-w-xl">
          <a href={site.phones.main.href} className={`${item} text-navy-700 hover:bg-navy-50`}>
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            Book a visit
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`${item} text-navy-700 hover:bg-navy-50`}
          >
            <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${item} text-navy-700 hover:bg-navy-50`}
          >
            <LocationIcon className="h-5 w-5" aria-hidden="true" />
            Directions
          </a>
          <a href={site.phones.emergency.href} className={`${item} bg-brandred-600 text-white hover:bg-brandred-500`}>
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            Emergency
          </a>
        </div>
      </nav>
      {/* Desktop: floating WhatsApp and call buttons in the corner. */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 lg:flex">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          title="WhatsApp us"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
        >
          <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
        </a>
        <a
          href={site.phones.main.href}
          aria-label={`Call ${site.phones.main.display} to book`}
          title={`Call ${site.phones.main.display}`}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-700 text-white shadow-lg shadow-black/15 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
        >
          <PhoneIcon className="h-6 w-6" aria-hidden="true" />
        </a>
      </div>

      {/* Keeps the end of the page clear of the bar. */}
      <div aria-hidden="true" className="h-[calc(3.75rem+env(safe-area-inset-bottom))] bg-navy-700 lg:hidden" />
    </>
  );
}
