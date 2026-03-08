export default function Chamomile({ size = 48, className = '' }) {
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
      {/* Stems */}
      <path d="M20 44c-1-8-3-16-4-24" />
      <path d="M26 44c0-6 1-14 4-22" />
      {/* Main daisy — yellow dome center + white petals */}
      {/* Center dome */}
      <circle cx="16" cy="16" r="3" />
      {/* Petals radiating out */}
      <path d="M16 10c0 1 0 2 0 3" />
      <path d="M11.5 12c.8.5 1.5 1.5 1.5 2" />
      <path d="M10 16c1 0 2.5 0 3 0" />
      <path d="M11.5 20c.8-.5 1.5-1.5 1.5-2" />
      <path d="M16 22c0-1 0-2 0-3" />
      <path d="M20.5 20c-.8-.5-1.5-1.5-1.5-2" />
      <path d="M22 16c-1 0-2.5 0-3 0" />
      <path d="M20.5 12c-.8.5-1.5 1.5-1.5 2" />
      {/* Second flower */}
      <circle cx="30" cy="18" r="2.5" />
      <path d="M30 13c0 .8 0 1.8 0 2.5" />
      <path d="M26.5 15c.5.5 1.5 1 1.5 1.5" />
      <path d="M25.5 18c1 0 2 0 2 0" />
      <path d="M26.5 21c.5-.5 1.5-1 1.5-1.5" />
      <path d="M30 23c0-.8 0-1.8 0-2.5" />
      <path d="M33.5 21c-.5-.5-1.5-1-1.5-1.5" />
      <path d="M34.5 18c-1 0-2 0-2 0" />
      <path d="M33.5 15c-.5.5-1.5 1-1.5 1.5" />
      {/* Feathery leaves — fine and divided */}
      <path d="M19 30c-2 0-3-.5-3.5-1.5" />
      <path d="M19 30c-1-1.5-1-3 0-4" />
      <path d="M19 30c1-1 .5-2.5 0-3.5" />
      <path d="M27 32c2 0 3.5-.5 4-2" />
      <path d="M27 32c1-1.5 1-3 0-4" />
      <path d="M27 32c-1-1-.5-3 0-4" />
      {/* Tiny leaf segments */}
      <path d="M16 30c-.5-.5-.5-1.5 0-2" opacity="0.5" />
      <path d="M17.5 28c-.5-.5 0-1.5.5-2" opacity="0.5" />
      <path d="M30 30c.5-.5.5-1.5 0-2" opacity="0.5" />
      <path d="M28.5 30c.5-.5 0-1.5-.5-2" opacity="0.5" />
    </svg>
  )
}
