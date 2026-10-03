import Image from 'next/image';

const tones = {
  light: 'from-navy-50 via-navy-100 to-navy-200',
  dark: 'from-navy-600 via-navy-700 to-navy-800',
};

// A responsive photo that fills its (aspect-ratio) container, on a soft brand gradient while loading.
export default function CoverImage({
  src,
  alt = '',
  className = '',
  tone = 'light',
  sizes = '100vw',
  priority = false,
  imageClassName = 'object-cover',
}) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${tones[tone]} ${className}`}>
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          fetchPriority={priority ? 'high' : undefined}
          className={imageClassName}
        />
      )}
    </div>
  );
}
