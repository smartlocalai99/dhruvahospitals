import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import DoctorCard from '@/components/DoctorCard';
import { doctors } from '@/lib/data';

export default function DoctorsPage() {
  return (
    <Layout
      title="Doctors"
      description="Compassionate professionals committed to clinical excellence and personalized patient healing."
    >
      <PageHeader
        eyebrow="Doctors"
        title="Meet Our Dedicated Medical Experts"
        subtitle="Compassionate professionals committed to clinical excellence and personalized patient healing."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/book-appointment" className="btn-primary">
            Book an appointment
          </Link>
        </div>
      </section>
    </Layout>
  );
}
