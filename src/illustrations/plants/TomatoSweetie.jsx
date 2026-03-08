export default function TomatoSweetie({ size = 48, className = '' }) {
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
      {/* Main vine stem */}
      <path d="M12 44c2-6 6-14 12-20" />
      <path d="M24 24c4-4 8-8 10-14" />
      {/* Compound leaf left */}
      <path d="M18 34c-3 0-6-1-7-3.5 1.5-1.5 4-2 6-.5" />
      <path d="M14 30c-2-.5-3-2-2.5-4 1.5 0 3 1 3.5 3" />
      {/* Compound leaf right */}
      <path d="M28 20c3-.5 6 0 7 2.5-1.5 1-4 1-6-.5" />
      <path d="M32 18c2-1 4-.5 5 1-1.5 1-3.5 1-5 0" />
      {/* Small cherry tomato cluster */}
      <circle cx="16" cy="26" r="4" />
      <circle cx="22" cy="28" r="3.5" />
      <circle cx="12" cy="29" r="3" />
      {/* Tomato star calyxes */}
      <path d="M15 22c-.5-.5 0-1.5.5-2 .5.5 1 1.5.5 2" />
      <path d="M17 22c.5-.5 1-1.5.5-2" />
      <path d="M21 24.5c0-1 .5-1.5 1-1.5" />
      <path d="M23 24.5c.5-.5 1-1 1-1.5" />
      {/* Small leaf near top */}
      <path d="M30 14c2-1 4-1 4.5 1-1.5.5-3.5.5-4.5-1z" />
      <path d="M32 12c1-1.5 2.5-2 3.5-1-.5 1.5-2 2.5-3.5 2" />
    </svg>
  )
}
