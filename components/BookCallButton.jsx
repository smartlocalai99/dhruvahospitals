import { PhoneIcon } from './Icons';
import { site } from '@/lib/site';

// Appointments are booked by phone: every "Book" button dials the hospital directly.
export default function BookCallButton({ label = 'Book an appointment', className = 'btn-primary', ...props }) {
  const { display, href } = site.phones.main;

  return (
    <a
      href={href}
      title={`Call ${display}`}
      aria-label={`${label}: call ${display}`}
      className={`${className} gap-2`}
      {...props}
    >
      <PhoneIcon className="h-4 w-4 flex-none" aria-hidden="true" />
      {label}
    </a>
  );
}
