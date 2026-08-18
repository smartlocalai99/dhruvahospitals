import Link from 'next/link';
import PlaceholderImage from '../PlaceholderImage';
import { CheckIcon } from '../Icons';

const points = [
  'Patient-Centered Care',
  'Affordable Healthcare',
  'Emergency & Critical Care',
  'Transparent Treatment Guidance',
];

const stats = [
  { value: '24/7', label: 'Emergency support' },
  { value: '4+', label: 'Dedicated departments' },
  { value: '20+', label: 'Specialized doctor experts' },
  { value: '95%', label: 'Overall patient satisfaction rate' },
];

export default function AboutTeaser() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            About Us
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Advanced Healthcare, Built Around People
          </h2>
          <p className="mt-4 max-w-md text-neutral-500">
            Dhruva Hospitals brings trusted medical expertise, modern healthcare standards, and compassionate care closer to the families of Kadapa.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
            {points.map((point) => (
              <div key={point} className="check-bullet">
                <span className="check-bullet-icon">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {point}
              </div>
            ))}
          </div>

          <Link href="/book-appointment" className="btn-primary mt-9">
            Book an appointment
          </Link>
        </div>

        <PlaceholderImage
          icon="people"
          file="public/images/about-team.jpg"
          className="aspect-[6/5] w-full rounded-3xl"
        />
      </div>

      <div className="mt-16 grid grid-cols-2 gap-8 border-t border-neutral-100 pt-10 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl font-extrabold text-navy-700 sm:text-4xl">{stat.value}</div>
            <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
