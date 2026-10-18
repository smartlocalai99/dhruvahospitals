import Link from 'next/link';
import { LuBaby, LuBedDouble, LuScissors, LuSiren, LuSparkles } from 'react-icons/lu';
import CoverImage from '../CoverImage';
import { ArrowRightIcon } from '../Icons';

const reasons = [
  {
    icon: LuBedDouble,
    title: 'Modern ICU & ventilators',
    text: 'Intensive care for high-risk pregnancy, paediatric, medical, surgical and newborn patients.',
  },
  {
    icon: LuBaby,
    title: 'Mother & child wing',
    text: 'Delivery suites, a Level III NICU and paediatric care in one building.',
  },
  {
    icon: LuScissors,
    title: 'Laser & laparoscopy',
    text: 'Minimally invasive surgery in modular operation theatres.',
  },
  {
    icon: LuSiren,
    title: '24/7 critical care',
    text: 'Emergency team, ICU and operation theatres ready day and night.',
  },
  {
    icon: LuSparkles,
    title: 'Infertility centre',
    text: 'IUI, IVF and ICSI with an in-house embryology lab.',
  },
];

// "Why choose Dhruva": the team photo with the founding principle, then five reasons.
// The group photo is wide, so it runs full width rather than in a narrow column.
export default function WhyChoose() {
  return (
    <section className="container-page py-20 sm:py-28">
      <figure className="relative overflow-hidden rounded-3xl">
        <CoverImage
          src="/images/dhruva-hospitals-kadapa-team.jpg"
          alt="Doctors and staff of Dhruva Hospitals at the hospital reception in Kadapa"
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="aspect-[3/2] w-full sm:aspect-[16/9] lg:aspect-[21/9]"
          imageClassName="object-cover object-[50%_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/10 to-transparent" />
        <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8 lg:p-10">
          <blockquote className="max-w-xl text-xl font-semibold leading-snug sm:text-3xl">
            “At Dhruva, we treat you like family.”
          </blockquote>
          <p className="mt-2 text-sm text-navy-100 sm:text-base">Our founding principle, and our team in Kadapa</p>
        </figcaption>
      </figure>

      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Why Choose Dhruva
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Specialised Care for Kadapa Families
          </h2>
          <p className="mt-4 max-w-xl text-neutral-500">
            Dhruva Hospitals was founded to bring advanced treatment to Kadapa, so critical care, maternity and fertility
            treatment are available close to home.
          </p>
          <Link href="/about" className="text-link mt-7">
            Learn our full story
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-neutral-950">{title}</h3>
                <p className="mt-0.5 text-sm leading-relaxed text-neutral-600">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
