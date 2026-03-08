export default function Kale({ size = 48, className = '' }) {
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
      {/* Thick stem */}
      <path d="M24 44c0-4 0-10 0-18" strokeWidth="2" />
      {/* Curly ruffled leaves — lacinato/dinosaur kale style */}
      {/* Left large leaf */}
      <path d="M24 34c-3 0-7-1-9-4 0-3 2-5 5-6" />
      <path d="M20 24c-1 1-3 1.5-4 1" opacity="0.5" />
      <path d="M18 27c-1.5.5-3 .5-3.5-.5" opacity="0.5" />
      <path d="M16 30c-1 .5-2.5 .5-3 0" opacity="0.5" />
      <path d="M24 34c-1-1.5-1.5-3.5-1-6" opacity="0.3" />
      {/* Right large leaf */}
      <path d="M24 34c3 0 7-1 9-4 0-3-2-5-5-6" />
      <path d="M28 24c1 1 3 1.5 4 1" opacity="0.5" />
      <path d="M30 27c1.5.5 3 .5 3.5-.5" opacity="0.5" />
      <path d="M32 30c1 .5 2.5.5 3 0" opacity="0.5" />
      <path d="M24 34c1-1.5 1.5-3.5 1-6" opacity="0.3" />
      {/* Upper leaves — smaller */}
      <path d="M24 28c-2.5 0-5.5-1-7-3.5 .5-2.5 3-4 5.5-3.5" />
      <path d="M19 22c-1 .5-2.5.5-3 0" opacity="0.5" />
      <path d="M24 28c2.5 0 5.5-1 7-3.5-.5-2.5-3-4-5.5-3.5" />
      <path d="M29 22c1 .5 2.5.5 3 0" opacity="0.5" />
      {/* Crown leaves */}
      <path d="M24 22c-2 0-4-.5-5-2.5.5-1.5 2.5-2.5 4.5-1.5" />
      <path d="M24 22c2 0 4-.5 5-2.5-.5-1.5-2.5-2.5-4.5-1.5" />
    </svg>
  )
}
