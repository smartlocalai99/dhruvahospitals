export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="container-page pt-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-navy-100 to-navy-600 px-6 py-16 text-center sm:py-20">
        <span className="eyebrow bg-white/80 shadow-sm">
          <span className="eyebrow-dot" />
          {eyebrow}
        </span>
        <h1 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-xl text-sm text-navy-800 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
