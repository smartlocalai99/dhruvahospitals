import Link from 'next/link';
import DoctorCard from '../DoctorCard';
import { doctors } from '@/lib/data';

export default function DoctorsTeaser() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Doctors
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Meet Our Dedicated Medical Experts
          </h2>
          <p className="mt-4 max-w-lg text-neutral-500">
            Compassionate professionals committed to clinical excellence and personalized patient healing.
          </p>
        </div>
        <Link href="/doctors" className="btn-primary flex-none">
          See all doctors
        </Link>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.slice(0, 4).map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}
