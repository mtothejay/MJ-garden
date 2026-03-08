export default function BasilTulsi({ size = 48, className = '' }) {
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
      {/* Opposite pairs — slightly serrated, more pointed than sweet basil */}
      {/* Bottom pair */}
      <path d="M24 38c-3-.5-7-2-8-5 1.5-2 5-2 7 0" />
      <path d="M24 38c3-.5 7-2 8-5-1.5-2-5-2-7 0" />
      {/* Middle pair */}
      <path d="M24 32c-2.5-.5-6-1.5-7-4 1.5-2 4.5-2 6 .5" />
      <path d="M24 32c2.5-.5 6-1.5 7-4-1.5-2-4.5-2-6 .5" />
      {/* Upper pair */}
      <path d="M24 26c-2 0-5-1-6-3 1-1.5 3.5-2 5 0" />
      <path d="M24 26c2 0 5-1 6-3-1-1.5-3.5-2-5 0" />
      {/* Tulsi flower spike — layered whorls along stem top */}
      <path d="M24 18c-1.5 0-3-.5-3.5-2 1 0 2.5 0 3.5.5" />
      <path d="M24 18c1.5 0 3-.5 3.5-2-1 0-2.5 0-3.5.5" />
      <path d="M24 15c-1.5 0-2.5-.5-3-1.5 1 0 2 0 3 .5" />
      <path d="M24 15c1.5 0 2.5-.5 3-1.5-1 0-2 0-3 .5" />
      <path d="M24 12.5c-1 0-2-.5-2-1.5.5 0 1.5 0 2 .5" />
      <path d="M24 12.5c1 0 2-.5 2-1.5-.5 0-1.5 0-2 .5" />
      <ellipse cx="24" cy="10" rx="1" ry="1.5" />
      {/* Serration hints on middle leaves */}
      <path d="M18 33c-.5-.3-.3-.8 0-1" opacity="0.4" />
      <path d="M30 33c.5-.3.3-.8 0-1" opacity="0.4" />
    </svg>
  )
}
