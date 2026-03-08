export default function Echinacea({ size = 48, className = '' }) {
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
      <path d="M24 44c0-8 0-18 0-28" />
      {/* Prominent spiky cone center */}
      <ellipse cx="24" cy="12" rx="4" ry="5" />
      {/* Cross-hatch on cone */}
      <path d="M22 9c1 2 1 4.5 0 6.5" opacity="0.3" />
      <path d="M24 8c0 2 0 5 0 7.5" opacity="0.3" />
      <path d="M26 9c-1 2-1 4.5 0 6.5" opacity="0.3" />
      <path d="M21 11h6" opacity="0.3" />
      <path d="M20.5 13h7" opacity="0.3" />
      {/* Drooping petals — characteristic echinacea droop */}
      <path d="M20 14c-3 2-6 5-8 8" />
      <path d="M20.5 16c-2 2-3 5-3 8" />
      <path d="M28 14c3 2 6 5 8 8" />
      <path d="M27.5 16c2 2 3 5 3 8" />
      {/* Side petals drooping */}
      <path d="M20 12c-4 0-7 1-9 3" />
      <path d="M28 12c4 0 7 1 9 3" />
      {/* Rough, lance-shaped leaves */}
      <path d="M24 34c-3-.5-7-2-8-5 2-1.5 5-1.5 7 .5" />
      <path d="M23 34c-1-1-2-2.5-1.5-3.5" opacity="0.3" />
      <path d="M24 34c3-.5 7-2 8-5-2-1.5-5-1.5-7 .5" />
      <path d="M25 34c1-1 2-2.5 1.5-3.5" opacity="0.3" />
      {/* Lower leaf */}
      <path d="M24 40c-2.5 0-6-1-7-3.5 2-1 5-.5 6.5 1.5" />
      <path d="M24 40c2.5 0 6-1 7-3.5-2-1-5-.5-6.5 1.5" />
    </svg>
  )
}
