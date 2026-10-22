import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { site } from '@/lib/site';

export default function PrivacyPage() {
  return (
    <Layout
      title="Privacy Policy"
      description="How Dhruva Hospitals collects, uses and protects the personal information you share through our website, phone, email and WhatsApp."
    >
      <PageHeader
        eyebrow="Privacy Policy"
        title="Your Privacy Matters to Us"
        subtitle="How we collect, use and protect the information you share with us."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="legal-prose mx-auto max-w-3xl">
          <p className="!mt-0 text-sm text-neutral-500">Last updated: 22 October 2026</p>

          <h2>1. Who we are</h2>
          <p>
            {site.name}, {site.address.full}, is registered under the {site.registration.act} (file no.{' '}
            {site.registration.fileNumber}). We decide how the personal information described in this policy is used, and we
            are responsible for protecting it.
          </p>

          <h2>2. Information we collect</h2>
          <ul>
            <li>
              <strong>Calls, emails and messages:</strong> your name, contact number and the reason for your visit when you call,
              email or message us, including on WhatsApp.
            </li>
            <li>
              <strong>Medical reports you choose to send:</strong> for example scan and blood reports that families living abroad
              send to our NRI desk before a consultation.
            </li>
            <li>
              <strong>Technical data:</strong> like most websites, our hosting provider may log basic technical information such
              as your IP address and browser type for security and performance. This website has no forms, accounts or
              advertising trackers.
            </li>
          </ul>

          <h2>3. How we use your information</h2>
          <ul>
            <li>To schedule your appointment and answer your questions.</li>
            <li>To review the reports you send before your consultation, and to plan your care.</li>
            <li>To contact you about your request or care.</li>
            <li>To keep our website secure and working.</li>
          </ul>
          <p>We do not sell your personal information or use it for advertising.</p>

          <h2>4. Your consent</h2>
          <p>
            When you send us your information, including medical reports, you agree to our using it for the purposes above. You
            can withdraw your consent at any time by contacting us (section 10). Withdrawing does not affect what we have already
            done with your consent, or records we must keep by law.
          </p>

          <h2>5. Sharing your information</h2>
          <p>
            We share information only with hospital staff and service providers who need it to respond to you or care for you,
            such as our website hosting provider, or where the law requires it.
          </p>

          <h2>6. WhatsApp and email</h2>
          <p>
            Messages and reports you send on WhatsApp are carried by WhatsApp (Meta), and emails by Google (Gmail), under their
            own terms and privacy policies. If you would rather not share medical reports this way, bring them with you to the
            hospital or call us to agree another way.
          </p>

          <h2>7. Third-party content on this website</h2>
          <p>
            This website includes content from Google Maps, YouTube and Instagram. These services may collect information under
            their own privacy policies when you interact with them.
          </p>

          <h2>8. Children</h2>
          <p>
            Information about a child, for example when booking a paediatric appointment, is given to us by a parent or guardian,
            and we use it only for the child&apos;s care.
          </p>

          <h2>9. Security and how long we keep information</h2>
          <p>
            Your information is accessible only to authorised hospital staff involved in your care or request, and we use
            reasonable safeguards to protect it. We keep messages and reports only as long as needed for your appointment and
            care, or as long as the law requires for medical records, and then delete them.
          </p>

          <h2>10. Your rights and how to contact us</h2>
          <p>
            You can ask us to show you, correct, update or delete the personal information you have shared with us, withdraw your
            consent, or name someone to act for you if you are unable to. Contact us at{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a> or{' '}
            <a href={site.phones.main.href}>{site.phones.main.display}</a>, or write to {site.name}, {site.address.full}.
          </p>
          <p>
            If you are unhappy with how we handled your request, tell us and we will review it. If it is still not resolved, you
            can complain to the Data Protection Board of India.
          </p>

          <h2>11. Emergencies</h2>
          <p>
            For medical emergencies, call our 24/7 emergency line at{' '}
            <a href={site.phones.emergency.href}>{site.phones.emergency.display}</a>.
          </p>

          <h2>12. Changes to this policy</h2>
          <p>We may update this policy from time to time. The date at the top of this page shows when it was last revised.</p>
        </div>
      </section>
    </Layout>
  );
}
