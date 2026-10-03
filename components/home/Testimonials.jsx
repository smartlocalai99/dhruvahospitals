import SectionHeading from '../SectionHeading';
import { StarIcon } from '../Icons';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="bg-navy-50/40 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Patient Voices"
          title="Trusted by Thousands of Happy Families"
          description="What families across Rayalaseema say about their care at Dhruva Hospitals."
          eyebrowClassName="bg-white"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-navy-100"
            >
              <div className="flex text-amber-400" role="img" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-neutral-700">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-5">
                <span
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-navy-700 text-sm font-semibold text-white"
                  aria-hidden="true"
                >
                  {testimonial.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-neutral-950">{testimonial.name}</span>
                  <span className="block text-xs text-neutral-500">
                    {testimonial.location} · {testimonial.service}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
