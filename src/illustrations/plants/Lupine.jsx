export default function Lupine({ size = 48, className = '' }) {
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
      <path d="M24 44c0-8 0-20 0-34" />
      {/* Flower spike — pea-like blooms spiraling up */}
      {/* Bottom tier */}
      <path d="M19 30c-2-.5-3-2-2-3.5 2 0 3.5 1 3.5 3" />
      <path d="M29 30c2-.5 3-2 2-3.5-2 0-3.5 1-3.5 3" />
      {/* Second tier */}
      <path d="M19.5 26c-2-.5-3-2-2-3.5 2 0 3 1 3 3" />
      <path d="M28.5 26c2-.5 3-2 2-3.5-2 0-3 1-3 3" />
      {/* Third tier */}
      <path d="M20 22c-1.5-.5-2.5-1.5-2-3 1.5 0 2.5 1 2.5 2.5" />
      <path d="M28 22c1.5-.5 2.5-1.5 2-3-1.5 0-2.5 1-2.5 2.5" />
      {/* Fourth tier */}
      <path d="M21 18c-1.5 0-2.5-1-2-2.5 1.5 0 2.5.5 2.5 2" />
      <path d="M27 18c1.5 0 2.5-1 2-2.5-1.5 0-2.5.5-2.5 2" />
      {/* Top buds */}
      <path d="M22 14c-1 0-2-.5-1.5-2 1 0 2 .5 2 1.5" />
      <path d="M26 14c1 0 2-.5 1.5-2-1 0-2 .5-2 1.5" />
      <ellipse cx="24" cy="11" rx="1.5" ry="2" />
      {/* Palmate compound leaves */}
      <path d="M24 40c-3 0-6-1-7.5-3.5" />
      <path d="M16.5 36.5c-.5-2 0-4.5 1-6" />
      <path d="M16.5 36.5c-2-.5-4 0-5 1" />
      <path d="M16.5 36.5c-1.5-1.5-2-4-1.5-6" />
      <path d="M24 40c3 0 6-1 7.5-3.5" />
      <path d="M31.5 36.5c.5-2 0-4.5-1-6" />
      <path d="M31.5 36.5c2-.5 4 0 5 1" />
      <path d="M31.5 36.5c1.5-1.5 2-4 1.5-6" />
    </svg>
  )
}
