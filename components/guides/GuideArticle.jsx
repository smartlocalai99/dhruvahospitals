import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import NriHelpCard from '@/components/guides/NriHelpCard';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from '@/components/Icons';
import { getDoctor } from '@/lib/data';
import { formatDate, guideLanguages, guidePath } from '@/lib/guide-languages';
import { breadcrumbSchema, faqSchema, medicalWebPageSchema, physicianSchema } from '@/lib/schema';

function CheckList({ items }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700 sm:text-base">
          <span className="check-bullet-icon mt-0.5">
            <CheckIcon className="h-3 w-3" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

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

// Steps are a real sequence (weeks of pregnancy, order of paperwork), so they are an ordered list.
function Steps({ steps, lang }) {
  return (
    <ol className="mt-6 border-t border-neutral-200">
      {steps.map((step) => (
        <li
          key={step.title}
          className="grid gap-1 border-b border-neutral-200 py-5 sm:grid-cols-[150px_1fr] sm:gap-6"
        >
          <span className="text-sm font-semibold text-navy-700">{step.label}</span>
          <div>
            <h3 className="text-base font-semibold text-neutral-950">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 sm:text-base">{step.text}</p>
            {step.link && (
              <Link href={guidePath(step.link.href, lang)} className="text-link mt-2">
                {step.link.label}
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

// `guide` holds the guide's dates, reviewer and sources; `content` the text in this page's language;
// `otherGuides` is a list of { slug, title } links.
export default function GuideArticle({ guide, content, lang, otherGuides }) {
  const { slug } = guide;
  const { ui } = guideLanguages[lang];
  const otherLang = lang === 'en' ? 'te' : 'en';
  const path = guidePath(slug, lang);
  const reviewer = guide.reviewer ? getDoctor(guide.reviewer) : null;
  const reviewed = Boolean(guide.reviewedOn && reviewer);

  const schemas = [
    medicalWebPageSchema({ guide, content, lang, path, reviewer }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: ui.indexTitle, path: guideLanguages[lang].basePath },
      { name: content.title, path },
    ]),
  ];
  if (content.faqs.length) schemas.push(faqSchema(content.faqs));
  if (reviewed) schemas.push(physicianSchema(reviewer));

  return (
    <Layout
      title={content.title}
      description={content.description}
      ogLocale={guideLanguages[lang].ogLocale}
      alternates={['en', 'te'].map((code) => ({ hrefLang: guideLanguages[code].hrefLang, path: guidePath(slug, code) }))}
      jsonLd={schemas}
    >
      <div lang={lang}>
        <PageHeader eyebrow={ui.eyebrow} title={content.title} />

        <section className="container-page py-16 sm:py-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href={guideLanguages[lang].basePath} className="text-link">
              <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
              {ui.allGuides}
            </Link>
            <Link
              href={guidePath(slug, otherLang)}
              hrefLang={guideLanguages[otherLang].hrefLang}
              lang={otherLang}
              className="rounded-full border border-navy-200 px-4 py-1.5 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-50"
            >
              {ui.switchLabel}
            </Link>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-14">
            <article className="min-w-0 max-w-3xl">
              <div className="info-card sm:p-8">
                <h2 className="text-sm font-semibold text-navy-700">{ui.shortAnswer}</h2>
                <p className="mt-3 text-base leading-relaxed text-neutral-900 sm:text-lg">{content.answer}</p>
                <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 border-t border-navy-100 pt-5 text-sm">
                  <div>
                    <dt className="text-neutral-500">{ui.updated}</dt>
                    <dd className="mt-0.5 font-semibold text-neutral-950">
                      <time dateTime={guide.updatedOn}>{formatDate(guide.updatedOn, lang)}</time>
                    </dd>
                  </div>
                  {reviewed && (
                    <div>
                      <dt className="text-neutral-500">{ui.reviewer}</dt>
                      <dd className="mt-0.5 font-semibold text-neutral-950">
                        <Link href={`/doctors/${reviewer.slug}`} className="text-navy-700 hover:underline">
                          {reviewer.name}
                        </Link>
                        , <time dateTime={guide.reviewedOn}>{formatDate(guide.reviewedOn, lang)}</time>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              {guide.prices && guide.pricesCheckedOn && (
                <div className="mt-14">
                  <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">{ui.prices}</h2>
                  <Table
                    columns={[ui.priceItem, ui.priceRange]}
                    rows={guide.prices.map((price) => [content.priceLabels[price.key], price.range])}
                  />
                  <p className="mt-3 text-sm text-neutral-500">
                    {ui.priceNote}: {content.priceIncludes} ({formatDate(guide.pricesCheckedOn, lang)})
                  </p>
                </div>
              )}

              {content.sections.map((section) => (
                <div key={section.heading} className="mt-14">
                  <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">{section.heading}</h2>
                  {section.body?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                  {section.steps && <Steps steps={section.steps} lang={lang} />}
                  {section.list && <CheckList items={section.list} />}
                  {section.table && <Table {...section.table} />}
                </div>
              ))}

              {content.faqs.length > 0 && (
                <div className="mt-14">
                  <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">{ui.questions}</h2>
                  <div className="mt-6 border-t border-neutral-200">
                    {content.faqs.map((faq) => (
                      <div key={faq.question} className="border-b border-neutral-200 py-5">
                        <h3 className="text-base font-semibold text-neutral-950">{faq.question}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {guide.sources.length > 0 && (
                <div className="mt-14">
                  <h2 className="text-base font-semibold text-neutral-950">{ui.sources}</h2>
                  <ul className="mt-3 space-y-2 text-sm">
                    {guide.sources.map((source) => (
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
            </article>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <NriHelpCard ui={ui} />

              {otherGuides.length > 0 && (
                <div className="rounded-2xl border border-neutral-200 p-6">
                  <h2 className="text-base font-semibold text-neutral-950">{ui.otherGuides}</h2>
                  <ul className="mt-4 space-y-4">
                    {otherGuides.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={guidePath(item.slug, lang)}
                          className="text-sm font-medium leading-snug text-navy-700 hover:text-navy-900 hover:underline"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </section>
      </div>
    </Layout>
  );
}
