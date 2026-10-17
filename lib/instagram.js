// Latest Instagram reels through Meta's official Instagram API (Instagram API with Instagram Login).
// Needs INSTAGRAM_ACCESS_TOKEN; README → "Instagram reels" explains how to get one.
// Without a token, or once it has expired, getInstagramReels() returns [] and pages show
// Instagram's own profile widget instead, which needs no token.

const MEDIA_URL = 'https://graph.instagram.com/v25.0/me/media';
const FIELDS = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';

// First line of the caption without hashtags, short enough for a card.
function cleanCaption(caption) {
  if (!caption) return '';
  const firstLine = caption.split('\n').map((line) => line.trim()).find(Boolean) || '';
  const text = firstLine.replace(/#[^\s#]+/g, '').replace(/\s+/g, ' ').trim();
  return text.length > 90 ? `${text.slice(0, 87).trimEnd()}…` : text;
}

// Every video posted to an Instagram feed is a reel, so VIDEO items are the reels.
export function toReels(media) {
  return media
    .filter((item) => item.media_type === 'VIDEO' && item.permalink)
    .map((item) => ({
      id: item.id,
      caption: cleanCaption(item.caption),
      image: item.thumbnail_url || null,
      // Instagram leaves the video file out for some reels (e.g. copyrighted audio); those open on Instagram.
      video: item.media_url || null,
      permalink: item.permalink,
      timestamp: item.timestamp || null,
    }))
    .filter((reel) => reel.image || reel.video);
}

export async function getInstagramReels(limit = 10) {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  const url = `${MEDIA_URL}?fields=${FIELDS}&limit=50&access_token=${encodeURIComponent(token)}`;
  let lastError;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(6000) });
      const body = await response.json().catch(() => ({}));
      if (response.ok) return toReels(body.data || []).slice(0, limit);
      // An expired or revoked token won't recover by itself: fall back to the widget rather than
      // keep showing old reels whose video links stop working.
      if (body.error?.code === 190 || response.status === 401) {
        console.error('[instagram] access token is invalid or expired; showing the Instagram widget instead');
        return [];
      }
      lastError = new Error(body.error?.message || `Instagram responded ${response.status}`);
    } catch (error) {
      lastError = error;
    }
  }

  // A temporary failure: during a background refresh, throwing makes Next.js keep serving the last
  // good page. When building (or in development), show the widget instead of failing.
  const building = process.env.NEXT_PHASE === 'phase-production-build';
  if (!building && process.env.NODE_ENV === 'production') throw lastError;
  console.warn('[instagram] could not load reels:', lastError.message);
  return [];
}

// How often (seconds) pages re-check Instagram.
export const INSTAGRAM_REVALIDATE_SECONDS = 600;
