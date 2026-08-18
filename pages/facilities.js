import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import FacilityCard from '@/components/FacilityCard';
import { facilities } from '@/lib/data';

export default function FacilitiesPage() {
  return (
    <Layout
      title="Facilities"
      description="Discover the patient-centric amenities that set Dhruva Hospitals apart."
    >
      <PageHeader
        eyebrow="Facilities"
        title="Built for Safety, Comfort, and Healing"
        subtitle="Discover the patient-centric amenities that set Dhruva Hospitals apart."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <FacilityCard key={facility.title} facility={facility} />
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-brandred-500 px-8 py-10 text-center text-white sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Need Immediate Medical Attention?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/90 sm:text-base">
            Our emergency service and ambulance are available 24/7. Don&apos;t hesitate to contact for any medical emergency.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:6305800108"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brandred-600 transition-opacity hover:opacity-90"
            >
              Emergency Call: 63058 00108
            </a>
            <a
              href="tel:8142188108"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ambulance: 81421 88108
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
