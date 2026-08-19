import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ title, description, children }) {
  const router = useRouter();
  const pageTitle = title ? `${title} | Dhruva Hospitals` : 'Dhruva Hospitals';
  const pageDescription = description || 'Trusted family healthcare, advanced medical care, and compassionate healing from Dhruva Hospitals in Kadapa.';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dhruvahospitals.vercel.app';
  const pageUrl = `${siteUrl}${router.asPath === '/' ? '' : router.asPath}`;
  const imageUrl = `${siteUrl}/images/hero-care.jpg`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dhruva Hospitals" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content="Dhruva Hospitals healthcare team" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
