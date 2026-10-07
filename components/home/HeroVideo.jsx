import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import BookCallButton from '../BookCallButton';
import { PauseIcon, PhoneIcon, PlayIcon } from '../Icons';
import { doctors } from '@/lib/data';
import { site } from '@/lib/site';

// Phones in portrait get a 720×1280 crop; everything else gets 1920×1080.
// Each comes as AV1 (about 40% smaller) and H.264 (plays everywhere, hardware-decoded).
const MOBILE_QUERY = '(max-width: 767px) and (orientation: portrait)';
const AV1_TYPE = 'video/mp4; codecs="av01.0.08M.08"';

const SOURCES = {
  mobile: {
    width: 720,
    height: 1280,
    av1: '/videos/hero-mobile-av1.mp4',
    av1Bitrate: 1_030_000,
    h264: '/videos/hero-mobile-h264.mp4',
  },
  desktop: {
    width: 1920,
    height: 1080,
    av1: '/videos/hero-desktop-av1.mp4',
    av1Bitrate: 1_990_000,
    h264: '/videos/hero-desktop-h264.mp4',
  },
};

// The poster is the first frame of the video, so the switch to playback is seamless.
const posterProps = { alt: '', sizes: '100vw', quality: 70 };
const { props: { srcSet: mobilePoster } } = getImageProps({
  ...posterProps,
  src: '/images/hero-poster-mobile.jpg',
  width: 720,
  height: 1280,
});
const { props: { srcSet: desktopPoster, ...poster } } = getImageProps({
  ...posterProps,
  src: '/images/hero-poster.jpg',
  width: 1920,
  height: 1080,
});


// Use AV1 only where it decodes smoothly; on phones also require hardware decoding,
// since software AV1 costs CPU and battery. Otherwise H.264, which every device decodes in hardware.
async function chooseSource() {
  const variant = window.matchMedia(MOBILE_QUERY).matches ? 'mobile' : 'desktop';
  const config = SOURCES[variant];
  try {
    const info = await navigator.mediaCapabilities.decodingInfo({
      type: 'file',
      video: {
        contentType: AV1_TYPE,
        width: config.width,
        height: config.height,
        bitrate: config.av1Bitrate,
        framerate: 30,
      },
    });
    if (info.supported && info.smooth && (variant === 'desktop' || info.powerEfficient)) return config.av1;
  } catch {
    // MediaCapabilities unavailable: H.264 below plays in every browser.
  }
  return config.h264;
}

const teamPreview = doctors.slice(0, 3);

const glassCard =
  'flex items-center gap-3 rounded-2xl bg-white/10 px-3 py-2.5 text-left ring-1 ring-inset ring-white/20 backdrop-blur-md transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-4 sm:py-3';

function whenIdle(callback) {
  if ('requestIdleCallback' in window) {
    const id = window.requestIdleCallback(callback, { timeout: 2000 });
    return () => window.cancelIdleCallback(id);
  }
  const id = window.setTimeout(callback, 1000);
  return () => window.clearTimeout(id);
}

function prefersStill() {
  const connection = navigator.connection;
  return (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    Boolean(connection?.saveData) ||
    /(^|-)2g$/.test(connection?.effectiveType || '')
  );
}

