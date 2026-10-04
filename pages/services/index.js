import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/ServiceCard';
import BookCallButton from '@/components/BookCallButton';
import { services } from '@/lib/data';
import { site } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/schema';

export default function ServicesPage() {
  return (
    <Layout
      title="Services"
      description="Fertility & IVF, pregnancy care, gynaecology, cancer screening, neonatal & paediatric care, diagnostics, surgery and critical care at Dhruva Hospitals, Kadapa."
      jsonLd={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
      ])}
    >
      <PageHeader
        eyebrow="Services"
        title="Advanced Medical Care for Every Stage of Life"
        subtitle="From the miracle of new life to critical care, we provide comprehensive medical services using modern technology and proven protocols."
      />

      <section className="container-page py-16 sm:py-20">
        <h2 className="sr-only">Our services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-navy-700 px-8 py-10 text-center text-white sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Need a Specialized Consultation?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-navy-100 sm:text-base">
            Our specialists are available for routine check-ups and critical consultations alike. Experience healthcare that prioritises your recovery.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <BookCallButton className="btn-light" />
            <span className="text-sm font-semibold text-white">{site.phones.main.display}</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
