import Image from 'next/image';
import { useState } from 'react';
import { PlayIcon } from './Icons';

// Shows a thumbnail and only loads the YouTube player when the visitor presses play.
export default function YouTubeShort({ id, title }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-navy-900">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700"
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/oar2.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/10 to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-navy-700 shadow-lg transition-transform group-hover:scale-105">
            <PlayIcon className="ml-0.5 h-6 w-6" aria-hidden="true" />
          </span>
          <span className="absolute inset-x-4 bottom-4 text-sm font-semibold leading-snug text-white">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}
