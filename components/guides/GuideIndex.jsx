import Link from 'next/link';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import NriHelpCard from '@/components/guides/NriHelpCard';
import { ArrowRightIcon } from '@/components/Icons';
import { formatDate, guideLanguages, guidePath } from '@/lib/guide-languages';
import { breadcrumbSchema } from '@/lib/schema';

// `items`: [{ slug, title, answer, updatedOn }] in this page's language.
// `services`: [{ href, title }] service pages in this language, listed beside the guides.
export default function GuideIndex({ lang, items, services = [] }) {
  const { ui, basePath, ogLocale } = guideLanguages[lang];
  const otherLang = lang === 'en' ? 'te' : 'en';

  return (
    <Layout
      fullTitle={ui.indexSeoTitle}
      description={ui.indexSubtitle}
      ogLocale={ogLocale}
      alternates={['en', 'te'].map((code) => ({ hrefLang: guideLanguages[code].hrefLang, path: guideLanguages[code].basePath }))}
      jsonLd={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: ui.indexTitle, path: basePath },
      ])}
    >
      <div lang={lang} className={lang === 'te' ? 'telugu-page' : undefined}>
        <PageHeader eyebrow={ui.eyebrow} title={ui.indexTitle} subtitle={ui.indexSubtitle} />

        <section className="container-page py-16 sm:py-20">
          <div className="flex justify-end">
            <Link
              href={guideLanguages[otherLang].basePath}
              hrefLang={guideLanguages[otherLang].hrefLang}
              lang={otherLang}
              className="rounded-full border border-navy-200 px-4 py-1.5 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-50"
            >
              {ui.switchLabel}
            </Link>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-14">
            <ul className="grid gap-5 sm:grid-cols-2">
              {items.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={guidePath(guide.slug, lang)}
                    className="group flex h-full flex-col rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-navy-300 hover:bg-navy-50/50"
                  >
                    <h2 className="text-lg font-bold leading-snug text-neutral-950">{guide.title}</h2>
                    <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-neutral-600">{guide.answer}</p>
                    <span className="mt-auto flex items-center justify-between gap-4 pt-5 text-sm">
                      <span className="text-neutral-500">
                        {ui.updated} <time dateTime={guide.updatedOn}>{formatDate(guide.updatedOn, lang)}</time>
                      </span>
                      <span className="text-link">
                        {ui.readGuide}
                        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <NriHelpCard ui={ui} />
              {services.length > 0 && (
                <div className="rounded-2xl border border-neutral-200 p-6">
                  <h2 className="text-base font-semibold text-neutral-950">{ui.services}</h2>
                  <ul className="mt-4 space-y-3">
                    {services.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="text-sm font-medium leading-snug text-navy-700 hover:text-navy-900 hover:underline"
                        >
                          {service.title}
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
