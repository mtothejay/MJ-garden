export default function Oregano({ size = 48, className = '' }) {
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
      <path d="M24 42c0-8 0-16-1-24" />
      {/* Branch left */}
      <path d="M23 26c-4-3-8-5-12-4" />
      {/* Branch right */}
      <path d="M23 22c4-3 9-4 13-2" />
      {/* Small opposite leaves along stem */}
      <path d="M23 34c-2-1-4-2-6-1 2-.5 4 0 6 1z" />
      <path d="M24 34c2-1 4-2 6-1-2-.5-4 0-6 1z" />
      <path d="M23 30c-2-1-5-1.5-7-.5 2-.5 5-.5 7 .5z" />
      <path d="M24 30c2-1 5-1.5 7-.5-2-.5-5-.5-7 .5z" />
      <path d="M23 38c-2-.5-4-1-5.5 0 1.5-.5 3.5-.5 5.5 0z" />
      <path d="M24 38c2-.5 4-1 5.5 0-1.5-.5-3.5-.5-5.5 0z" />
      {/* Flower clusters — small rounded groups */}
      <circle cx="11" cy="21" r="2" />
      <circle cx="9" cy="23" r="1.5" />
      <circle cx="13" cy="23" r="1.5" />
      <circle cx="36" cy="19" r="2" />
      <circle cx="34" cy="21" r="1.5" />
      <circle cx="38" cy="21" r="1.5" />
      {/* Top cluster */}
      <circle cx="23" cy="16" r="2" />
      <circle cx="21" cy="14" r="1.5" />
      <circle cx="25" cy="14" r="1.5" />
      <circle cx="23" cy="12" r="1.5" />
    </svg>
  )
}
