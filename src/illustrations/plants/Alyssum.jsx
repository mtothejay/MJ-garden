export default function Alyssum({ size = 48, className = '' }) {
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
      {/* Low spreading stems */}
      <path d="M24 40c-4-2-8-4-12-4" />
      <path d="M24 40c0-4-1-8-1-12" />
      <path d="M24 40c4-2 8-4 12-4" />
      <path d="M24 40c2-3 4-8 6-12" />
      <path d="M24 40c-2-3-5-8-7-12" />
      {/* Clusters of tiny 4-petal flowers */}
      {/* Left cluster */}
      <circle cx="11" cy="34" r="1.5" />
      <circle cx="13" cy="33" r="1.5" />
      <circle cx="10" cy="36" r="1.2" />
      <circle cx="14" cy="35.5" r="1.2" />
      <circle cx="12" cy="37" r="1" />
      {/* Center cluster */}
      <circle cx="22" cy="26" r="1.5" />
      <circle cx="24" cy="25" r="1.5" />
      <circle cx="26" cy="26" r="1.5" />
      <circle cx="23" cy="28" r="1.2" />
      <circle cx="25" cy="28" r="1.2" />
      <circle cx="21" cy="27.5" r="1" />
      <circle cx="27" cy="27.5" r="1" />
      {/* Right cluster */}
      <circle cx="35" cy="34" r="1.5" />
      <circle cx="37" cy="35" r="1.5" />
      <circle cx="34" cy="36" r="1.2" />
      <circle cx="38" cy="36.5" r="1" />
      <circle cx="36" cy="37" r="1.2" />
      {/* Upper side clusters */}
      <circle cx="17" cy="27" r="1.2" />
      <circle cx="19" cy="26" r="1.2" />
      <circle cx="16" cy="28.5" r="1" />
      <circle cx="30" cy="27" r="1.2" />
      <circle cx="32" cy="28" r="1.2" />
      <circle cx="29" cy="28.5" r="1" />
      {/* Small narrow leaves */}
      <path d="M14 38c-1 .3-2 0-2.5-.5" opacity="0.5" />
      <path d="M34 38c1 .3 2 0 2.5-.5" opacity="0.5" />
      <path d="M20 30c-1 .3-2 0-2-.5" opacity="0.5" />
      <path d="M28 30c1 .3 2 0 2-.5" opacity="0.5" />
    </svg>
  )
}
