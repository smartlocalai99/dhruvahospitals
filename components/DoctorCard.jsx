import PlaceholderImage from './PlaceholderImage';

export default function DoctorCard({ doctor }) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <PlaceholderImage
        icon="people"
        file={doctor.image}
        className="aspect-[4/5] w-full"
      />

      <div className="absolute inset-x-3 bottom-3 flex h-[124px] flex-col justify-center overflow-hidden rounded-2xl bg-navy-700 px-5 py-4 text-white shadow-md">
        <p className="text-base font-semibold text-white sm:text-lg">
          {doctor.name}
        </p>

        <p className="mt-1 text-sm leading-snug text-white/85">
          {doctor.role}
        </p>
      </div>
    </div>
  );
}