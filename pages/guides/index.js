import GuideIndex from '@/components/guides/GuideIndex';
import { publishedGuides } from '@/lib/guides';

export default function GuidesPage({ items }) {
  return <GuideIndex lang="en" items={items} />;
}

export function getStaticProps() {
  const items = publishedGuides.map((guide) => ({
    slug: guide.slug,
    title: guide.en.title,
    answer: guide.en.answer,
    updatedOn: guide.updatedOn,
  }));
  return { props: { items } };
}
