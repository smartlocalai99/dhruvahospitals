// "At a glance": the facts patients (and search engines) look for first, as a definition list.
// `rows`: [{ label, value }] where value can be text or links.
export default function KeyFacts({ title = 'At a glance', rows, className = '' }) {
  return (
    <section className={`rounded-3xl border border-navy-100 bg-navy-50/60 p-6 sm:p-8 ${className}`}>
      <h2 className="text-lg font-semibold text-neutral-950">{title}</h2>
      <dl className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="text-sm text-neutral-600">{row.label}</dt>
            {/* Links in running text are underlined so they don't rely on colour alone. */}
            <dd className="mt-1 text-sm font-medium leading-relaxed text-neutral-900 [&_a]:underline [&_a]:decoration-navy-300 [&_a]:underline-offset-2">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
