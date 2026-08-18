import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ title, description, children }) {
  const pageTitle = title ? `${title} | Dhruva Hospitals` : 'Dhruva Hospitals';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
