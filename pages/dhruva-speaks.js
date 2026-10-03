import { FaYoutube } from 'react-icons/fa';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import YouTubeShort from '@/components/YouTubeShort';
import { videos } from '@/lib/data';
import { site } from '@/lib/site';

function SectionIntro({ eyebrow, title, description, href, linkLabel, icon: Icon }) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          {eyebrow}
        </span>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-lg text-neutral-500">{description}</p>
      </div>
      <a href={href} target="_blank" rel="noopener noreferrer" className="btn-primary flex-none gap-2">
        <Icon className="h-4 w-4" aria-hidden="true" />
        {linkLabel}
      </a>
    </div>
  );
}

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

      <section className="container-page pt-16 sm:pt-20">
        <SectionIntro
          eyebrow="Medical Insights"
          title="Health Tips From Our Specialists"
          description="Quick medical advice on pregnancy, fertility, and newborn and child health from our doctors."
          href={site.socials.youtube}
          linkLabel="Subscribe on YouTube"
          icon={FaYoutube}
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {videos.map((video) => (
            <YouTubeShort key={video.id} id={video.id} title={video.title} />
          ))}
        </div>
      </section>

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
