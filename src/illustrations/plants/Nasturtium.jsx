export default function Nasturtium({ size = 48, className = '' }) {
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
      {/* Trailing vine stems */}
      <path d="M10 44c2-4 6-10 12-14" />
      <path d="M22 30c4-2 8-6 14-10" />
      <path d="M16 42c4-4 6-8 8-14" />
      {/* Round lily-pad leaves — peltate (stem attaches to center) */}
      <circle cx="14" cy="34" r="5" />
      <path d="M14 29c0 2 0 4 0 5" opacity="0.3" />
      <path d="M10 34c2 0 4 0 4 0" opacity="0.3" />
      <path d="M14 34c2-1.5 3-3 4-4.5" opacity="0.3" />
      <path d="M14 34c-1.5-2-2.5-3-3.5-4" opacity="0.3" />
      <circle cx="30" cy="26" r="4.5" />
      <path d="M30 22c0 1.5 0 3 0 4" opacity="0.3" />
      <path d="M26 26c1.5 0 3 0 4 0" opacity="0.3" />
      <path d="M30 26c2-1.5 2.5-3 3-4" opacity="0.3" />
      <path d="M30 26c-1.5-1.5-2.5-3-3-4" opacity="0.3" />
      {/* Trumpet flower — funnel shape with spur */}
      <path d="M22 22c-2-1-3-3-2-5 1.5-.5 3 .5 4 2" />
      <path d="M22 22c0-2 1-4.5 3-5 1 1 1.5 3 .5 5" />
      <path d="M22 22c2-1 4-1 5.5 0-1 1.5-3 2-4.5 1.5" />
      {/* Spur at back */}
      <path d="M22 19c-1-1.5-2.5-2-4-1.5" />
      {/* Second flower bud */}
      <path d="M36 18c1-1.5 1-3.5 0-4.5-1.5 0-2.5 1.5-2 3" />
      <path d="M36 18c-1-1 -2.5-1-3 0 .5 1 1.5 1.5 2.5 1" />
    </svg>
  )
}
