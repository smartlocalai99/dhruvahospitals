import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { site } from '@/lib/site';

export default function PrivacyPage() {
  return (
    <Layout
      title="Privacy Policy"
      description="How Dhruva Hospitals collects, uses and protects the personal information you share through our website."
    >
      <PageHeader
        eyebrow="Privacy Policy"
        title="Your Privacy Matters to Us"
        subtitle="How we collect, use and protect the information you share through this website."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="legal-prose mx-auto max-w-3xl">
          <p className="!mt-0 text-sm text-neutral-500">Last updated: October 2026</p>

          <h2>1. Introduction</h2>
          <p>
            At Dhruva Hospitals, we are committed to protecting your personal and medical information. This policy explains what
            information we collect through this website, how we use it, and the choices you have.
          </p>

          <h2>2. Information We Collect</h2>
          <ul>
            <li>
              <strong>Appointment requests:</strong> your name, contact number, email address (optional), preferred department
              and doctor, and the symptoms or reason for your visit that you choose to share.
            </li>
            <li>
              <strong>Communications:</strong> information you share when you call, email or message us on WhatsApp.
            </li>
            <li>
              <strong>Technical data:</strong> like most websites, our hosting provider may log basic technical information such
              as your IP address and browser type for security and performance.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To respond to your appointment request and schedule your visit.</li>
            <li>To contact you about your request or care.</li>
            <li>To keep our website secure and improve our services.</li>
          </ul>
          <p>We do not sell your personal information or use it for advertising.</p>

          <h2>4. Sharing Your Information</h2>
          <p>
            Appointment requests are sent by email to our hospital team. We share information only with staff and service providers
            who need it to respond to you, such as our email and website hosting providers, or where required by law.
          </p>

          <h2>5. Third-Party Content</h2>
          <p>
            This website includes content from Google Maps, YouTube and Instagram. These services may collect information under
            their own privacy policies when you interact with them.
          </p>

          <h2>6. Data Security and Retention</h2>
          <p>
            Your information is accessible only to authorised hospital staff involved in your care or request. We use reasonable
            safeguards to protect it and keep it only as long as needed for the purposes above or as required by law.
          </p>

          <h2>7. Your Choices</h2>
          <p>
            You can ask us to access, correct or delete the personal information you have shared through this website by emailing{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a> or calling{' '}
            <a href={site.phones.main.href}>{site.phones.main.display}</a>.
          </p>

          <h2>8. Emergencies</h2>
          <p>
            Please do not use the online form for medical emergencies. Call our 24/7 emergency line at{' '}
            <a href={site.phones.emergency.href}>{site.phones.emergency.display}</a>.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>We may update this policy from time to time. The date at the top of this page shows when it was last revised.</p>

          <h2>10. Contact Us</h2>
          <p>
            {site.name}, {site.address.full}. Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
