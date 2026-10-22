import ServiceArticle from '@/components/services/ServiceArticle';
import { getService, services, whyChooseUs } from '@/lib/data';
import { guidePath } from '@/lib/guide-languages';
import { guideLinks } from '@/lib/guides';
import { getServiceDetails } from '@/lib/service-details';
import { abroadServices, serviceGuideSlugs } from '@/lib/service-links';
import { teServicePath, teServiceSlugs } from '@/lib/services-te';

const emergencyBanners = {
  neonatal: {
    title: 'Neonatal Emergency?',
    description:
      'Every second counts. Our NICU team is ready 24 hours a day, 7 days a week, with rapid admission protocols for newborns who need immediate care.',
  },
  paediatrics: {
    title: 'Is Your Child Unwell Right Now?',
    description:
      'Our neonatal and paediatric emergency team is on duty 24 hours a day, 7 days a week. Call the emergency line or come straight to the hospital.',
  },
};

export default function ServicePage({ slug, guides, faqs, videos, sources, showAbroad, teluguPath }) {
  const path = `/services/${slug}`;
  const otherServices = services
    .filter((item) => item.slug !== slug)
    .map((item) => ({ href: `/services/${item.slug}`, title: item.title }));

  return (
    <ServiceArticle
      lang="en"
      path={path}
      service={getService(slug)}
      faqs={faqs}
      videos={videos}
      sources={sources}
      guides={guides}
      otherServices={otherServices}
      whyChoose={whyChooseUs}
      banner={emergencyBanners[slug]}
      showAbroad={showAbroad}
      alternates={
        teluguPath
          ? [
              { hrefLang: 'en-IN', path },
              { hrefLang: 'te-IN', path: teluguPath },
            ]
          : []
      }
      languageLink={teluguPath ? { href: teluguPath, hrefLang: 'te-IN', lang: 'te', label: 'తెలుగులో చదవండి' } : undefined}
    />
  );
}

export function getStaticPaths() {
  return {
    paths: services.map((service) => ({ params: { slug: service.slug } })),
    fallback: false,
  };
}

// FAQs and videos come from lib/service-details.js here, so their text isn't bundled into other pages.
export function getStaticProps({ params }) {
  const { slug } = params;
  const { faqs, videos, sources } = getServiceDetails(slug);
  return {
    props: {
      slug,
      guides: guideLinks('en', serviceGuideSlugs[slug] || []).map((guide) => ({ href: guidePath(guide.slug), title: guide.title })),
      faqs,
      videos,
      sources,
      showAbroad: abroadServices.includes(slug),
      teluguPath: teServiceSlugs.includes(slug) ? teServicePath(slug) : null,
    },
  };
}
