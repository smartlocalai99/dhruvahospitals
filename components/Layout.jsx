import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileActionBar from './MobileActionBar';
import { site, absoluteUrl } from '@/lib/site';

function serialize(schema) {
  return JSON.stringify(schema).replace(/</g, '\\u003c');
}

// Search engine ownership checks (Google Search Console, Bing Webmaster Tools). Set in Vercel; see README.
const siteVerification = {
  'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
};

export default function Layout({
  title,
  fullTitle, // replaces the "Title | Dhruva Hospitals" pattern, e.g. on the home page
  description,
  image = '/og-image.jpg',
  imageAlt = 'Doctors at Dhruva Hospitals, Kadapa',
  jsonLd,
  noindex = false,
  ogLocale = 'en_IN',
  alternates = [], // [{ hrefLang: 'te-IN', path: '/te/...' }] for pages that exist in more than one language
  children,
}) {
  const router = useRouter();
  const pageTitle = fullTitle || (title ? `${title} | Dhruva Hospitals` : 'Dhruva Hospitals');
  const pageDescription = description || site.description;
  // Built from the route, not router.asPath: when Next.js regenerates a page in the background
  // (ISR), asPath for the home page is "/index", and query strings must never reach the canonical.
  const canonicalPath = router.pathname.replace(/\[(\w+)\]/g, (_, key) => router.query[key]);
  const pageUrl = absoluteUrl(canonicalPath);
  const imageUrl = absoluteUrl(image);
  const schemas = jsonLd ? [].concat(jsonLd) : [];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={pageUrl} />}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={ogLocale} />
        {alternates.map((alternate) => (
          <link key={alternate.hrefLang} rel="alternate" hrefLang={alternate.hrefLang} href={absoluteUrl(alternate.path)} />
        ))}
        {alternates.length > 0 && (
          <link rel="alternate" hrefLang="x-default" href={absoluteUrl(alternates[0].path)} />
        )}
        {Object.entries(siteVerification).map(([name, content]) =>
          content ? <meta key={name} name={name} content={content} /> : null
        )}
        <meta property="og:site_name" content="Dhruva Hospitals" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {!noindex && <meta property="og:url" content={pageUrl} />}
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={imageAlt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serialize(schema) }}
          />
        ))}
      </Head>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
