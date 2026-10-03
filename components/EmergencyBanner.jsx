import { site } from '@/lib/site';

export default function EmergencyBanner({
  title = 'Need Immediate Medical Attention?',
  description = "Our emergency service and ambulance are available 24/7. Don't hesitate to contact us for any medical emergency.",
  className = '',
}) {
  return (
    <div className={`rounded-3xl bg-brandred-600 px-8 py-10 text-center text-white sm:px-12 ${className}`}>
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-white/90 sm:text-base">{description}</p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
        <a
          href={site.phones.emergency.href}
          className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-brandred-600 transition-opacity hover:opacity-90"
        >
          Emergency Call: {site.phones.emergency.display}
        </a>
        <a
          href={site.phones.ambulance.href}
          className="inline-flex items-center justify-center rounded-2xl border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          Ambulance: {site.phones.ambulance.display}
        </a>
      </div>
    </div>
  );
}
