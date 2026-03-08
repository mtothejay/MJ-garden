export default function Spinach({ size = 48, className = '' }) {
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
      {/* Stems from central rosette */}
      <path d="M20 44c-1-6-3-14-5-22" />
      <path d="M24 44c0-6 0-16 0-24" />
      <path d="M28 44c1-6 3-14 5-22" />
      {/* Broad spade-shaped leaves with rounded tips */}
      {/* Left leaf */}
      <path d="M15 22c-4 0-7-2-8-5 0-3 2-6 5-7 2 0 5 1.5 5 4.5" />
      <path d="M15 22c-.5-3 0-6 .5-9" opacity="0.3" />
      {/* Center leaf */}
      <path d="M24 20c-3 .5-6-1-7-4.5 0-3.5 3-6 5.5-6.5 2 0 4 2 4 5" />
      <path d="M24 20c3 .5 6-1 7-4.5 0-3.5-3-6-5.5-6.5-2 0-4 2-4 5" />
      <path d="M24 20c0-3.5 0-7 0-11" opacity="0.3" />
      {/* Right leaf */}
      <path d="M33 22c4 0 7-2 8-5 0-3-2-6-5-7-2 0-5 1.5-5 4.5" />
      <path d="M33 22c.5-3 0-6-.5-9" opacity="0.3" />
      {/* Small inner leaves */}
      <path d="M22 28c-2 0-4-1-4.5-3 1-.5 3-.5 4 1" />
      <path d="M26 28c2 0 4-1 4.5-3-1-.5-3-.5-4 1" />
    </svg>
  )
}
