import { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { PlayIcon } from '../Icons';

function ReelCard({ reel, playing, onPlay }) {
  // Instagram's video links expire after a while; if one fails, the card opens the reel on Instagram.
  const [failed, setFailed] = useState(false);
  const label = reel.caption || 'Reel from Dhruva Hospitals';
  const canPlay = Boolean(reel.video) && !failed;

  const cover = (
    <>
      {reel.image && (
        // Instagram's signed image links change, so they skip Next's image optimiser (and its quota).
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={reel.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      )}
      <span className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/10 to-transparent" />
      <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-navy-700 shadow-lg transition-transform group-hover:scale-105">
        <PlayIcon className="ml-0.5 h-6 w-6" aria-hidden="true" />
      </span>
      {reel.caption && (
        <span className="absolute inset-x-4 bottom-4 line-clamp-3 text-sm font-semibold leading-snug text-white">
          {reel.caption}
        </span>
      )}
    </>
  );

  const coverClass =
    'group absolute inset-0 h-full w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700';

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-navy-900">
      {playing && canPlay ? (
        <video
          src={reel.video}
          poster={reel.image || undefined}
          className="absolute inset-0 h-full w-full object-cover"
          controls
          autoPlay
          playsInline
          onError={() => setFailed(true)}
        />
      ) : canPlay ? (
        <button type="button" onClick={onPlay} className={coverClass} aria-label={`Play reel: ${label}`}>
          {cover}
        </button>
      ) : (
        <a
          href={reel.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className={coverClass}
          aria-label={`Watch on Instagram: ${label}`}
        >
          {cover}
        </a>
      )}

      <a
        href={reel.permalink}
        target="_blank"
        rel="noopener noreferrer"
        title="Open on Instagram"
        aria-label={`Open on Instagram: ${label}`}
        className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur transition-colors hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        <FaInstagram className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}

// Latest reels as portrait cards that play on the page, one at a time.
// Phones get a swipeable row; larger screens get a grid (the same layout as the YouTube videos).
export default function InstagramReels({ reels, className = '' }) {
  const [playingId, setPlayingId] = useState(null);

  return (
    <ul
      className={`-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5 [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {reels.map((reel) => (
        <li key={reel.id} className="w-[62%] flex-none snap-start sm:w-auto">
          <ReelCard reel={reel} playing={playingId === reel.id} onPlay={() => setPlayingId(reel.id)} />
        </li>
      ))}
    </ul>
  );
}
