import { CheckIcon } from './Icons';

export default function FacilityCard({ facility }) {
  return (
    <div className="rounded-3xl border border-navy-200 p-7">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-700 text-white">
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
          <path
            d="M10 2v16M2 10h16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <h3 className="mt-5 text-lg font-semibold text-neutral-950">{facility.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">{facility.description}</p>
      <ul className="mt-5 space-y-2.5">
        {facility.items.map((item) => (
          <li key={item} className="check-bullet">
            <span className="check-bullet-icon">
              <CheckIcon className="h-3 w-3" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
