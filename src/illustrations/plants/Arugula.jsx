export default function Arugula({ size = 48, className = '' }) {
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
      {/* Stems from base rosette */}
      <path d="M22 44c-1-6-3-14-5-22" />
      <path d="M24 44c0-6 0-16 0-24" />
      <path d="M26 44c1-6 3-14 6-20" />
      {/* Lobed, oak-leaf shaped arugula leaves */}
      {/* Left leaf — deeply lobed */}
      <path d="M17 22c-3 1-5 0-6-2 1-1 2-2 3.5-1.5" />
      <path d="M14.5 18.5c-1-2 0-4 2-5 .5 1.5 0 3.5-1 4.5" />
      <path d="M16.5 14c0-2 1.5-3.5 3-3.5 0 1.5-1 3-2.5 4" />
      <path d="M17 22c0-2 1-4 2.5-5-.5 2-.5 4-1 5" />
      {/* Center leaf */}
      <path d="M24 20c-2.5.5-4.5-.5-5-3 1.5-1 3.5-1 5 .5" />
      <path d="M22 17.5c-1-2.5.5-5 2.5-5.5.5 2 0 4-1 5.5" />
      <path d="M24.5 12c.5-2 2-3.5 3.5-3 0 2-1 3.5-2.5 4.5" />
      <path d="M24 20c2.5.5 4.5-.5 5-3-1.5-1-3.5-1-5 .5" />
      {/* Right leaf */}
      <path d="M32 24c2 1 4.5.5 5.5-1.5-1.5-1-3.5-1-4.5.5" />
      <path d="M33 22c1.5-1.5 1.5-4 0-5.5-.5 2-1 4-1.5 5" />
      <path d="M32 24c0-2.5.5-5 2-6-.5 2-.5 4-.5 5.5" />
      {/* Central vein marks */}
      <path d="M17 22c0-3-1-6-1-9" opacity="0.3" />
      <path d="M24 20c0-3 .5-6 .5-9" opacity="0.3" />
      <path d="M32 24c.5-3 1-6 1.5-8" opacity="0.3" />
    </svg>
  )
}
