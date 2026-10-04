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

Images are served through `next/image`, so they are resized and compressed automatically.

## SEO

- `/sitemap.xml` and `/robots.txt` are generated from the routes and data above.
- Pages include canonical URLs, Open Graph/Twitter tags and schema.org data (Hospital, Physician, FAQ, breadcrumbs).
- Old URLs (`/neonatal`, `/neonatal-care`, `/privacy-policy`, `/book-appointment`) redirect to their new pages (`next.config.js`).
