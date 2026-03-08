export default function Thyme({ size = 48, className = '' }) {
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
      {/* Main woody stem */}
      <path d="M24 44c0-6-1-14 0-22" />
      {/* Left branch */}
      <path d="M24 32c-3-2-6-6-9-10" />
      {/* Right branch */}
      <path d="M24 28c3-2 6-7 8-12" />
      {/* Tiny paired oval leaves along main stem */}
      <ellipse cx="21" cy="36" rx="2.5" ry="1.2" transform="rotate(-20 21 36)" />
      <ellipse cx="27" cy="36" rx="2.5" ry="1.2" transform="rotate(20 27 36)" />
      <ellipse cx="21" cy="32" rx="2.5" ry="1.2" transform="rotate(-15 21 32)" />
      <ellipse cx="27" cy="32" rx="2.5" ry="1.2" transform="rotate(15 27 32)" />
      <ellipse cx="22" cy="28" rx="2" ry="1" transform="rotate(-15 22 28)" />
      <ellipse cx="26.5" cy="28" rx="2" ry="1" transform="rotate(15 26.5 28)" />
      {/* Leaves along left branch */}
      <ellipse cx="19" cy="28" rx="2" ry="1" transform="rotate(-40 19 28)" />
      <ellipse cx="17" cy="25.5" rx="2" ry="1" transform="rotate(-40 17 25.5)" />
      <ellipse cx="16" cy="23" rx="1.5" ry=".8" transform="rotate(-40 16 23)" />
      {/* Leaves along right branch */}
      <ellipse cx="28" cy="24" rx="2" ry="1" transform="rotate(35 28 24)" />
      <ellipse cx="30" cy="21" rx="2" ry="1" transform="rotate(35 30 21)" />
      <ellipse cx="31" cy="18" rx="1.5" ry=".8" transform="rotate(35 31 18)" />
      {/* Tiny flower buds at tips */}
      <circle cx="24" cy="21" r="1.5" />
      <circle cx="22.5" cy="19.5" r="1" />
      <circle cx="25.5" cy="19.5" r="1" />
    </svg>
  )
}
