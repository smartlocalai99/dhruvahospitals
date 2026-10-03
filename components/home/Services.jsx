import Link from 'next/link';
import CoverImage from '../CoverImage';
import { services } from '@/lib/data';

export default function Services() {
  return (
    <section className="bg-navy-50/40 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow bg-white">
            <span className="eyebrow-dot" />
            Dedicated Services
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Comprehensive Care Tailored to Your Family
          </h2>
          <p className="mt-4 text-neutral-500">
            Explore our wide spectrum of specialized medical services delivered under strict safety and hygiene protocols.
          </p>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.slug} className="flex items-start gap-5">
              <CoverImage
                src={service.image}
                sizes="112px"
                className="h-24 w-24 flex-none rounded-2xl sm:h-28 sm:w-28"
              />
              <div>
                <h3 className="text-lg font-semibold text-neutral-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{service.summary}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-3 inline-flex text-sm font-semibold text-navy-700 transition-colors hover:text-navy-900"
                >
                  Read more<span className="sr-only"> about {service.title}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="btn-primary">
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}
