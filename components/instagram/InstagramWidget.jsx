import { site } from '@/lib/site';

// Instagram's own profile widget: the account header and the six newest posts (reels included),
// always current, no token needed. Its height follows its width so both rows of posts always fit.
// The iframe loads only when the visitor scrolls near it.
export default function InstagramWidget({ className = '' }) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-neutral-200 bg-white [container-type:inline-size] ${className}`}>
      <iframe
        src={`https://www.instagram.com/${site.instagramHandle}/embed`}
        title="Latest posts and reels from Dhruva Hospitals on Instagram"
        className="block h-[calc(170px+66.67cqw)] w-full border-0"
        scrolling="no"
        loading="lazy"
      />
    </div>
  );
}
