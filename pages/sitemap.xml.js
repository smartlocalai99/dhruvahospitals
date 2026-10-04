import { doctors, hasProfile, services } from '@/lib/data';
import { absoluteUrl } from '@/lib/site';

const staticPaths = [
  '/',
  '/services',
  '/facilities',
  '/doctors',
  '/dhruva-speaks',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
];

function buildSitemap() {
  const paths = [
    ...staticPaths,
    ...services.map((service) => `/services/${service.slug}`),
    ...doctors.filter(hasProfile).map((doctor) => `/doctors/${doctor.slug}`),
  ];

  const urls = paths.map((path) => `  <url>\n    <loc>${absoluteUrl(path)}</loc>\n  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=86400');
  res.end(buildSitemap());
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
