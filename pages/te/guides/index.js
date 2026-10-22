import GuideIndex from '@/components/guides/GuideIndex';
import { publishedGuides } from '@/lib/guides';
import { servicesTe, teServicePath, teServiceSlugs } from '@/lib/services-te';

export default function TeluguGuidesPage({ items, services }) {
  return <GuideIndex lang="te" items={items} services={services} />;
}

export function getStaticProps() {
  const items = publishedGuides.map((guide) => ({
    slug: guide.slug,
    title: guide.te.title,
    answer: guide.te.answer,
    updatedOn: guide.updatedOn,
  }));
  const services = teServiceSlugs.map((slug) => ({ href: teServicePath(slug), title: servicesTe[slug].title }));
  return { props: { items, services } };
}
