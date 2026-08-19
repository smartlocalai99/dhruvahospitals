import PlaceholderImage from './PlaceholderImage';

export default function DoctorCard({ doctor }) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <PlaceholderImage
        icon="people"
        file={doctor.image}
        className="aspect-[4/5] w-full"
      />

      <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/95 px-4 py-3 shadow-sm">
        <p className="text-sm font-semibold text-neutral-950">
          {doctor.name}
        </p>

        <p className="mt-0.5 text-xs leading-snug text-neutral-500">
          {doctor.role}
        </p>
      </div>
    </div>
  );
}