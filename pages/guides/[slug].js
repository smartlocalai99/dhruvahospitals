import GuideArticle from '@/components/guides/GuideArticle';
import { getGuide, guideLinks, publishedGuides } from '@/lib/guides';

export default function GuidePage(props) {
  return <GuideArticle lang="en" {...props} />;
}

export function getStaticPaths() {
  return { paths: publishedGuides.map((guide) => ({ params: { slug: guide.slug } })), fallback: false };
}

// Only this language's text is sent to the page.
export function getStaticProps({ params }) {
  const { en, te, ...guide } = getGuide(params.slug);
  return {
    props: {
      guide,
      content: en,
      otherGuides: guideLinks('en').filter((item) => item.slug !== params.slug),
    },
  };
}
