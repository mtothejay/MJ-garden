export default function BasilThai({ size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Main stem — slightly purple/darker */}
      <path d="M24 44c0-6 0-14 0-24" />
      {/* Narrower, more pointed leaves than sweet basil */}
      {/* Bottom pair */}
      <path d="M24 38c-3 0-7-1.5-8.5-4.5 1-2 4.5-2.5 7-1" />
      <path d="M24 38c3 0 7-1.5 8.5-4.5-1-2-4.5-2.5-7-1" />
      {/* Middle pair */}
      <path d="M24 32c-2.5 0-6-1-7.5-4 1-2 4-2.5 6-.5" />
      <path d="M24 32c2.5 0 6-1 7.5-4-1-2-4-2.5-6-.5" />
      {/* Upper pair */}
      <path d="M24 26c-2 0-5-1-6-3.5.5-1.5 3-2 5 0" />
      <path d="M24 26c2 0 5-1 6-3.5-.5-1.5-3-2-5 0" />
      {/* Leaf veins */}
      <path d="M24 38c-2-.5-4.5-2-6-3.5" opacity="0.3" />
      <path d="M24 38c2-.5 4.5-2 6-3.5" opacity="0.3" />
      {/* Flower spike — purple, layered */}
      <path d="M22 20c-1.5.5-2.5-.5-2.5-2 1 0 2 .5 2.5 1.5" />
      <path d="M26 20c1.5.5 2.5-.5 2.5-2-1 0-2 .5-2.5 1.5" />
      <path d="M22.5 17c-1.5.5-2-.5-2-1.5 1 0 1.5.5 2 1" />
      <path d="M25.5 17c1.5.5 2-.5 2-1.5-1 0-1.5.5-2 1" />
      <path d="M23 14.5c-1 0-1.5-.5-1.5-1.5.5 0 1 .5 1.5 1" />
      <path d="M25 14.5c1 0 1.5-.5 1.5-1.5-.5 0-1 .5-1.5 1" />
      <ellipse cx="24" cy="12" rx="1" ry="1.5" />
    </svg>
  )
}
