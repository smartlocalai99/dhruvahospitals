/** @type {import('next').NextConfig} */

// Public URL used for canonical links, Open Graph tags, the sitemap and structured data.
// Set NEXT_PUBLIC_SITE_URL in production; on Vercel the project's production domain is used automatically.
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://dhruvahospitals.vercel.app')
).replace(/\/+$/, '');

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
];

const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  poweredByHeader: false,
  env: {
    SITE_URL: siteUrl,
  },
  images: {
    // AVIF first (smaller files) for browsers that support it, WebP otherwise.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'i.ytimg.com' }],
  },
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      {
        // Hero videos are large; let browsers keep them for a day instead of re-checking every visit.
        source: '/videos/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
    ];
  },
  async redirects() {
    // Keep links from the previous dhruvahospitals.com site working.
    return [
      { source: '/neonatal', destination: '/services/neonatal', permanent: true },
      { source: '/neonatal-care', destination: '/services/neonatal', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/terms-of-service', destination: '/terms', permanent: true },
      // Appointments are booked by phone; send old booking links to the contact numbers.
      { source: '/book-appointment', destination: '/contact', permanent: true },
      // Photos renamed to descriptive file names (October 2026); keep the old addresses working.
      { source: '/images/about-doctors.jpg', destination: '/images/dr-mounika-reddy-and-dr-sudarshan-reddy.jpg', permanent: true },
      { source: '/images/about-team.jpg', destination: '/images/doctors-in-consultation-room.jpg', permanent: true },
      { source: '/images/dept-child-care.jpg', destination: '/images/dr-mounika-reddy-holding-baby.jpg', permanent: true },
      { source: '/images/dept-paediatric.jpg', destination: '/images/paediatrician-checking-baby.jpg', permanent: true },
      { source: '/images/dept-womens-care.jpg', destination: '/images/pregnant-woman-resting.jpg', permanent: true },
      { source: '/images/hospital-exterior.jpg', destination: '/images/dhruva-hospitals-kadapa-building.jpg', permanent: true },
      { source: '/images/operation-theatre.jpg', destination: '/images/modular-operation-theatre.jpg', permanent: true },
      { source: '/images/service-diagnostics.jpg', destination: '/images/doctor-explaining-x-ray.jpg', permanent: true },
      { source: '/images/service-gynaecology.jpg', destination: '/images/gynaecologist-consultation-desk.jpg', permanent: true },
      { source: '/images/service-maternity.jpg', destination: '/images/pregnancy-consultation.jpg', permanent: true },
      { source: '/images/service-pediatric.jpg', destination: '/images/paediatrician-examining-baby.jpg', permanent: true },
      { source: '/images/service-xray.jpg', destination: '/images/chest-x-ray-diagnostics.jpg', permanent: true },
      { source: '/images/gallery/consultation-cabin.jpg', destination: '/images/gallery/dr-sudarshan-reddy-consultation-room-door.jpg', permanent: true },
      { source: '/images/gallery/corridor.jpg', destination: '/images/gallery/hospital-corridor.jpg', permanent: true },
      { source: '/images/gallery/hospital-entrance.jpg', destination: '/images/gallery/dhruva-hospitals-entrance.jpg', permanent: true },
      { source: '/images/gallery/reception.jpg', destination: '/images/gallery/dhruva-hospitals-reception.jpg', permanent: true },
      { source: '/images/hero-care.jpg', destination: '/images/dr-mounika-reddy-and-dr-sudarshan-reddy.jpg', permanent: true },
    ];
  },
};

module.exports = nextConfig;
