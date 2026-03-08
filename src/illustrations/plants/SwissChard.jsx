export default function SwissChard({ size = 48, className = '' }) {
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
      {/* Thick coloured stems from base */}
      <path d="M16 44c0-6-1-14-2-22" strokeWidth="2" />
      <path d="M24 44c0-6 0-16 0-24" strokeWidth="2" />
      <path d="M32 44c0-6 1-14 2-22" strokeWidth="2" />
      {/* Large crinkled leaves */}
      {/* Left leaf */}
      <path d="M14 22c-3 0-6-2-7-5 0-3 2-5 4-6 2 0 4 1 5 3" />
      <path d="M14 22c-1-2 0-5 0-8" opacity="0.3" />
      <path d="M11 16c1 0 2 .5 3 1.5" opacity="0.3" />
      {/* Center leaf */}
      <path d="M24 20c-3 .5-6-1-7-4 0-3 2-5 4-6 2-.5 4 .5 5 3" />
      <path d="M24 20c3 .5 6-1 7-4 0-3-2-5-4-6-2-.5-4 .5-5 3" />
      <path d="M24 20c0-3 0-6 0-10" opacity="0.3" />
      <path d="M20 14c1.5 0 3 .5 4 2" opacity="0.3" />
      <path d="M28 14c-1.5 0-3 .5-4 2" opacity="0.3" />
      {/* Right leaf */}
      <path d="M34 22c3 0 6-2 7-5 0-3-2-5-4-6-2 0-4 1-5 3" />
      <path d="M34 22c1-2 0-5 0-8" opacity="0.3" />
      <path d="M37 16c-1 0-2 .5-3 1.5" opacity="0.3" />
      {/* Leaf margin crinkle suggestion */}
      <path d="M9 14c-.5.5 0 1 .5 1" opacity="0.4" />
      <path d="M39 14c.5.5 0 1-.5 1" opacity="0.4" />
    </svg>
  )
}