export default function HeroVideo() {
  const videoRef = useRef(null);
  const pausedByUser = useRef(false);
  const [source, setSource] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);

  // Start the video once the page has loaded and the browser is idle, so it never
  // competes with the poster, fonts and scripts. Reduced-motion, data-saver and 2G
  // visitors keep the poster (they can still press play).
  useEffect(() => {
    if (prefersStill()) {
      pausedByUser.current = true;
      setPaused(true);
      return undefined;
    }
    let cancelIdle = () => {};
    let cancelled = false;
    const start = () => {
      cancelIdle = whenIdle(async () => {
        const src = await chooseSource();
        if (!cancelled) setSource(src);
      });
    };
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return () => {
      cancelled = true;
      cancelIdle();
      window.removeEventListener('load', start);
    };
  }, []);

  // Play the chosen file, and pause whenever the section is scrolled out of view.
  useEffect(() => {
    const video = videoRef.current;
    if (!source || !video) return undefined;

    video.muted = true;
    if (!pausedByUser.current) {
      video.play().catch(() => {
        pausedByUser.current = true;
        setPaused(true);
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (pausedByUser.current) return;
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.2 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [source]);

  async function togglePlayback() {
    const video = videoRef.current;
    if (paused) {
      pausedByUser.current = false;
      setPaused(false);
      if (!source) setSource(await chooseSource());
      else video.play().catch(() => {});
    } else {
      pausedByUser.current = true;
      setPaused(true);
      video.pause();
    }
  }

  return (
    // Pulled up under the sticky header so the video fills the screen behind the frosted menu.
    <section
      aria-labelledby="hero-video-title"
      className="relative isolate -mt-20 flex min-h-[100svh] w-full overflow-hidden bg-navy-900 text-white"
    >
      <picture>
        <source media={MOBILE_QUERY} srcSet={mobilePoster} sizes="100vw" />
        <source srcSet={desktopPoster} sizes="100vw" />
        {/* Art-directed poster built with getImageProps, so a plain <img> is intended here. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...poster}
          alt=""
          loading="eager"
          fetchpriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          playing ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        loop
        playsInline
        preload="none"
        disablePictureInPicture
        disableRemotePlayback
        aria-hidden="true"
        tabIndex={-1}
        src={source || undefined}
        onPlaying={() => setPlaying(true)}
      />

      {/* Navy overlay: an even tint, deepest behind the text (bottom on phones, left side on large screens). */}
      <div className="absolute inset-0 bg-navy-900/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/55 to-navy-900/30 lg:bg-gradient-to-r lg:from-navy-900/85 lg:via-navy-900/45 lg:to-navy-900/10" />
      <div className="absolute inset-x-0 bottom-0 hidden h-1/2 bg-gradient-to-t from-navy-900/70 to-transparent lg:block" />

      {/* Text sits bottom-left; the glass cards sit bottom-right on large screens and under the button on smaller ones. */}
      <div className="container-page relative z-10 flex flex-col justify-end pb-10 pt-32 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:pb-[10svh] [@media(max-height:500px)]:pb-6 [@media(max-height:500px)]:pt-24">
        <div className="max-w-2xl">
          <h2
            id="hero-video-title"
            className="text-balance text-[clamp(2.25rem,10.5vw,2.75rem)] font-semibold leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:text-7xl [@media(max-height:500px)]:text-4xl"
          >
            Advanced care, close to home
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg [@media(max-height:500px)]:mt-3 [@media(max-height:500px)]:text-base">
            IVF and fertility treatment, safe deliveries, a Level III NICU and 24/7 emergency care, all under one roof
            in Kadapa.
          </p>
          <BookCallButton
            label="Book Appointment"
            className="btn-light mt-8 sm:mt-10 [@media(max-height:500px)]:mt-5"
          />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-md lg:mt-0 lg:w-72 lg:max-w-none lg:flex-none lg:grid-cols-1 [@media(max-height:500px)]:hidden">
          <a href={site.phones.emergency.href} className={glassCard}>
            <span className="hidden h-10 w-10 flex-none items-center justify-center rounded-full bg-white/15 sm:flex">
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold">24/7 Emergency</span>
              <span className="block text-xs text-white/75 sm:text-sm">{site.phones.emergency.display}</span>
            </span>
          </a>

          <Link href="/doctors" className={glassCard}>
            <span className="hidden flex-none -space-x-2.5 sm:flex">
              {teamPreview.map((doctor, index) => (
                <Image
                  key={doctor.slug}
                  src={doctor.image}
                  alt=""
                  width={36}
                  height={36}
                  className={`h-9 w-9 rounded-full object-cover object-top ring-2 ring-navy-900/60 ${
                    index === 2 ? 'hidden lg:block' : ''
                  }`}
                />
              ))}
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold">15+ specialists</span>
              <span className="block text-xs text-white/75 sm:text-sm">Meet our doctors</span>
            </span>
          </Link>
        </div>
      </div>

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={paused ? 'Play background video' : 'Pause background video'}
        className="absolute right-4 top-24 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-md transition-colors hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6 lg:right-8"
      >
        {paused ? <PlayIcon className="ml-0.5 h-4 w-4" aria-hidden="true" /> : <PauseIcon className="h-4 w-4" aria-hidden="true" />}
      </button>
    </section>
  );
}
