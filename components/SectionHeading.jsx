export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  eyebrowClassName = '',
  className = '',
}) {
  const centered = align === 'center';

  return (
    <div className={`${centered ? 'mx-auto max-w-2xl text-center' : ''} ${className}`}>
      <span className={`eyebrow ${eyebrowClassName}`}>
        <span className="eyebrow-dot" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-neutral-500 ${centered ? '' : 'max-w-lg'}`}>{description}</p>
      )}
    </div>
  );
}
