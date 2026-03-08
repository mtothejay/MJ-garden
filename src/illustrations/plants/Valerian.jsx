export default function Valerian({ size = 48, className = '' }) {
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
      {/* Tall main stem */}
      <path d="M24 44c0-8 0-22 0-34" />
      {/* Side stems for flower heads */}
      <path d="M24 14c-3-2-6-3-9-3" />
      <path d="M24 14c3-2 6-3 9-3" />
      {/* Flat-topped flower clusters — tiny dots in umbels */}
      {/* Center cluster */}
      <circle cx="22" cy="8" r="1" />
      <circle cx="24" cy="7" r="1" />
      <circle cx="26" cy="8" r="1" />
      <circle cx="23" cy="10" r="1" />
      <circle cx="25" cy="10" r="1" />
      <circle cx="21" cy="9.5" r="0.8" />
      <circle cx="27" cy="9.5" r="0.8" />
      {/* Left cluster */}
      <circle cx="14" cy="10" r="1" />
      <circle cx="16" cy="9" r="1" />
      <circle cx="13" cy="11.5" r="0.8" />
      <circle cx="15.5" cy="11" r="0.8" />
      <circle cx="17" cy="10.5" r="0.8" />
      {/* Right cluster */}
      <circle cx="33" cy="10" r="1" />
      <circle cx="31" cy="9.5" r="1" />
      <circle cx="34" cy="11.5" r="0.8" />
      <circle cx="32" cy="11.5" r="0.8" />
      <circle cx="30" cy="11" r="0.8" />
      {/* Compound pinnate leaves */}
      <path d="M24 34c-3 0-5-1-6-3 1.5-.5 4 0 5 2" />
      <path d="M24 34c3 0 5-1 6-3-1.5-.5-4 0-5 2" />
      <path d="M18 31c-2 .5-3.5-.5-3.5-2 1.5 0 3 .5 3.5 2z" />
      <path d="M30 31c2 .5 3.5-.5 3.5-2-1.5 0-3 .5-3.5 2z" />
      <path d="M24 28c-2.5.5-4.5-.5-5-2.5 1.5-.5 3.5 0 5 1" />
      <path d="M24 28c2.5.5 4.5-.5 5-2.5-1.5-.5-3.5 0-5 1" />
    </svg>
  )
}
