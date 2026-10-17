import { doctors, hasProfile, services } from '@/lib/data';
import { guidePath } from '@/lib/guide-languages';
import { publishedGuides } from '@/lib/guides';
import { absoluteUrl } from '@/lib/site';

const staticPaths = [
  '/',
  '/services',
  '/facilities',
  '/doctors',
  '/dhruva-speaks',
  '/nri',
  '/guides',
  '/te/guides',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
];

function buildSitemap() {
  // lastmod only where the date is real (guides record when they were last updated).
  const entries = [
    ...staticPaths.map((path) => ({ path })),
    ...services.map((service) => ({ path: `/services/${service.slug}` })),
    ...doctors.filter(hasProfile).map((doctor) => ({ path: `/doctors/${doctor.slug}` })),
    ...publishedGuides.flatMap((guide) =>
      ['en', 'te'].map((lang) => ({ path: guidePath(guide.slug, lang), lastmod: guide.updatedOn }))
    ),
  ];

  const urls = entries
    .map(({ path, lastmod }) =>
      [`  <url>`, `    <loc>${absoluteUrl(path)}</loc>`, lastmod && `    <lastmod>${lastmod}</lastmod>`, `  </url>`]
        .filter(Boolean)
        .join('\n')
    )
    .join('\n');

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
