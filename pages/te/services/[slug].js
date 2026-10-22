import ServiceArticle from '@/components/services/ServiceArticle';
import { getService } from '@/lib/data';
import { guidePath } from '@/lib/guide-languages';
import { guideLinks } from '@/lib/guides';
import { getServiceDetails } from '@/lib/service-details';
import { abroadServices, serviceGuideSlugs } from '@/lib/service-links';
import { servicesTe, teServicePath, teServiceSlugs, whyChooseTe } from '@/lib/services-te';

// Telugu service page. Text comes from lib/services-te.js; photo, doctors and videos from the English service.
// lib/services-te.js is only read in getStaticProps, so the other pages' Telugu text isn't sent to the browser.
export default function TeluguServicePage({ slug, path, content, guides, otherServices, videos, whyChoose, showAbroad }) {
  const base = getService(slug);
  const englishPath = `/services/${slug}`;

  return (
    <ServiceArticle
      lang="te"
      path={path}
      service={{ ...content, slug, image: base.image, doctors: base.doctors }}
      faqs={content.faqs}
      videos={videos}
      guides={guides}
      otherServices={otherServices}
      whyChoose={whyChoose}
      banner={content.banner}
      showAbroad={showAbroad}
      alternates={[
        { hrefLang: 'en-IN', path: englishPath },
        { hrefLang: 'te-IN', path },
      ]}
      languageLink={{ href: englishPath, hrefLang: 'en-IN', lang: 'en', label: 'Read in English' }}
    />
  );
}

export function getStaticPaths() {
  return { paths: teServiceSlugs.map((slug) => ({ params: { slug } })), fallback: false };
}

// Only this page's Telugu text is sent to the browser.
export function getStaticProps({ params }) {
  const { slug } = params;
  return {
    props: {
      slug,
      path: teServicePath(slug),
      content: servicesTe[slug],
      guides: guideLinks('te', serviceGuideSlugs[slug] || []).map((guide) => ({
        href: guidePath(guide.slug, 'te'),
        title: guide.title,
      })),
      otherServices: teServiceSlugs
        .filter((item) => item !== slug)
        .map((item) => ({ href: teServicePath(item), title: servicesTe[item].title })),
      videos: getServiceDetails(slug).videos,
      whyChoose: whyChooseTe,
      showAbroad: abroadServices.includes(slug),
    },
  };
}
