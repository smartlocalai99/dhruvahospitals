import Link from 'next/link';
import FacilityCard from '../FacilityCard';
import { facilities } from '@/lib/data';

export default function FacilitiesTeaser() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Facilities
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Built for Safety, Comfort, and Healing
          </h2>
          <p className="mt-4 max-w-lg text-neutral-500">
            Discover the patient-centric amenities that set Dhruva Hospitals apart.
          </p>
        </div>
        <Link href="/facilities" className="btn-primary flex-none">
          View all facilities
        </Link>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {facilities.slice(0, 3).map((facility) => (
          <FacilityCard key={facility.title} facility={facility} />
        ))}
      </div>
    </section>
  );
}
