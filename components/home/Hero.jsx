import Link from 'next/link';
import PlaceholderImage from '../PlaceholderImage';
import { StarIcon, GoogleGIcon } from '../Icons';

const avatarSeeds = ['A', 'B', 'C'];

const trustPoints = [
  { value: '24/7', label: 'Emergency care' },
  { value: '20+', label: 'Medical experts' },
  { value: '4+', label: 'Specialized departments' },
];

export default function Hero() {
  return (
    <section className="container-page pt-10 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Dhruva Hospitals, Kadapa
          </span>
          <h1 className="text-4xl pt-5 font-extrabold leading-[1.08] tracking-tight text-neutral-950 sm:text-5xl lg:text-[3.4rem]">
            Trusted care for every stage of family life.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-500">
            From everyday health needs to advanced treatment, our experienced
            doctors and compassionate team are here to help your family feel
            informed, supported, and cared for.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link href="/book-appointment" className="btn-primary">
              Book an appointment
            </Link>
            <Link href="/doctors" className="text-sm font-semibold text-neutral-900 hover:text-navy-700">
              Meet doctors
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3">
  <div className="flex -space-x-3">
    <img
      src="/images/avatar-1.jpg"
      alt=""
      className="h-11 w-11 rounded-full border-2 border-white object-cover"
    />

    <img
      src="/images/avatar-2.jpg"
      alt=""
      className="h-11 w-11 rounded-full border-2 border-white object-cover"
    />

    <img
      src="/images/avatar-3.jpg"
      alt=""
      className="h-11 w-11 rounded-full border-2 border-white object-cover"
    />
  </div>

  <div>
    <div className="flex items-center gap-1.5">
      <GoogleGIcon className="h-4 w-4" />

      <div className="flex text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-3.5 w-3.5" />
        ))}
      </div>
    </div>

    <p className="mt-0.5 text-sm text-neutral-600">
      4.9 average rating from 100+ patients
    </p>
  </div>
</div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-neutral-100 pt-6">
            {trustPoints.map((point) => (
              <div key={point.label}>
                <div className="text-xl font-extrabold text-navy-700 sm:text-2xl">
                  {point.value}
                </div>
                <p className="mt-1 text-xs leading-snug text-neutral-500 sm:text-sm">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <PlaceholderImage
          icon="people"
          file="/images/hero-care.jpg"
          className="aspect-[4/3] w-full rounded-3xl"
        />
      </div>
    </section>
  );
}
