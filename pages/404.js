import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { site } from '@/lib/site';

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found" noindex>
      <PageHeader
        eyebrow="404"
        title="We Couldn't Find That Page"
        subtitle="The page you are looking for may have moved. These links can help you find your way."
      />

      <section className="container-page py-16 text-center sm:py-20">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/" className="btn-primary">
            Go to homepage
          </Link>
          <Link href="/services" className="btn-secondary">
            Our services
          </Link>
          <Link href="/doctors" className="btn-secondary">
            Our doctors
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>

        <p className="mt-10 text-sm text-neutral-500">
          Need urgent help? Call our 24/7 emergency line at{' '}
          <a href={site.phones.emergency.href} className="font-semibold text-brandred-600 hover:underline">
            {site.phones.emergency.display}
          </a>
          .
        </p>
      </section>
    </Layout>
  );
}
