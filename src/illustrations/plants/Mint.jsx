export default function Mint({ size = 48, className = '' }) {
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
      {/* Runner escaping sideways */}
      <path d="M24 42c-4 0-8-1-12 0" />
      <path d="M12 42c0-1.5 1-3 2-3.5" opacity="0.5" />
      {/* Opposite rounded-serrated leaves */}
      {/* Bottom pair */}
      <path d="M24 38c-2.5.5-6-.5-7-3 1.5-1.5 4.5-1.5 6 .5" />
      <path d="M24 38c2.5.5 6-.5 7-3-1.5-1.5-4.5-1.5-6 .5" />
      {/* Middle pair */}
      <path d="M24 32c-2.5.5-6-.5-7-3 1.5-1.5 4.5-1.5 6 .5" />
      <path d="M24 32c2.5.5 6-.5 7-3-1.5-1.5-4.5-1.5-6 .5" />
      {/* Upper pair */}
      <path d="M24 26c-2 .5-5-.5-6-2.5 1-1.5 3.5-1.5 5 .5" />
      <path d="M24 26c2 .5 5-.5 6-2.5-1-1.5-3.5-1.5-5 .5" />
      {/* Small top pair */}
      <path d="M24 22c-1.5 0-3.5-.5-4-2 1-.5 3-.5 4 .5" />
      <path d="M24 22c1.5 0 3.5-.5 4-2-1-.5-3-.5-4 .5" />
      {/* Leaf veins */}
      <path d="M24 38c-1.5-.5-3.5-1.5-5-2.5" opacity="0.3" />
      <path d="M24 38c1.5-.5 3.5-1.5 5-2.5" opacity="0.3" />
      <path d="M24 32c-1.5-.5-3.5-1.5-5-2.5" opacity="0.3" />
      <path d="M24 32c1.5-.5 3.5-1.5 5-2.5" opacity="0.3" />
      {/* Flower spike */}
      <ellipse cx="24" cy="17" rx="2" ry="1.5" />
      <ellipse cx="24" cy="15" rx="1.5" ry="1" />
    </svg>
  )
}
