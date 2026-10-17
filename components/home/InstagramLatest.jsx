import InstagramFollowButton from '../instagram/InstagramFollowButton';
import InstagramReels from '../instagram/InstagramReels';
import InstagramWidget from '../instagram/InstagramWidget';

const heading = (
  <>
    <span className="eyebrow">
      <span className="eyebrow-dot" />
      Latest Updates
    </span>
    <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">What’s New at Dhruva</h2>
  </>
);

// Home page Instagram section. With an Instagram token the newest reels play right here
// (`reels` from lib/instagram.js); without one, Instagram's own widget shows the newest posts.
export default function InstagramLatest({ reels = [] }) {
  if (reels.length > 0) {
    return (
      <section className="container-page py-20 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {heading}
            <p className="mt-4 max-w-lg text-neutral-500">
              Our newest reels: health tips, awareness days and life at the hospital.
            </p>
          </div>
          <InstagramFollowButton />
        </div>
        <InstagramReels reels={reels} className="mt-10" />
      </section>
    );
  }

  return (
    <section className="container-page py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16">
        <div>
          {heading}
          <p className="mt-4 max-w-md text-neutral-500">
            Health tips, awareness days and life at the hospital, straight from our Instagram.
          </p>
          <InstagramFollowButton className="mt-8" />
        </div>
        <InstagramWidget />
      </div>
    </section>
  );
}
