export default function Marigold({ size = 48, className = '' }) {
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
      <path d="M20 44c-1-6-2-14-2-22" />
      <path d="M28 44c1-6 3-12 4-18" />
      {/* Main pom-pom flower — densely ruffled */}
      <circle cx="18" cy="16" r="6" />
      {/* Inner petal ruffles */}
      <path d="M15 13c1 .5 2 1.5 1.5 3" />
      <path d="M18 12c0 1-.5 2.5-1.5 3" />
      <path d="M21 13c-1 .5-2 1.5-1.5 3" />
      <path d="M14 16c1 0 2 .5 2.5 1.5" />
      <path d="M22 16c-1 0-2 .5-2.5 1.5" />
      <path d="M15 19c1-.5 2-1.5 1.5-2.5" />
      <path d="M18 20c0-1 .5-2 1.5-3" />
      <path d="M21 19c-1-.5-1.5-1.5-1.5-2.5" />
      {/* Second flower — smaller, side view */}
      <circle cx="32" cy="22" r="4.5" />
      <path d="M30 19c.5.5 1 1.5.5 2.5" />
      <path d="M32 18.5c0 1-.5 2-1 2.5" />
      <path d="M34 19c-.5.5-1 1.5-.5 2.5" />
      <path d="M29 22c.5 0 1.5.5 2 1" />
      <path d="M35 22c-.5 0-1.5.5-2 1" />
      {/* Pinnate leaves — finely divided */}
      <path d="M18 30c-3 0-5-.5-5.5-2" />
      <path d="M18 30c-1-2-.5-4 .5-5" />
      <path d="M15 28c-.5-.5-.5-1.5 0-2" />
      <path d="M16.5 28c-.5.5-1.5.5-2 0" />
      <path d="M30 30c2 0 4-.5 5-2" />
      <path d="M30 30c1-1.5 1-3.5 0-5" />
      <path d="M33 28c.5-.5.5-1.5 0-2" />
      <path d="M31.5 28c.5.5 1.5.5 2 0" />
    </svg>
  )
}
