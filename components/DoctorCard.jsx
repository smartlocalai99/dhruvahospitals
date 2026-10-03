import Link from 'next/link';
import CoverImage from './CoverImage';
import { ArrowRightIcon } from './Icons';
import { hasProfile } from '@/lib/data';

export default function DoctorCard({ doctor, priority = false }) {
  const linked = hasProfile(doctor);
  const Wrapper = linked ? Link : 'div';

  return (
    <Wrapper
      {...(linked ? { href: `/doctors/${doctor.slug}` } : {})}
      className={`group relative block overflow-hidden rounded-2xl ${
        linked ? 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700' : ''
      }`}
    >
      <CoverImage
        src={doctor.image}
        priority={priority}
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="aspect-[4/5] w-full"
        imageClassName={`object-cover transition-transform duration-500 ${linked ? 'group-hover:scale-[1.03]' : ''}`}
      />

      <div className="absolute inset-x-3 bottom-3 flex h-[124px] flex-col justify-center overflow-hidden rounded-2xl bg-navy-700 px-5 py-4 text-white shadow-md">
        <div className="flex items-start justify-between gap-3">
          <p className="text-base font-semibold text-white sm:text-lg">
            {doctor.name}
          </p>
          {linked && (
            <ArrowRightIcon
              className="mt-1 h-4 w-4 flex-none text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:text-white"
              aria-hidden="true"
            />
          )}
        </div>

        <p className="mt-1 text-sm leading-snug text-white/85">
          {doctor.title}
        </p>

        <p className="mt-0.5 text-xs leading-snug text-white/65">
          {doctor.credentials}
        </p>
      </div>
    </Wrapper>
  );
}
