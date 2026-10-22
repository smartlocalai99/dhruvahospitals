import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import DoctorCard from '@/components/DoctorCard';
import BookCallButton from '@/components/BookCallButton';
import { CheckIcon } from '@/components/Icons';
import { doctors } from '@/lib/data';
import { breadcrumbSchema } from '@/lib/schema';

const standards = [
  {
    title: 'Evidence-Based',
    description: 'Every treatment plan follows current clinical research and proven protocols.',
  },
  {
    title: 'Absolute Transparency',
    description: 'We keep you informed at every stage of your treatment with clear communication.',
  },
  {
    title: 'Patient Dignity',
    description: 'Every patient is treated with the highest level of respect, privacy, and compassion.',
  },
];

export default function DoctorsPage() {
  return (
    <Layout
      title="Doctors in Kadapa: Gynaecologist, Paediatrician & Specialists"
      description="Meet the specialists at Dhruva Hospitals, Kadapa: IVF and gynaecology, neonatology and paediatrics, general medicine, surgery and more."
      jsonLd={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Doctors', path: '/doctors' },
      ])}
    >
      <PageHeader
        eyebrow="Doctors"
        title="Doctors at Dhruva Hospitals, Kadapa"
        subtitle="Meet our dedicated medical experts: compassionate professionals committed to clinical excellence and personalised patient healing."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <DoctorCard key={doctor.slug} doctor={doctor} priority={index < 4} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <BookCallButton />
        </div>

        <div className="mt-20 border-t border-neutral-100 pt-16">
          <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Our Clinical Standards
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {standards.map((standard) => (
              <div key={standard.title} className="info-card">
                <span className="check-bullet-icon bg-white">
                  <CheckIcon className="h-3 w-3" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-neutral-950">{standard.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
