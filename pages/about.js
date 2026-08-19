import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import PlaceholderImage from '@/components/PlaceholderImage';
import { DiamondIcon } from '@/components/Icons';

const stats = [
  { value: '24/7', label: 'Emergency support' },
  { value: '4+', label: 'Dedicated departments' },
  { value: '20+', label: 'Specialized doctor experts' },
  { value: '95%', label: 'Overall patient satisfaction rate' },
];

export default function AboutPage() {
  return (
    <Layout
      title="About Us"
      description="Dhruva Hospitals brings trusted medical expertise, modern healthcare standards, and compassionate care closer to the families of Kadapa."
    >
      <PageHeader
        eyebrow="About Us"
        title="Advanced Healthcare, Built Around People"
        subtitle="Dhruva Hospitals brings trusted medical expertise, modern healthcare standards, and compassionate care closer to the families of Kadapa."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <PlaceholderImage
            icon="people"
            file="images/about-doctors.jpg"
            className="aspect-[6/5] w-full rounded-3xl"
          />
          <div className="flex flex-col gap-5">
            <div className="info-card">
              <span className="text-navy-700">
                <DiamondIcon className="h-4 w-4" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-neutral-950">Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                To become one of the most trusted healthcare institutions in Rayalaseema, known for clinical excellence, ethical care, and accessible medical innovation.
              </p>
            </div>
            <div className="info-card">
              <span className="text-navy-700">
                <DiamondIcon className="h-4 w-4" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-neutral-950">Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                To deliver compassionate, evidence-based healthcare with advanced infrastructure, uncompromising safety, and affordable treatment for every family.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 border-y border-neutral-100 py-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-navy-700 sm:text-4xl">{stat.value}</div>
              <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="space-y-5 text-sm leading-relaxed text-neutral-600 sm:text-base">
            <p>
              At Dhruva Hospitals, we believe that exceptional healthcare is a fundamental right, not a privilege. Situated in the heart of Kadapa at Dwaraka Nagar, our facility was built with a singular mission: to bridge the gap between high-end corporate medical infrastructure and compassionate, community-focused healing.
            </p>
            <p>
              From routine wellness checks and specialized women&apos;s health to complex laparoscopic procedures and emergency pediatric interventions, our medical philosophy combines clinical precision with genuine human empathy. Backed by a team of dedicated specialists, modern medical equipment, and stringent standards of hygiene, Dhruva Hospitals stands as your reliable healthcare partner through every stage of life.
            </p>
          </div>
          <PlaceholderImage
            icon="photo"
            file="images/about-doctor-portrait.jpg"
            className="aspect-[5/4] w-full rounded-3xl"
          />
        </div>
      </section>
    </Layout>
  );
}
