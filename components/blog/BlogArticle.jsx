import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import BookCallButton from '@/components/BookCallButton';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from '@/components/Icons';
import { formatDate } from '@/lib/guide-languages';
import { site, whatsappLink } from '@/lib/site';
import { blogPostingSchema, breadcrumbSchema } from '@/lib/schema';

function Table({ columns, rows }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-2xl border border-neutral-200">
      <table className="w-full min-w-[520px] text-left text-sm">
        <thead className="bg-navy-50 text-navy-900">
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col" className="px-4 py-3 font-semibold">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100 text-neutral-700">
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) =>
                index === 0 ? (
                  <th key={index} scope="row" className="px-4 py-3 align-top font-semibold text-neutral-950">
                    {cell}
                  </th>
                ) : (
                  <td key={index} className="px-4 py-3 align-top leading-relaxed">
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// One health-blog article. `post` comes from lib/blog; `category` is its category; `related` lists other
// articles ({ slug, title }); `service` ({ slug, title }) and `doctor` ({ slug, name, title }) link to the
// matching service page and doctor profile.
export default function BlogArticle({ post, category, related, service, doctor }) {
  const path = `/blog/${post.slug}`;
  const reviewed = Boolean(post.reviewedOn && doctor);

  return (
    <Layout
      title={post.seoTitle || post.title}
      description={post.description}
      image={category.image}
      imageAlt={category.imageAlt}
      jsonLd={[
        blogPostingSchema({ post, path, image: category.image }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Health Blog', path: '/blog' },
          { name: post.title, path },
        ]),
      ]}
    >
      <PageHeader eyebrow={category.label} title={post.title} />

      <section className="container-page py-16 sm:py-20">
        <Link href="/blog" className="text-link">
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          All health articles
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-14">
          <article className="min-w-0 max-w-3xl">
            <div className="info-card sm:p-8">
              <h2 className="text-sm font-semibold text-navy-700">Short answer</h2>
              <p className="mt-3 text-base leading-relaxed text-neutral-900 sm:text-lg">{post.answer}</p>
              <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 border-t border-navy-100 pt-5 text-sm">
                <div>
                  <dt className="text-neutral-600">Published</dt>
                  <dd className="mt-0.5 font-semibold text-neutral-950">
                    <time dateTime={post.publishedOn}>{formatDate(post.publishedOn)}</time>
                  </dd>
                </div>
                {post.updatedOn !== post.publishedOn && (
                  <div>
                    <dt className="text-neutral-600">Last updated</dt>
                    <dd className="mt-0.5 font-semibold text-neutral-950">
                      <time dateTime={post.updatedOn}>{formatDate(post.updatedOn)}</time>
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-neutral-600">Published by</dt>
                  <dd className="mt-0.5 font-semibold text-neutral-950">Dhruva Hospitals, Kadapa</dd>
                </div>
                {reviewed && (
                  <div>
                    <dt className="text-neutral-600">Clinical reviewer</dt>
                    <dd className="mt-0.5 font-semibold text-neutral-950">
                      <Link href={`/doctors/${doctor.slug}`} className="text-navy-700 hover:underline">
                        {doctor.name}
                      </Link>
                      , <time dateTime={post.reviewedOn}>{formatDate(post.reviewedOn)}</time>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {post.sections.map((section) => (
              <div key={section.heading} className="mt-14">
                <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">{section.heading}</h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-5 space-y-3">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700 sm:text-base">
                        <span className="check-bullet-icon mt-0.5">
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.ordered && (
                  <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm text-neutral-700 marker:font-semibold marker:text-navy-700 sm:text-base">
                    {section.ordered.map((item) => (
                      <li key={item} className="pl-1 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
                {section.table && <Table {...section.table} />}
                {section.after?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            {post.faqs.length > 0 && (
              <div className="mt-14">
                <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">Common questions</h2>
                <div className="mt-6 border-t border-neutral-200">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="border-b border-neutral-200 py-5">
                      <h3 className="text-base font-semibold text-neutral-950">{faq.question}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {post.links.length > 0 && (
              <div className="mt-14">
                <h2 className="text-base font-semibold text-neutral-950">Read next</h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {post.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-link">
                        {link.label}
                        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {post.sources.length > 0 && (
              <div className="mt-14">
                <h2 className="text-base font-semibold text-neutral-950">Sources</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {post.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-navy-700 underline-offset-2 hover:underline"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="mt-12 text-sm text-neutral-500">
              This article is general information, not a diagnosis or treatment plan. In an emergency, call{' '}
              <a href={site.phones.emergency.href} className="font-semibold text-brandred-600 hover:underline">
                {site.phones.emergency.display}
              </a>
              .
            </p>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-navy-700 p-7 text-white">
              <h2 className="text-xl font-semibold">Talk to our doctors</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-100">
                Book a consultation by phone or WhatsApp. OPD hours are {site.hours.opd}.
              </p>
              <BookCallButton className="btn-light mt-6 w-full" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
              <div className="mt-6 border-t border-white/15 pt-5 text-sm text-navy-100">
                <p>24/7 Emergency</p>
                <a href={site.phones.emergency.href} className="mt-1 block text-lg font-semibold text-white hover:underline">
                  {site.phones.emergency.display}
                </a>
              </div>
            </div>

            {(service || doctor) && (
              <div className="rounded-3xl border border-navy-200 p-7">
                <h2 className="text-lg font-semibold text-neutral-950">At Dhruva Hospitals</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {service && (
                    <li>
                      <Link href={`/services/${service.slug}`} className="text-link">
                        {service.title}
                        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </li>
                  )}
                  {doctor && (
                    <li>
                      <Link href={`/doctors/${doctor.slug}`} className="text-link">
                        {doctor.name}, {doctor.title}
                        <ArrowRightIcon className="h-4 w-4 flex-none" aria-hidden="true" />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            )}

            {related.length > 0 && (
              <div className="rounded-3xl border border-navy-200 p-7">
                <h2 className="text-lg font-semibold text-neutral-950">More on {category.label.toLowerCase()}</h2>
                <ul className="mt-4 divide-y divide-neutral-100">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="group flex items-center justify-between gap-3 py-3 text-sm font-medium text-neutral-800 transition-colors hover:text-navy-700"
                      >
                        {item.title}
                        <ArrowRightIcon
                          className="h-4 w-4 flex-none text-navy-300 transition-transform group-hover:translate-x-0.5 group-hover:text-navy-700"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>
    </Layout>
  );
}
