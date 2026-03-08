export default function Chives({ size = 48, className = '' }) {
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
      {/* Long grass-like leaves from base */}
      <path d="M20 44c0-10 -2-20 -3-30" />
      <path d="M22 44c0-10 0-22 1-32" />
      <path d="M24 44c1-10 3-20 2-30" />
      <path d="M26 44c1-8 4-18 6-26" />
      <path d="M28 44c0-8 2-16 4-24" />
      {/* Pom-pom flower heads */}
      <circle cx="17" cy="12" r="3.5" />
      <path d="M15 9.5c.5-1 1.5-1.5 2-1.5s1.5.5 2 1.5" />
      <path d="M14 11c-.5.5-.5 1.5 0 2.5" />
      <path d="M20 11c.5.5.5 1.5 0 2.5" />
      <circle cx="23" cy="10" r="3" />
      <path d="M21.5 7.5c.4-1 1-1.2 1.5-1.2s1.1.2 1.5 1.2" />
      <circle cx="32" cy="16" r="3" />
      <path d="M30 14c.5-.8 1.2-1 2-1s1.5.2 2 1" />
    </svg>
  )
}
