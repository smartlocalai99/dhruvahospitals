import { doctors, gallery, getService, hasProfile, services } from '@/lib/data';
import { guidePath } from '@/lib/guide-languages';
import { publishedGuides } from '@/lib/guides';
import { teServicePath, teServiceSlugs } from '@/lib/services-te';
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

// Photos listed for Google Images on the pages that show them.
const pageImages = {
  '/': ['/images/dhruva-hospitals-kadapa-team.jpg', '/images/dhruva-hospitals-kadapa-building.jpg'],
  '/about': ['/images/dhruva-hospitals-kadapa-team.jpg', '/images/dr-mounika-reddy-and-dr-sudarshan-reddy.jpg'],
  '/facilities': gallery.map((photo) => photo.src),
};

function buildSitemap() {
  // lastmod only where the date is real (guides record when they were last updated).
  const entries = [
    ...staticPaths.map((path) => ({ path, images: pageImages[path] })),
    ...services.map((service) => ({ path: `/services/${service.slug}`, images: [service.image] })),
    ...teServiceSlugs.map((slug) => ({ path: teServicePath(slug), images: [getService(slug).image] })),
    ...doctors.filter(hasProfile).map((doctor) => ({
      path: `/doctors/${doctor.slug}`,
      images: [doctor.image, doctor.photoAtHospital].filter(Boolean),
    })),
    ...publishedGuides.flatMap((guide) =>
      ['en', 'te'].map((lang) => ({ path: guidePath(guide.slug, lang), lastmod: guide.updatedOn }))
    ),
  ];

  const urls = entries
    .map(({ path, lastmod, images = [] }) =>
      [
        `  <url>`,
        `    <loc>${absoluteUrl(path)}</loc>`,
        lastmod && `    <lastmod>${lastmod}</lastmod>`,
        ...images.map((src) => `    <image:image><image:loc>${absoluteUrl(src)}</image:loc></image:image>`),
        `  </url>`,
      ]
        .filter(Boolean)
        .join('\n')
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;
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
