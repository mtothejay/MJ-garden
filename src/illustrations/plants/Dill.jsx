export default function Dill({ size = 48, className = '' }) {
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
      <path d="M24 44c0-8 0-20 0-34" />
      {/* Feathery side fronds — alternating */}
      {/* Left fronds */}
      <path d="M24 36c-3-1-6-1-8 0" />
      <path d="M24 36c-2-2-3-4-3-6" />
      <path d="M24 32c-3-.5-6 0-8 1" />
      <path d="M24 32c-2-2-2.5-4.5-2-7" />
      <path d="M24 28c-2.5-.5-5 0-7 1.5" />
      <path d="M24 24c-2 0-4 .5-5.5 2" />
      {/* Right fronds */}
      <path d="M24 34c3-1 6-1 8 0" />
      <path d="M24 34c2-2 3-4.5 2.5-6.5" />
      <path d="M24 30c3-.5 6 0 8 1" />
      <path d="M24 30c2-2 2.5-5 2-7" />
      <path d="M24 26c2.5-.5 5 0 7 1.5" />
      <path d="M24 22c2 0 4 .5 5.5 2" />
      {/* Umbrella flower head */}
      <path d="M24 10c-4-1-7 0-9 2" />
      <path d="M24 10c-2-3-2-6-1-8" />
      <path d="M24 10c0-3 1-6 2-8" />
      <path d="M24 10c3-2 6-2 8-1" />
      <path d="M24 10c4-1 7 0 9 2" />
      {/* Tiny dots at frond tips */}
      <circle cx="15" cy="12" r="0.8" />
      <circle cx="23" cy="2" r="0.8" />
      <circle cx="26" cy="2" r="0.8" />
      <circle cx="32" cy="9" r="0.8" />
      <circle cx="33" cy="12" r="0.8" />
    </svg>
  )
}
