export default function Delphinium({ size = 48, className = '' }) {
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
      {/* Tall central spike */}
      <path d="M24 44c0-8 0-20 0-36" />
      {/* Flower spike — stacked blooms from bottom to top */}
      {/* Bottom flowers — open */}
      <path d="M24 32c-3 0-5-2-5-4 2-1 4 0 5 2" />
      <path d="M24 32c3 0 5-2 5-4-2-1-4 0-5 2" />
      <path d="M24 32c0 2-1 4-3 4.5 0-2 1-3.5 3-4.5" opacity="0.5" />
      {/* Mid flowers */}
      <path d="M24 26c-2.5 0-4.5-1.5-4.5-3.5 1.5-1 3.5 0 4.5 1.5" />
      <path d="M24 26c2.5 0 4.5-1.5 4.5-3.5-1.5-1-3.5 0-4.5 1.5" />
      <path d="M24 26c0 1.5-1 3-2.5 3.5 0-1.5.5-3 2.5-3.5" opacity="0.5" />
      {/* Upper flowers — smaller */}
      <path d="M24 20c-2 0-3.5-1.5-3.5-3 1.5-.5 3 .5 3.5 1.5" />
      <path d="M24 20c2 0 3.5-1.5 3.5-3-1.5-.5-3 .5-3.5 1.5" />
      {/* Near-top buds */}
      <path d="M24 15c-1.5 0-2.5-1-2.5-2.5 1 0 2 .5 2.5 1.5" />
      <path d="M24 15c1.5 0 2.5-1 2.5-2.5-1 0-2 .5-2.5 1.5" />
      {/* Tip buds */}
      <ellipse cx="24" cy="10" rx="1.5" ry="2" />
      <ellipse cx="24" cy="7" rx="1" ry="1.5" />
      {/* Deeply cut palmate leaves at base */}
      <path d="M24 40c-4-1-8-4-10-8 2 0 4 1 5 3" />
      <path d="M19 35c-1-3 0-6 2-8 0 2 0 5-1 7" />
      <path d="M24 40c4-1 8-4 10-8-2 0-4 1-5 3" />
      <path d="M29 35c1-3 0-6-2-8 0 2 0 5 1 7" />
    </svg>
  )
}
