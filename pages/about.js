import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import CoverImage from '@/components/CoverImage';
import CountUp from '@/components/CountUp';
import SectionHeading from '@/components/SectionHeading';
import { CheckIcon, DiamondIcon } from '@/components/Icons';
import { stats } from '@/lib/data';
import { hospitalSchema } from '@/lib/schema';

const strengths = [
  {
    title: 'Expert Doctors',
    description: "Fellowship-trained specialists from some of India's leading medical institutions.",
  },
  {
    title: 'Compassionate',
    description: 'Treating every patient like family, with personalised care plans.',
  },
  {
    title: 'Safe & Secure',
    description: 'Rigorous clinical protocols and sterile, hygienic environments.',
  },
  {
    title: 'Always Ready',
    description: '24/7 emergency support for maternity, neonatal and critical care needs.',
  },
];

const principles = [
  {
    title: 'Vision',
    text: "To be the most trusted healthcare institution in the region, recognised for our pioneering work in fertility, neonatal care, and women's health through continuous innovation.",
  },
  {
    title: 'Mission',
    text: 'To provide accessible, high-quality, and compassionate healthcare services. We combine clinical excellence with a patient-centric approach to ensure the best possible outcomes for our community.',
  },
  {
    title: 'Values',
    text: 'Compassion, integrity, and clinical excellence guide every decision we make, and we treat every patient like family.',
  },
  {
    title: 'Promise',
    text: 'Transparent, ethical, and affordable treatment, with clear communication at every stage of your care.',
  },
];

const infrastructure = [
  'Advanced IVF / ICSI Lab',
  'Level III Neonatal ICU',
  'Laparoscopic Surgery Suite',
  'High-Resolution Imaging Unit',
  'Safe Delivery Suites',
  '24/7 Pharmacy',
];

export default function AboutPage() {
  return (
    <Layout
      title="About Us"
      description="Dhruva Hospitals brings trusted medical expertise, modern healthcare standards, and compassionate care closer to the families of Kadapa and Rayalaseema."
      jsonLd={hospitalSchema()}
    >
      <PageHeader
        eyebrow="About Us"
        title="Advanced Healthcare, Built Around People"
        subtitle="Dhruva Hospitals brings trusted medical expertise, modern healthcare standards, and compassionate care closer to the families of Kadapa."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <CoverImage
            src="/images/about-doctors.jpg"
            alt="Doctors at Dhruva Hospitals"
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="aspect-[6/5] w-full rounded-3xl lg:aspect-auto lg:min-h-[32rem]"
            imageClassName="object-cover object-[56%_center]"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-rows-2">
            {principles.map((principle) => (
              <div key={principle.title} className="info-card">
                <span className="text-navy-700">
                  <DiamondIcon className="h-4 w-4" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-neutral-950">{principle.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{principle.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 border-y border-neutral-100 py-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-navy-700 sm:text-4xl">
                <CountUp value={stat.value} />
              </div>
              <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="space-y-5 text-sm leading-relaxed text-neutral-600 sm:text-base">
            <p>
              Dhruva Hospitals was founded with a single vision: to bring world-class healthcare within reach of every family in Rayalaseema. Situated in the heart of Kadapa at Dwaraka Nagar, our hospital bridges the gap between high-end medical infrastructure and compassionate, community-focused healing.
            </p>
            <p>
              From fertility treatment and pregnancy care to complex laparoscopic procedures and neonatal intensive care, our medical philosophy combines clinical precision with genuine human empathy. Led by our Chairman, Dr. Sudarshan Reddy K, and backed by a team of dedicated specialists, modern medical equipment, and stringent standards of hygiene, Dhruva Hospitals stands as your reliable healthcare partner through every stage of life.
            </p>
            <figure className="border-l-4 border-navy-700 pl-5">
              <blockquote className="text-lg font-semibold text-neutral-950">
                “At Dhruva, we treat you like family.”
              </blockquote>
              <figcaption className="mt-1 text-sm text-neutral-500">— Our founding principle</figcaption>
            </figure>
          </div>
          <CoverImage
            src="/images/gallery/hospital-entrance.jpg"
            alt="Entrance of Dhruva Hospitals, Kadapa"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[5/4] w-full rounded-3xl"
          />
        </div>
      </section>

      <section className="container-page pb-16 sm:pb-20">
        <SectionHeading
          eyebrow="Our Strengths"
          title="Built on Trust and Clinical Rigor"
          description="The principles that guide every consultation, procedure, and recovery at Dhruva Hospitals."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((strength) => (
            <div key={strength.title} className="info-card">
              <span className="text-navy-700">
                <DiamondIcon className="h-4 w-4" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-neutral-950">{strength.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{strength.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <CoverImage
            src="/images/operation-theatre.jpg"
            alt="Modular operation theatre at Dhruva Hospitals"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[5/4] w-full rounded-3xl"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Infrastructure"
              title="Advanced Infrastructure, Built for Healing"
              description="Every part of Dhruva Hospitals is designed to support faster recovery, combining a comfortable environment with modern clinical technology."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {infrastructure.map((item) => (
                <li key={item} className="check-bullet">
                  <span className="check-bullet-icon">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
