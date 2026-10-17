import Link from 'next/link';
import CoverImage from '../CoverImage';
import { gallery } from '@/lib/data';

// The exterior first (shown large), then a mix of rooms.
const tour = [
  '/images/hospital-exterior.jpg',
  '/images/gallery/reception.jpg',
  '/images/operation-theatre.jpg',
  '/images/gallery/paediatric-ward.jpg',
  '/images/gallery/consultation-room.jpg',
];
const photos = tour.map((src) => gallery.find((photo) => photo.src === src)).filter(Boolean);

// "Take a Tour": one large photo with four smaller ones on large screens, a swipeable row on phones.
export default function TourGallery() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Inside Dhruva
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">Take a Tour of Dhruva</h2>
          <p className="mt-4 max-w-lg text-neutral-500">
            See the building, reception, operation theatre, paediatric ward and consultation rooms before your visit.
          </p>
        </div>
        <Link href="/facilities" className="btn-primary flex-none">
          See all photos
        </Link>
      </div>

      <ul className="-mx-6 mt-10 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:grid-rows-2 [&::-webkit-scrollbar]:hidden">
        {photos.map((photo, index) => (
          <li
            key={photo.src}
            className={`w-[80%] flex-none snap-start sm:w-auto ${index === 0 ? 'sm:col-span-2 lg:row-span-2' : ''}`}
          >
            <figure className="group relative h-full overflow-hidden rounded-3xl">
              <CoverImage
                src={photo.src}
                alt={photo.alt}
                sizes={index === 0 ? '(min-width: 1024px) 50vw, (min-width: 640px) 100vw, 80vw' : '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 80vw'}
                className={`aspect-[4/3] h-full w-full ${index === 0 ? 'lg:aspect-auto' : ''}`}
                imageClassName="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <figcaption aria-hidden="true" className="absolute bottom-3 left-3 rounded-xl bg-white/90 px-3.5 py-1.5 text-sm font-medium text-navy-800 shadow-sm backdrop-blur">
                {photo.alt}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
