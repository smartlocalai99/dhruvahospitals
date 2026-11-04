import Link from 'next/link';
import { ArrowRightIcon } from '@/components/Icons';

// Home page: the health questions people search for most, each linking to its blog article.
// `questions` comes from getStaticProps ([{ href, question, topic }]) so the blog text isn't bundled here.
export default function HealthQuestions({ questions = [], className = '' }) {
  if (questions.length === 0) return null;

  return (
    <section className={`container-page ${className}`} aria-labelledby="health-questions-heading">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
        <div>
          <h2 id="health-questions-heading" className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Questions families ask us
          </h2>
          <p className="mt-4 max-w-sm text-neutral-500">
            Straight answers on pregnancy, fertility, women’s health and children’s health, with the sources we used.
          </p>
          <Link href="/blog" className="text-link mt-6">
            All health articles
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid border-t border-neutral-200 sm:grid-cols-2 sm:gap-x-10">
          {questions.map((item) => (
            <li key={item.href} className="border-b border-neutral-200">
              <Link
                href={item.href}
                className="group flex items-start justify-between gap-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-700 focus-visible:ring-offset-2"
              >
                <span>
                  <span className="block text-base font-semibold leading-snug text-neutral-950 transition-colors group-hover:text-navy-700">
                    {item.question}
                  </span>
                  <span className="mt-1 block text-sm text-neutral-500">{item.topic}</span>
                </span>
                <ArrowRightIcon
                  className="mt-1 h-4 w-4 flex-none text-navy-300 transition-transform group-hover:translate-x-0.5 group-hover:text-navy-700"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
