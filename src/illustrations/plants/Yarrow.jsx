export default function Yarrow({ size = 48, className = '' }) {
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
      <path d="M24 44c0-8 0-18 0-32" />
      {/* Flat-topped flower cluster — corymb */}
      <path d="M24 12c-3 0-6-1-8-2" />
      <path d="M24 12c-1-2-2-4-2-6" />
      <path d="M24 12c1-2 1.5-4 1-6" />
      <path d="M24 12c3 0 6-1 8-2" />
      {/* Tiny flower dots across the flat top */}
      <circle cx="16" cy="9.5" r="1.2" />
      <circle cx="19" cy="8" r="1.2" />
      <circle cx="22" cy="6.5" r="1.2" />
      <circle cx="25" cy="6" r="1.2" />
      <circle cx="28" cy="7" r="1.2" />
      <circle cx="31" cy="9" r="1.2" />
      <circle cx="20.5" cy="10" r="1" />
      <circle cx="24" cy="9" r="1" />
      <circle cx="27" cy="9.5" r="1" />
      <circle cx="17.5" cy="11.5" r="0.8" />
      <circle cx="30" cy="11" r="0.8" />
      {/* Feathery, fern-like leaves — finely divided */}
      {/* Left leaf */}
      <path d="M24 32c-4 0-7-1-8-3" />
      <path d="M19 30c-1-.5-1-1.5-.5-2.5" />
      <path d="M20.5 30c-1 .5-2.5.5-3 0" />
      <path d="M17 29.5c-1-.5-1.5-1.5-1-2.5" />
      <path d="M18 29c-.5.5-2 1-3 .5" />
      {/* Right leaf */}
      <path d="M24 36c4 0 7-1 8-3" />
      <path d="M29 34c1-.5 1-1.5.5-2.5" />
      <path d="M27.5 34.5c1 .5 2.5.5 3 0" />
      <path d="M31 33.5c1-.5 1.5-1.5 1-2.5" />
      <path d="M30 34c.5.5 2 1 3 .5" />
    </svg>
  )
}
