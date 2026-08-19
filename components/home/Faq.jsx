import { useState } from 'react';
import { PlusMinusIcon } from '../Icons';
import { faqs } from '@/lib/data';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(2);

  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-10 text-center">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          Frequently Asked Questions
        </span>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
          Here Are Some of Our Most Asked Questions
        </h2>
        <p className="mt-4 text-neutral-500">
          Everything you need to know before your visit to Dhruva Hospitals.
        </p>
      </div>

      <div className="mx-10 mt-12 grid gap-x-10 border-t border-neutral-100 md:grid-cols-2">
        {faqs.map((faq, i) => {
          const open = openIndex === i;
          return (
            <div key={faq.question} className="border-b border-neutral-100">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-base font-medium text-neutral-950">{faq.question}</span>
                <PlusMinusIcon open={open} className="h-5 w-5 flex-none text-neutral-500" />
              </button>
              {open && (
                <p className="-mt-2 pb-6 text-sm leading-relaxed text-neutral-500">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
