export default function Rosemary({ size = 48, className = '' }) {
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
      {/* Woody main stem */}
      <path d="M24 44c0-6-1-16-2-26" />
      {/* Upright branches */}
      <path d="M22 30c-2-4-4-10-5-16" />
      <path d="M23 26c2-4 5-10 7-16" />
      {/* Needle-like leaves — narrow, opposite pairs curling up */}
      {/* Main stem leaves */}
      <path d="M21 36c-2 .3-4-.2-4.5-1.5" />
      <path d="M23 36c2 .3 3.5-.5 4-1.5" />
      <path d="M21.5 32c-2 .3-4-.2-4.5-1.5" />
      <path d="M22.5 32c2 .3 3.5-.5 4-1.5" />
      {/* Left branch leaves */}
      <path d="M19 26c-1.5.5-3 0-3.5-1" />
      <path d="M20 26c1.5-.5 2-.5 2.5-1.5" />
      <path d="M18 22c-1.5.5-3 0-3-1" />
      <path d="M19 22c1.5-.5 2.5-.5 2.5-1.5" />
      <path d="M17 18c-1.5.3-2.5 0-3-1" />
      <path d="M18.5 18c1-.5 2-.5 2.5-1.5" />
      {/* Right branch leaves */}
      <path d="M27 22c-1.5-.5-2.5-.5-2.5-1.5" />
      <path d="M28 22c2 .3 3 0 3.5-1" />
      <path d="M28.5 18c-1.5-.5-2-.5-2.5-1.5" />
      <path d="M29.5 18c1.5.3 2.5 0 3-1" />
      <path d="M29 14c-1-.5-2-.5-2-1.5" />
      <path d="M30.5 14c1.5.3 2 0 2.5-1" />
      {/* Small flower buds near tips */}
      <circle cx="17" cy="15" r="1.2" />
      <circle cx="15.5" cy="14" r="1" />
      <circle cx="30" cy="11" r="1.2" />
      <circle cx="31.5" cy="10" r="1" />
    </svg>
  )
}
