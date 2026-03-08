export default function Shiso({ size = 48, className = '' }) {
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
      <path d="M24 44c0-6 0-16 0-26" />
      {/* Large, broad serrated leaves — opposite pairs */}
      {/* Bottom pair — largest */}
      <path d="M24 38c-3 0-8-1-10-4.5 1-3 5-4 8-2.5" />
      <path d="M24 38c3 0 8-1 10-4.5-1-3-5-4-8-2.5" />
      {/* Serration on bottom leaves */}
      <path d="M16 34.5c-.5.3-.5.8 0 1" opacity="0.5" />
      <path d="M14.5 35.5c-.3.5 0 1 .5 1" opacity="0.5" />
      <path d="M32 34.5c.5.3.5.8 0 1" opacity="0.5" />
      <path d="M33.5 35.5c.3.5 0 1-.5 1" opacity="0.5" />
      {/* Middle pair */}
      <path d="M24 32c-2.5 0-7-.5-9-3.5 1-2.5 4.5-3.5 7-2" />
      <path d="M24 32c2.5 0 7-.5 9-3.5-1-2.5-4.5-3.5-7-2" />
      {/* Upper pair — smaller */}
      <path d="M24 26c-2 0-5.5-.5-7-3 1-2 3.5-2.5 5.5-1" />
      <path d="M24 26c2 0 5.5-.5 7-3-1-2-3.5-2.5-5.5-1" />
      {/* Leaf veins */}
      <path d="M24 38c-2-1-5-2.5-7-4" opacity="0.3" />
      <path d="M24 38c2-1 5-2.5 7-4" opacity="0.3" />
      <path d="M24 32c-2-.5-4.5-2-6-3" opacity="0.3" />
      <path d="M24 32c2-.5 4.5-2 6-3" opacity="0.3" />
      {/* Flower spike at top */}
      <path d="M24 18c0-2 0-4 0-6" />
      <circle cx="23" cy="16" r="0.8" />
      <circle cx="25" cy="15" r="0.8" />
      <circle cx="23.5" cy="13.5" r="0.8" />
      <circle cx="24.5" cy="12" r="0.8" />
    </svg>
  )
}
