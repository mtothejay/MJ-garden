export default function Lettuce({ size = 48, className = '' }) {
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
      {/* Rosette from base — no visible stem */}
      {/* Outer ruffled leaves */}
      <path d="M24 40c-5 0-11-2-13-7 0-4 3-7 7-8" />
      <path d="M24 40c5 0 11-2 13-7 0-4-3-7-7-8" />
      {/* Ruffle on outer leaves */}
      <path d="M13 33c-.5 1 0 2 1 2.5" opacity="0.4" />
      <path d="M15 30c-1 .5-1 1.5-.5 2" opacity="0.4" />
      <path d="M35 33c.5 1 0 2-1 2.5" opacity="0.4" />
      <path d="M33 30c1 .5 1 1.5.5 2" opacity="0.4" />
      {/* Middle leaves */}
      <path d="M24 36c-4 0-8-2-9-5.5 1-3 4.5-4.5 7.5-3.5" />
      <path d="M24 36c4 0 8-2 9-5.5-1-3-4.5-4.5-7.5-3.5" />
      {/* Inner cupping leaves */}
      <path d="M24 32c-3 0-6-1.5-7-4 1-2 4-3 6-1.5" />
      <path d="M24 32c3 0 6-1.5 7-4-1-2-4-3-6-1.5" />
      {/* Heart/center */}
      <path d="M24 28c-2 0-4-1-4.5-3 1-1.5 3-2 4.5-.5" />
      <path d="M24 28c2 0 4-1 4.5-3-1-1.5-3-2-4.5-.5" />
      {/* Tiny center curl */}
      <path d="M23 24c-.5-.5 0-2 1-2.5.5 1 0 2-.5 2.5" />
      <path d="M25 24c.5-.5 0-2-1-2.5-.5 1 0 2 .5 2.5" />
    </svg>
  )
}
