import BlogArticle from '@/components/blog/BlogArticle';
import { getDoctor, getService, hasProfile } from '@/lib/data';
import { getCategory, getPost, posts } from '@/lib/blog';

export default function BlogPostPage(props) {
  return <BlogArticle {...props} />;
}

export function getStaticPaths() {
  return { paths: posts.map((post) => ({ params: { slug: post.slug } })), fallback: false };
}

// Only this article's text is sent to the page; lib/blog is read at build time.
export function getStaticProps({ params }) {
  const post = getPost(params.slug);
  const service = post.service ? getService(post.service) : null;
  const doctor = post.doctor ? getDoctor(post.doctor) : null;
  return {
    props: {
      post: { links: [], sources: [], faqs: [], reviewedOn: null, ...post },
      category: getCategory(post.category),
      related: posts
        .filter((item) => item.category === post.category && item.slug !== post.slug)
        .slice(0, 6)
        .map((item) => ({ slug: item.slug, title: item.title })),
      service: service ? { slug: service.slug, title: service.title } : null,
      doctor: doctor && hasProfile(doctor) ? { slug: doctor.slug, name: doctor.name, title: doctor.title } : null,
    },
  };
}
