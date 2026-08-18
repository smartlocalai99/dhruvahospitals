import Link from 'next/link';
import PlaceholderImage from '../PlaceholderImage';
import { StarIcon, GoogleGIcon } from '../Icons';

const avatarSeeds = ['A', 'B', 'C'];

export default function Hero() {
  return (
    <section className="container-page pt-10 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-neutral-950 sm:text-5xl lg:text-[3.4rem]">
            One Trusted Place for Exceptional Family Healthcare.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-500">
            Bringing world-class medical standards, advanced surgical care,
            and compassionate healing to Kadapa—without compromise.
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
              {avatarSeeds.map((seed) => (
                <span
                  key={seed}
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-navy-100 text-xs font-semibold text-navy-700"
                >
                  {seed}
                </span>
              ))}
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
        </div>

        <PlaceholderImage
          icon="people"
          file="public/images/hero-care.jpg"
          className="aspect-[4/5] w-full rounded-3xl sm:aspect-[5/6] lg:aspect-[9/10]"
        />
      </div>
    </section>
  );
}
