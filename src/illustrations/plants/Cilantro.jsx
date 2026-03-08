export default function Cilantro({ size = 48, className = '' }) {
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
      {/* Stems from base */}
      <path d="M24 44c-1-8-4-16-7-24" />
      <path d="M24 44c0-8 0-18 0-26" />
      <path d="M24 44c1-8 4-16 8-22" />
      {/* Delicate fan-shaped lower leaves */}
      <path d="M17 20c-2 0-4-1-5-3 1-1.5 3-2 5-1" />
      <path d="M17 20c-1-2-1-4 1-5.5 1.5 1 2 3 1 5" />
      <path d="M17 20c1-2 3-3 5-2.5-.5 1.5-2 3-4 3" />
      {/* Center compound leaf */}
      <path d="M24 18c-2-.5-3-2.5-2.5-4.5 1.5 0 3 1 3 3" />
      <path d="M24 18c0-2.5 1-4.5 3-5 .5 2-.5 4-2 5" />
      <path d="M24 18c2-.5 4-1 5 .5-1 1.5-3 1.5-4.5 1" />
      <path d="M24 18c-2 .5-4 .5-5-.5 1-1.5 3-1.5 4.5-1" />
      {/* Right leaf cluster */}
      <path d="M32 22c2-1 4-1 5 .5-1.5 1-3.5 1-5-.5z" />
      <path d="M32 22c1-2 2-3.5 4-3.5-.5 2-1.5 3.5-3 4" />
      <path d="M32 22c-.5-2 0-4 1.5-5 1 1.5.5 3.5-.5 5" />
      {/* Tiny umbrella flowers at top */}
      <path d="M24 10c-2-2-1.5-4 0-5" />
      <path d="M24 10c0-3 1-4.5 2-5" />
      <path d="M24 10c2-2 3-3 4.5-3" />
      <path d="M24 10c-2.5-1-3.5-2.5-4-4" />
      <circle cx="24" cy="5" r="0.8" />
      <circle cx="26" cy="5" r="0.8" />
      <circle cx="28.5" cy="7" r="0.8" />
      <circle cx="20" cy="6" r="0.8" />
    </svg>
  )
}
