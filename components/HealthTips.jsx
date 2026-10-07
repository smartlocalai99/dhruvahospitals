import { FaYoutube } from 'react-icons/fa';
import YouTubeShort from './YouTubeShort';
import { videos } from '@/lib/data';
import { site } from '@/lib/site';

// Doctors' YouTube Shorts: used on the home page and on Dhruva Speaks.
// Phones get a swipeable row; larger screens get a grid.
export default function HealthTips({ className = '' }) {
  return (
    <section className={`container-page ${className}`}>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Medical Insights
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Health Tips From Our Specialists
          </h2>
          <p className="mt-4 max-w-lg text-neutral-500">
            Quick medical advice on pregnancy, fertility, and newborn and child health from our doctors.
          </p>
        </div>
        <a
          href={site.socials.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-none gap-2"
        >
          <FaYoutube className="h-4 w-4" aria-hidden="true" />
          Subscribe on YouTube
        </a>
      </div>

      <div className="-mx-6 mt-10 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5 [&::-webkit-scrollbar]:hidden">
        {videos.map((video) => (
          <div key={video.id} className="w-[62%] flex-none snap-start sm:w-auto">
            <YouTubeShort id={video.id} title={video.title} />
          </div>
        ))}
      </div>
    </section>
  );
}
