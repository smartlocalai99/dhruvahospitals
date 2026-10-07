import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import HealthTips from '@/components/HealthTips';
import { site } from '@/lib/site';

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

      <HealthTips className="pt-16 sm:pt-20" />

      <section className="w-full py-16 sm:py-20">
        <div className="w-full overflow-hidden border-y border-neutral-200 bg-white">
          <iframe
            src={`https://www.instagram.com/${site.instagramHandle}/embed`}
            title="Dhruva Hospitals on Instagram"
            className="h-[520px] w-full border-0 sm:h-[620px]"
            scrolling="no"
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
}
