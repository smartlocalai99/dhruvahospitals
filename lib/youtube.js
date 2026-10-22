// Latest uploads from the hospital's YouTube channel, read from YouTube's public feed
// (no API key needed). Pages call this in getStaticProps with `revalidate`, so new videos
// appear on the site within minutes of being posted.
import { videos as fallbackVideos } from './data';

export const YOUTUBE_CHANNEL_ID = 'UCUv9Iv1adJCqTOouQvV48_A';
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

const entities = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", '#39': "'" };

function decode(text) {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&(\w+|#39);/g, (match, name) => entities[name] ?? match);
}

// Hashtags make titles long and add nothing on the site.
function cleanTitle(title) {
  return decode(title).replace(/\s*#[^\s#]+/g, '').replace(/\s+/g, ' ').trim();
}

// First paragraph of the video description, without hashtags, for structured data.
function cleanDescription(description) {
  if (!description) return null;
  const firstParagraph = decode(description).split(/\n\s*\n/)[0];
  const text = firstParagraph.replace(/#[^\s#]+/g, '').replace(/\s+/g, ' ').trim();
  if (!text) return null;
  return text.length > 300 ? `${text.slice(0, 297).trimEnd()}…` : text;
}

export function parseFeed(xml) {
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
    .map(([, entry]) => {
      const id = entry.match(/<yt:videoId>([^<]+)</)?.[1];
      const title = entry.match(/<title>([^<]*)</)?.[1];
      const link = entry.match(/<link rel="alternate" href="([^"]+)"/)?.[1] || '';
      const published = entry.match(/<published>([^<]+)</)?.[1] || null;
      const description = cleanDescription(entry.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1]);
      if (!id || !title) return null;
      return { id, title: cleanTitle(title), description, published, short: link.includes('/shorts/') };
    })
    .filter(Boolean);
}

async function fetchFeed() {
  const response = await fetch(FEED_URL, { signal: AbortSignal.timeout(5000) });
  if (!response.ok) throw new Error(`YouTube feed responded ${response.status}`);
  return response.text();
}

// Returns the newest `limit` videos. YouTube's feed occasionally fails, so it retries once.
// During a background refresh it then throws, which makes Next.js keep serving the last good
// page; during the build (and in development) it falls back to the saved list in lib/data.js.
export async function getLatestVideos(limit = 5) {
  let lastError;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const latest = parseFeed(await fetchFeed());
      if (latest.length) return latest.slice(0, limit);
      lastError = new Error('YouTube feed had no videos');
    } catch (error) {
      lastError = error;
    }
  }
  const building = process.env.NEXT_PHASE === 'phase-production-build';
  if (!building && process.env.NODE_ENV === 'production') throw lastError;
  console.warn('[youtube] using saved videos:', lastError.message);
  return fallbackVideos.slice(0, limit).map((video) => ({ ...video, published: null, short: video.short !== false }));
}

// How often (seconds) pages re-check YouTube.
export const VIDEO_REVALIDATE_SECONDS = 600;
