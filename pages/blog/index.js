import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import BookCallButton from '@/components/BookCallButton';
import { ArrowRightIcon } from '@/components/Icons';
import { blogCategories, posts } from '@/lib/blog';
import { formatDate } from '@/lib/guide-languages';
import { site, absoluteUrl } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/schema';

// `sections`: [{ key, label, description, posts: [{ slug, title, answer, updatedOn }] }]
export default function BlogIndexPage({ sections, total }) {
  return (
    <Layout
      fullTitle="Health Blog: Pregnancy, Women's & Child Health | Dhruva Hospitals, Kadapa"
      description={`${total} plain-language articles from Dhruva Hospitals, Kadapa on pregnancy, fertility and IVF, women's health, newborns, children, diabetes, dengue and more.`}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Dhruva Hospitals Health Blog',
          url: absoluteUrl('/blog'),
          inLanguage: 'en-IN',
          publisher: { '@id': `${site.url}/#hospital` },
        },
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Health Blog', path: '/blog' },
        ]),
      ]}
    >
      <PageHeader
        eyebrow="Health Blog"
        title="Health Blog from Dhruva Hospitals, Kadapa"
        subtitle="Clear answers to the questions families ask us most, from pregnancy and fertility to newborns, children and everyday health."
      />

      <section className="container-page py-16 sm:py-20">
        <nav aria-label="Blog categories" className="flex flex-wrap gap-2">
          {sections.map((section) => (
            <a
              key={section.key}
              href={`#${section.key}`}
              className="rounded-full border border-navy-200 px-4 py-2 text-sm font-medium text-navy-800 transition-colors hover:border-navy-400 hover:bg-navy-50"
            >
              {section.label}
            </a>
          ))}
        </nav>

        {sections.map((section) => (
          <div key={section.key} id={section.key} className="mt-16 scroll-mt-28">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">{section.label}</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-600 sm:text-base">{section.description}</p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-navy-300 hover:bg-navy-50/50"
                  >
                    <h3 className="text-lg font-bold leading-snug text-neutral-950">{post.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-600">{post.answer}</p>
                    <span className="mt-auto flex items-center justify-between gap-4 pt-5 text-sm">
                      <span className="text-neutral-500">
                        <time dateTime={post.updatedOn}>{formatDate(post.updatedOn)}</time>
                      </span>
                      <span className="text-link">
                        Read
                        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-20 rounded-3xl bg-navy-700 px-8 py-10 text-center text-white sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Have a question about your own health?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-navy-100 sm:text-base">
            These articles are general information. For advice about you or your child, book a consultation. OPD hours are{' '}
            {site.hours.opd}.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <BookCallButton className="btn-light" />
            <span className="text-sm font-semibold text-white">{site.phones.main.display}</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  const sections = blogCategories.map((category) => ({
    key: category.key,
    label: category.label,
    description: category.description,
    posts: posts
      .filter((post) => post.category === category.key)
      .map((post) => ({
        slug: post.slug,
        title: post.title,
        answer: post.answer.length > 220 ? `${post.answer.slice(0, 217).trimEnd()}…` : post.answer,
        updatedOn: post.updatedOn,
      })),
  }));
  return { props: { sections, total: posts.length } };
}
