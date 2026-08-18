export default function Logo({ className = 'h-10 w-10', withRing = false }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Dhruva Hospitals"
    >
      {withRing && <circle cx="24" cy="24" r="24" fill="white" />}
      <path
        d="M27 6H35V16H45V24H35V34H27V24H17V16H27V6Z"
        fill="#C82F2F"
      />
      <path
        d="M10 30C10 24 15 20 20 22C22 15 30 14 33 20C38 20 40 25 37 29C34 34 26 38 20 42C15 38 10 35 10 30Z"
        fill="#123E7D"
        opacity="0.92"
      />
    </svg>
  );
}
