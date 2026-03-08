export default function Lavender({ size = 48, className = '' }) {
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
      {/* Three stalks from base */}
      <path d="M18 44c0-8-2-18-4-28" />
      <path d="M24 44c0-8 0-20 0-30" />
      <path d="M30 44c0-8 2-18 4-28" />
      {/* Flower spikes — stacked buds */}
      {/* Left spike */}
      <ellipse cx="14" cy="14" rx="2" ry="1.5" />
      <ellipse cx="14" cy="11" rx="1.8" ry="1.3" />
      <ellipse cx="14" cy="8.5" rx="1.5" ry="1.2" />
      <ellipse cx="14" cy="6.5" rx="1" ry="1" />
      {/* Center spike */}
      <ellipse cx="24" cy="12" rx="2.2" ry="1.5" />
      <ellipse cx="24" cy="9" rx="2" ry="1.3" />
      <ellipse cx="24" cy="6.5" rx="1.5" ry="1.2" />
      <ellipse cx="24" cy="4.5" rx="1" ry="1" />
      {/* Right spike */}
      <ellipse cx="34" cy="14" rx="2" ry="1.5" />
      <ellipse cx="34" cy="11" rx="1.8" ry="1.3" />
      <ellipse cx="34" cy="8.5" rx="1.5" ry="1.2" />
      <ellipse cx="34" cy="6.5" rx="1" ry="1" />
      {/* Narrow leaves along stems */}
      <path d="M17 32c-2 .5-4 0-4.5-1.5 1.5-.5 3.5 0 4.5 1.5" />
      <path d="M19 32c2 .5 3.5-.5 3.5-2-1.5 0-3 .5-3.5 2" />
      <path d="M23 30c-2 .5-3.5 0-4-1.5 1.5-.5 3 0 4 1.5" />
      <path d="M25 30c2 .5 3.5 0 4-1.5-1.5-.5-3 0-4 1.5" />
      <path d="M31 32c-2-.5-3.5.5-3.5 2 1.5 0 3-.5 3.5-2" />
      <path d="M29 34c2 .5 4 0 4.5-1.5-1.5-.5-3.5 0-4.5 1.5" />
    </svg>
  )
}
