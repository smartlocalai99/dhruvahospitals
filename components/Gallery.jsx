import CoverImage from './CoverImage';

export default function Gallery({ images }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <figure key={image.src} className="group relative overflow-hidden rounded-3xl">
          <CoverImage
            src={image.src}
            alt={image.alt}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3] w-full"
            imageClassName="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <figcaption className="absolute bottom-3 left-3 rounded-xl bg-white/90 px-3.5 py-1.5 text-sm font-medium text-navy-800 shadow-sm backdrop-blur">
            {image.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
