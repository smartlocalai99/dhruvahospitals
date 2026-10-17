import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import HealthTips from '@/components/HealthTips';
import InstagramFollowButton from '@/components/instagram/InstagramFollowButton';
import InstagramReels from '@/components/instagram/InstagramReels';
import InstagramWidget from '@/components/instagram/InstagramWidget';
import { INSTAGRAM_REVALIDATE_SECONDS, getInstagramReels } from '@/lib/instagram';
import { VIDEO_REVALIDATE_SECONDS, getLatestVideos } from '@/lib/youtube';
import { breadcrumbSchema } from '@/lib/schema';

// Instagram first (the hospital posts there most), then the doctors' YouTube videos.
export default function DhruvaSpeaksPage({ reels, videos }) {
  return (
    <Layout
      title="Health Videos & Reels from Our Doctors"
      description="Instagram reels, YouTube videos and practical health tips from the doctors at Dhruva Hospitals, Kadapa."
      jsonLd={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Dhruva Speaks', path: '/dhruva-speaks' },
      ])}
    >
      <PageHeader
        eyebrow="Dhruva Speaks"
        title="Trusted Health Guidance, From Our Doctors"
        subtitle="Expert advice, practical health tips, and trusted guidance from the medical team at Dhruva Hospitals."
      />

      <section className="container-page pt-16 sm:pt-20">
        {reels.length > 0 && (
          <div className="mb-16 sm:mb-20">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Instagram Reels
                </span>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                  Watch Our Latest Reels
                </h2>
                <p className="mt-4 max-w-lg text-neutral-500">
                  Short videos from our doctors on Instagram. Tap a reel to play it here.
                </p>
              </div>
              <InstagramFollowButton />
            </div>
            <InstagramReels reels={reels} className="mt-10" />
          </div>
        )}

        <InstagramWidget className="mx-auto max-w-4xl" />
        {reels.length === 0 && (
          <div className="mt-8 flex justify-center">
            <InstagramFollowButton />
          </div>
        )}
      </section>

      <HealthTips className="py-20 sm:py-28" videos={videos} />
    </Layout>
  );
}

export async function getStaticProps() {
  const [reels, videos] = await Promise.all([getInstagramReels(10), getLatestVideos(10)]);
  return {
    props: { reels, videos },
    revalidate: Math.min(INSTAGRAM_REVALIDATE_SECONDS, VIDEO_REVALIDATE_SECONDS),
  };
}
