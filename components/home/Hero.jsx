import Image from 'next/image';
import Link from 'next/link';
import CoverImage from '../CoverImage';
import CountUp from '../CountUp';
import { StarIcon, GoogleGIcon } from '../Icons';

const avatars = ['/images/avatar-1.jpg', '/images/avatar-2.jpg', '/images/avatar-3.jpg'];

const trustPoints = [
  { value: '5,000+', label: 'Patients served' },
  { value: '15+', label: 'Expert specialists' },
  { value: '24/7', label: 'Emergency care' },
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
            From fertility and pregnancy to newborn and family care, our
            experienced doctors and compassionate team are here to help your
            family feel informed, supported, and cared for.
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
              {avatars.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <GoogleGIcon className="h-4 w-4" aria-hidden="true" />

                <div className="flex text-amber-400" aria-hidden="true">
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
                  <CountUp value={point.value} />
                </div>
                <p className="mt-1 text-xs leading-snug text-neutral-500 sm:text-sm">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <CoverImage
          src="/images/hero-care.jpg"
          alt="Doctors at Dhruva Hospitals, Kadapa"
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="aspect-[4/3] w-full rounded-3xl"
        />
      </div>
    </section>
  );
}
