import GuideIndex from '@/components/guides/GuideIndex';
import { publishedGuides } from '@/lib/guides';

export default function TeluguGuidesPage({ items }) {
  return <GuideIndex lang="te" items={items} />;
}

export function getStaticProps() {
  const items = publishedGuides.map((guide) => ({
    slug: guide.slug,
    title: guide.te.title,
    answer: guide.te.answer,
    updatedOn: guide.updatedOn,
  }));
  return { props: { items } };
}
