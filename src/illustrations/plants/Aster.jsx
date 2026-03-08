export default function Aster({ size = 48, className = '' }) {
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
      <path d="M24 44c0-8 -1-16-4-24" />
      <path d="M24 44c1-6 4-14 8-20" />
      {/* Main flower — daisy-like with many petals */}
      <circle cx="20" cy="16" r="3" />
      <path d="M20 9c0 1.5.5 3 0 4" />
      <path d="M15 11c1 1 2 2.5 2 3.5" />
      <path d="M14 16c1.5 0 3 .5 3.5 0" />
      <path d="M15 21c1-1 2-2.5 2-3.5" />
      <path d="M20 23c0-1.5-.5-3 0-4" />
      <path d="M25 21c-1-1-2-2.5-2-3.5" />
      <path d="M26 16c-1.5 0-3-.5-3.5 0" />
      <path d="M25 11c-1 1-2 2.5-2 3.5" />
      {/* Second flower — bud */}
      <circle cx="32" cy="22" r="2.5" />
      <path d="M32 17c0 1 0 2 0 2.5" />
      <path d="M28.5 19c.5.5 1.5 1.5 1.5 2" />
      <path d="M35.5 19c-.5.5-1.5 1.5-1.5 2" />
      <path d="M28.5 25c.5-.5 1.5-1.5 1.5-2" />
      <path d="M35.5 25c-.5-.5-1.5-1.5-1.5-2" />
      <path d="M32 27c0-1 0-2 0-2.5" />
      {/* Leaves along stems */}
      <path d="M22 32c-2.5-.5-5 0-6 2 1.5.5 4 0 5.5-1.5" />
      <path d="M28 34c2-.5 4.5 0 5 2-1.5.5-4 0-5.5-1" />
    </svg>
  )
}
