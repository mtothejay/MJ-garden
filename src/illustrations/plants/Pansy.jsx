export default function Pansy({ size = 48, className = '' }) {
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
      {/* Stems */}
      <path d="M20 44c0-6-2-14-4-20" />
      <path d="M24 44c0-6 1-14 4-20" />
      {/* Main pansy face — five rounded petals */}
      {/* Top two petals */}
      <path d="M10 18c-2-4-1-8 2-10 3 1 5 4 4 8" />
      <path d="M16 16c1-4 4-7 7-7 2 2 2 6 0 9" />
      {/* Side petals */}
      <path d="M10 18c-3 2-4 5-3 8 3 0 6-2 7-5" />
      <path d="M16 24c2 2 5 3 8 2 0-3-2-6-5-6" />
      {/* Bottom petal — larger */}
      <path d="M7 26c-1 3 0 6 3 7 2-1 3-4 3-6" />
      <path d="M13 27c0 3 1 6 3 7 2-2 2-5 1-7" />
      {/* Face lines radiating from center */}
      <path d="M13 20c-.5 1-1 2-.5 3" opacity="0.4" />
      <path d="M15 20c0 1 .5 2 .5 3" opacity="0.4" />
      <circle cx="14" cy="20" r="1" />
      {/* Second flower — smaller, turned */}
      <path d="M28 20c1-3 3-5 5.5-5 1.5 2 1 5-.5 7" />
      <path d="M33 22c2 1 4 3 3.5 5.5-2.5 0-5-1.5-5.5-4" />
      <path d="M28 20c-1 2.5 0 5.5 2 7 1.5-1.5 2-4 1-6" />
      <circle cx="30" cy="22" r="0.8" />
      {/* Heart-shaped leaves */}
      <path d="M18 36c-2-1-5-.5-6 1.5 1 1.5 3.5 2 5.5 1" />
      <path d="M26 36c2-1 4.5 0 5.5 2-1.5 1-4 1-5.5-.5" />
    </svg>
  )
}
