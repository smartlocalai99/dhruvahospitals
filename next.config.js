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
    remotePatterns: [{ protocol: 'https', hostname: 'i.ytimg.com' }],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
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
    ];
  },
};

module.exports = nextConfig;
