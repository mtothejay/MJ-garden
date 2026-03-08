export default function Parsley({ size = 48, className = '' }) {
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
      {/* Stems radiating from base */}
      <path d="M24 44c-2-8-6-16-10-22" />
      <path d="M24 44c0-8-1-16-2-24" />
      <path d="M24 44c0-8 1-18 0-26" />
      <path d="M24 44c2-8 5-16 8-22" />
      {/* Tri-lobed leaves — flat Italian parsley style */}
      {/* Left leaf */}
      <path d="M14 22c-3-2-4-5-3-7 2-.5 4 .5 5 3" />
      <path d="M14 22c-1-3 0-6 2-7 1.5 1 2 3.5 1 5.5" />
      <path d="M14 22c1-3 3-5 5.5-5-.5 2-1.5 4-4 5" />
      {/* Center-left leaf */}
      <path d="M22 20c-3-1-5-4-4-6.5 2 0 4 1 4.5 3.5" />
      <path d="M22 20c-1-3 .5-6 2.5-6.5 1 1.5 1 4-.5 5.5" />
      <path d="M22 20c1-2.5 3.5-4 5.5-3.5-1 2-2.5 3.5-4.5 4" />
      {/* Center-right leaf */}
      <path d="M24 18c-2-2-2-5-.5-7 2 .5 3 3 2.5 5" />
      <path d="M24 18c0-3 2-5 4-5.5.5 2-.5 4-2 5.5" />
      <path d="M24 18c2-2 4.5-3 6-1.5-1 2-3 3-5 3" />
      {/* Right leaf */}
      <path d="M32 22c1-3 3-5 5-5-1 2-1.5 4-3.5 5.5" />
      <path d="M32 22c0-3-1-5.5-3-6.5.5 2 .5 4.5 1.5 6" />
      <path d="M32 22c-2-2-2-5-.5-6 1.5 1 2 3 2 5" />
    </svg>
  )
}
