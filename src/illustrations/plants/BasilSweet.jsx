export default function BasilSweet({ size = 48, className = '' }) {
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
      {/* Main stem */}
      <path d="M24 44c0-6 0-14 0-24" />
      {/* Large cupped opposite leaves */}
      {/* Bottom pair */}
      <path d="M24 36c-3 0-8-1-10-4 1-3 5-4 8-3" />
      <path d="M24 36c3 0 8-1 10-4-1-3-5-4-8-3" />
      {/* Leaf veins */}
      <path d="M24 36c-2-.5-5-1.5-7-3" opacity="0.4" />
      <path d="M24 36c2-.5 5-1.5 7-3" opacity="0.4" />
      {/* Middle pair */}
      <path d="M24 30c-2.5 0-7-.5-9-3.5 1-3 4.5-3.5 7.5-2.5" />
      <path d="M24 30c2.5 0 7-.5 9-3.5-1-3-4.5-3.5-7.5-2.5" />
      <path d="M24 30c-2-.5-4.5-1.5-6-3" opacity="0.4" />
      <path d="M24 30c2-.5 4.5-1.5 6-3" opacity="0.4" />
      {/* Top pair — smaller */}
      <path d="M24 24c-2 0-5.5-.5-7-3 .8-2.5 3.5-3 6-2" />
      <path d="M24 24c2 0 5.5-.5 7-3-.8-2.5-3.5-3-6-2" />
      {/* Crown leaves */}
      <path d="M24 20c-1.5.5-4 0-5-2 1-2 3-2.5 4.5-1.5" />
      <path d="M24 20c1.5.5 4 0 5-2-1-2-3-2.5-4.5-1.5" />
      {/* Tip */}
      <path d="M23 16c0-2 .5-3 1-4" />
    </svg>
  )
}
