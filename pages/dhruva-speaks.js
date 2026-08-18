import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

export default function DhruvaSpeaksPage() {
  return (
    <Layout
      title="Dhruva Speaks"
      description="Expert advice, practical health tips, and trusted guidance from the medical team at Dhruva Hospitals."
    >
      <PageHeader
        eyebrow="Dhruva Speaks"
        title="Trusted Health Guidance, From Our Doctors"
        subtitle="Expert advice, practical health tips, and trusted guidance from the medical team at Dhruva Hospitals."
      />

      <section className="container-page py-24 sm:py-32">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-50 text-navy-700">
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              <path
                d="M5 4.5h9l5 5V19a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V6A1.5 1.5 0 0 1 5 4.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path d="M14 4.5V9h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M7.5 13h9M7.5 16.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <h2 className="mt-6 text-xl font-semibold text-neutral-950">
            New articles are on the way
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
            Our doctors are preparing health guides and practical tips for your family. Check back soon, or follow us on social media for updates.
          </p>
        </div>
      </section>
    </Layout>
  );
}
