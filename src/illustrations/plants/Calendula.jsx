export default function Calendula({ size = 48, className = '' }) {
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
      <path d="M28 44c1-6 3-14 4-20" />
      {/* Main flower — many layered petals */}
      <circle cx="18" cy="16" r="3.5" />
      {/* Petals — rounded, slightly spoon-shaped */}
      <path d="M18 8c0 2-.5 4 0 5" />
      <path d="M14 9c.5 1.5 1.5 3.5 1.5 4.5" />
      <path d="M11 12c1 1 2.5 2 3 3" />
      <path d="M10.5 16c1.5.5 3 .5 4 0" />
      <path d="M11 20c1-1 2.5-2 3-3" />
      <path d="M14 23c.5-1.5 1.5-3.5 1.5-4.5" />
      <path d="M18 24c0-2 .5-4 0-5" />
      <path d="M22 23c-.5-1.5-1.5-3.5-1.5-4.5" />
      <path d="M25 20c-1-1-2.5-2-3-3" />
      <path d="M25.5 16c-1.5-.5-3-.5-4 0" />
      <path d="M25 12c-1 1-2.5 2-3 3" />
      <path d="M22 9c-.5 1.5-1.5 3.5-1.5 4.5" />
      {/* Second flower — bud */}
      <circle cx="32" cy="20" r="2.5" />
      <path d="M32 15c0 1 0 2 0 2.5" />
      <path d="M28.5 17.5c.5.5 1.5 1 2 1.5" />
      <path d="M28 20.5c1 0 1.5 0 2 0" />
      <path d="M35.5 17.5c-.5.5-1.5 1-2 1.5" />
      <path d="M36 20.5c-1 0-1.5 0-2 0" />
      <path d="M32 25c0-1 0-2 0-2.5" />
      {/* Spoon-shaped leaves */}
      <path d="M18 30c-3 .5-6-.5-7-3 1.5-1 4-.5 5.5 1" />
      <path d="M30 32c2 .5 5-.5 6-3-1.5-1-4-.5-5.5 1" />
    </svg>
  )
}
