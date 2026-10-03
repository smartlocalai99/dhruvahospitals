import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';
import { site, absoluteUrl } from '@/lib/site';

function serialize(schema) {
  return JSON.stringify(schema).replace(/</g, '\\u003c');
}

export default function Layout({
  title,
  description,
  image = '/og-image.jpg',
  imageAlt = 'Doctors at Dhruva Hospitals, Kadapa',
  jsonLd,
  noindex = false,
  children,
}) {
  const router = useRouter();
  const pageTitle = title ? `${title} | Dhruva Hospitals` : 'Dhruva Hospitals';
  const pageDescription = description || site.description;
  const pageUrl = absoluteUrl(router.asPath.split(/[?#]/)[0]);
  const imageUrl = absoluteUrl(image);
  const schemas = jsonLd ? [].concat(jsonLd) : [];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        {noindex && <meta name="robots" content="noindex" />}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Dhruva Hospitals" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
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
    </>
  );
}
