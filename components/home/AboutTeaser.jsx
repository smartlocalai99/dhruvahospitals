import CoverImage from '../CoverImage';
import CountUp from '../CountUp';
import BookCallButton from '../BookCallButton';
import { CheckIcon } from '../Icons';
import { stats } from '@/lib/data';

const points = [
  'Patient-Centered Care',
  'Affordable Healthcare',
  'Emergency & Critical Care',
  'Transparent Treatment Guidance',
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
            Founded to bring advanced medical care within reach of every family in Rayalaseema, Dhruva Hospitals combines trusted expertise, modern infrastructure, and compassionate care.
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

          <BookCallButton className="btn-primary mt-9" />
        </div>

        <CoverImage
          src="/images/about-team.jpg"
          alt="Doctors at Dhruva Hospitals"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="aspect-[6/5] w-full rounded-3xl"
        />
      </div>

      <div className="mt-16 grid gap-y-8 border-t border-neutral-100 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex items-center gap-4 lg:px-8 first:lg:pl-0 last:lg:pr-0 ${
              index > 0 ? 'lg:border-l lg:border-neutral-200' : ''
            }`}
          >
            <div className="text-3xl font-extrabold text-navy-700 sm:text-4xl">
              <CountUp value={stat.value} />
            </div>
            <p className="text-sm leading-snug text-neutral-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
