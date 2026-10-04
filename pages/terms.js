import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { site } from '@/lib/site';

export default function TermsPage() {
  return (
    <Layout
      title="Terms of Service"
      description="Terms for using the Dhruva Hospitals website, including our medical disclaimer and appointment policy."
    >
      <PageHeader
        eyebrow="Terms of Service"
        title="Terms of Using Our Website"
        subtitle="Please read these terms carefully before using the Dhruva Hospitals website."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="legal-prose mx-auto max-w-3xl">
          <p className="!mt-0 text-sm text-neutral-500">Last updated: October 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Dhruva Hospitals website, you agree to comply with and be bound by these terms.
          </p>

          <h2>2. Medical Disclaimer</h2>
          <p>
            The information on this website is for general informational purposes only and is not a substitute for professional
            medical advice, diagnosis or treatment. Always consult a qualified doctor about your health. In an emergency, call our
            24/7 emergency line at <a href={site.phones.emergency.href}>{site.phones.emergency.display}</a> or visit the nearest
            hospital.
          </p>

          <h2>3. Appointment Policy</h2>
          <p>
            Appointments are booked by phone and are subject to confirmation based on specialist availability.
          </p>

          <h2>4. Accuracy of Information</h2>
          <p>
            We aim to keep information about our services, doctors and timings accurate and up to date, but details may change
            without notice. Please call us to confirm before your visit.
          </p>

          <h2>5. External Links</h2>
          <p>
            Links to third-party websites and services are provided for convenience. We are not responsible for their content or
            privacy practices.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            The content on this website, including text, photographs and logos, belongs to Dhruva Hospitals unless stated otherwise
            and may not be reused without permission.
          </p>

          <h2>7. Changes to These Terms</h2>
          <p>We may update these terms from time to time. Continued use of the website means you accept the revised terms.</p>

          <h2>8. Governing Law</h2>
          <p>These terms are governed by the laws of India.</p>

          <h2>9. Contact Us</h2>
          <p>
            Questions about these terms? Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{' '}
            <a href={site.phones.main.href}>{site.phones.main.display}</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
