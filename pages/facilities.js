import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import FacilityCard from '@/components/FacilityCard';
import Gallery from '@/components/Gallery';
import SectionHeading from '@/components/SectionHeading';
import EmergencyBanner from '@/components/EmergencyBanner';
import { facilities, gallery } from '@/lib/data';

export default function FacilitiesPage() {
  return (
    <Layout
      title="Facilities"
      description="ICU, Level III NICU, modular operation theatres, IVF lab, diagnostics, pharmacy and 24/7 emergency care at Dhruva Hospitals, Kadapa."
      image="/images/operation-theatre.jpg"
      imageAlt="Modular operation theatre at Dhruva Hospitals"
    >
      <PageHeader
        eyebrow="Facilities"
        title="Built for Safety, Comfort, and Healing"
        subtitle="Discover the patient-centric amenities that set Dhruva Hospitals apart."
      />

      <section className="container-page py-16 sm:py-20">
        <h2 className="sr-only">Our facilities</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <FacilityCard key={facility.title} facility={facility} />
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Take a Tour"
            title="Inside Dhruva Hospitals"
            description="State-of-the-art infrastructure designed for your comfort and care."
          />
          <div className="mt-12">
            <Gallery images={gallery} />
          </div>
        </div>

        <EmergencyBanner className="mt-20" />
      </section>
    </Layout>
  );
}
