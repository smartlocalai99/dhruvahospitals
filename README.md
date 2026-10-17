# Dhruva Hospitals website

Next.js (Pages Router) + Tailwind CSS site for Dhruva Hospitals, Kadapa.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also runs lint)
npm start          # serve the production build
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values. On Vercel, add them under **Project → Settings → Environment Variables**.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public URL, e.g. `https://www.dhruvahospitals.com`. Used for canonical links, social previews, the sitemap and structured data. On Vercel it defaults to the project's production domain. |
| `INSTAGRAM_ACCESS_TOKEN` | Optional. Shows the newest Instagram reels on the home page and Dhruva Speaks, playable on the site. See [Instagram reels](#instagram-reels). |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional. The code from Google Search Console's "HTML tag" verification method (only the `content` value). Not needed if you verify with DNS. |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Optional. The code from Bing Webmaster Tools' meta-tag verification. |
Appointments are booked by phone: every "Book now" / "Book an appointment" button calls `site.phones.main` in `lib/site.js`.

## Editing content

| What | Where |
|---|---|
| Phone numbers, email, address, timings, social links | `lib/site.js` |
| Services, doctors, facilities, FAQs, testimonials, gallery, videos | `lib/data.js` |
| Home page departments | `components/home/Departments.jsx` |
| Privacy policy and terms | `pages/privacy.js`, `pages/terms.js` |

### Images

All photos live in `public/images/`. To update one, replace the file and keep the same name.

- Doctor photos: `public/images/doctors/<doctor-slug>.jpg` (portrait, ideally at least 800 × 1000 px). Dr. Vasanta Kumari and Dr. B Someshwar Reddy currently use placeholder silhouettes.
- Hospital photos: `public/images/gallery/`.
- Social preview image: `public/og-image.jpg` (1200 × 630 px).

### Hero video

The home page hero plays `public/videos/hero-*.mp4` (1920×1080 for desktop, a 720×1280 portrait crop for phones), each in AV1 with an H.264 fallback, with matching poster frames in `public/images/hero-poster*.jpg`. The 4K original lives in `media-source/` (git-ignored). To replace the video, re-encode it into the same four files and two posters, for example:

```bash
ffmpeg -i source.mov -an -vf "scale=1920:1080" -c:v libsvtav1 -preset 6 -crf 34 -g 60 -movflags +faststart public/videos/hero-desktop-av1.mp4
ffmpeg -i source.mov -an -vf "scale=1920:1080" -c:v libx264 -preset slow -crf 23 -g 60 -movflags +faststart public/videos/hero-desktop-h264.mp4
# phones: add a centre crop first, e.g. -vf "crop=ih*9/16:ih,scale=720:1280"
```

Images are served through `next/image`, so they are resized and compressed automatically.

## YouTube and Instagram

Both update on their own; nothing needs editing when a new video or post goes up.

- **YouTube:** the home page and Dhruva Speaks read the channel's public feed (`lib/youtube.js`) and check for new videos every 10 minutes. If YouTube can't be reached, the last videos shown stay up.
- **Instagram:** Instagram's own profile widget shows the six newest posts, reels included, with no setup.

### Instagram reels

To also show the newest reels as cards that play on the site, connect the Instagram account once:

1. The account must be a professional account (Business or Creator). In the Instagram app: **Settings → Account type and tools → Switch to professional account**. It's free.
2. At [developers.facebook.com](https://developers.facebook.com/apps), create a **Business** type app and add the **Instagram** product.
3. In the app's left menu, open **Instagram → API setup with Instagram business login**. Click **Generate token** next to the account (add the account first if it isn't listed), log in to Instagram and copy the token.
4. In Vercel: **Project → Settings → Environment Variables**, add `INSTAGRAM_ACCESS_TOKEN` with the token for Production, then redeploy.

The token lasts 60 days, so repeat steps 3 and 4 before then (a calendar reminder helps). If it expires, the site quietly goes back to the Instagram widget; nothing breaks.

## SEO

- `/sitemap.xml` and `/robots.txt` are generated from the routes and data above.
- Pages include canonical URLs, Open Graph/Twitter tags and schema.org data (Hospital, Physician, FAQ, breadcrumbs).
- Old URLs (`/neonatal`, `/neonatal-care`, `/privacy-policy`, `/book-appointment`) redirect to their new pages (`next.config.js`).
- Specialty pages take their H1, title tag, meta description, FAQs and videos from `lib/data.js` and `lib/service-details.js`.
- The SEO plan, Google Business Profile checklist and monitoring checklist are in [`docs/SEO.md`](docs/SEO.md).
