import Link from 'next/link';
import CoverImage from './CoverImage';
import { ArrowRightIcon } from './Icons';

export default function ServiceCard({ service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-navy-200 bg-white transition-colors hover:border-navy-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
    >
      <CoverImage
        src={service.image}
        alt={service.imageAlt}
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="aspect-[4/3] w-full"
        imageClassName="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-neutral-950">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500">{service.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {service.treatments.slice(0, 3).map((treatment) => (
            <li
              key={treatment.name}
              className="rounded-full border border-navy-200 px-3 py-1 text-xs font-medium text-navy-800"
            >
              {treatment.name}
            </li>
          ))}
        </ul>
        <span className="text-link mt-auto pt-5">
          Learn more
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
