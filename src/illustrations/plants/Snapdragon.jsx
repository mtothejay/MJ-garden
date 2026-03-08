export default function Snapdragon({ size = 48, className = '' }) {
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
      {/* Main spike stem */}
      <path d="M24 44c0-8 0-20 0-34" />
      {/* Snapdragon flowers — two-lipped, stacked up the spike */}
      {/* Bottom flower — open, largest */}
      <path d="M19 32c-2 0-3.5-1.5-3-3.5 1.5-.5 3 .5 3.5 2" />
      <path d="M29 32c2 0 3.5-1.5 3-3.5-1.5-.5-3 .5-3.5 2" />
      <path d="M19 32c-1.5 1.5-1.5 3 0 4 2 0 3.5-.5 5-2" />
      <path d="M29 32c1.5 1.5 1.5 3 0 4-2 0-3.5-.5-5-2" />
      {/* Middle flower */}
      <path d="M20 26c-1.5 0-3-1-2.5-3 1.5-.5 2.5.5 3 1.5" />
      <path d="M28 26c1.5 0 3-1 2.5-3-1.5-.5-2.5.5-3 1.5" />
      <path d="M20 26c-1 1-1 2.5 0 3 1.5 0 3-.5 4-1.5" />
      <path d="M28 26c1 1 1 2.5 0 3-1.5 0-3-.5-4-1.5" />
      {/* Upper flower — smaller */}
      <path d="M21 20c-1.5 0-2.5-1-2-2.5 1 0 2 .5 2.5 1.5" />
      <path d="M27 20c1.5 0 2.5-1 2-2.5-1 0-2 .5-2.5 1.5" />
      <path d="M21 20c-1 1-1 2 .5 2.5 1 0 2-1 2.5-1.5" />
      <path d="M27 20c1 1 1 2-.5 2.5-1 0-2-1-2.5-1.5" />
      {/* Top buds */}
      <ellipse cx="23" cy="15" rx="2" ry="1.5" />
      <ellipse cx="25" cy="15" rx="2" ry="1.5" />
      <ellipse cx="24" cy="12" rx="1.5" ry="1.2" />
      <ellipse cx="24" cy="9.5" rx="1" ry="1" />
      {/* Lance-shaped leaves */}
      <path d="M24 38c-3 0-6-.5-7-2.5 1.5-.5 4.5 0 6 1.5" />
      <path d="M24 38c3 0 6-.5 7-2.5-1.5-.5-4.5 0-6 1.5" />
    </svg>
  )
}
