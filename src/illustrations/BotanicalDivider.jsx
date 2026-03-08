export default function BotanicalDivider({ color = '#5C7A5E', className = '' }) {
  return (
    <svg
      viewBox="0 0 200 24"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-full max-w-[200px] mx-auto ${className}`}
      style={{ height: 24 }}
    >
      <path d="M20 12h160" opacity="0.15" />
      <path d="M90 12c0-6 4-10 10-10s10 4 10 10" />
      <path d="M93 12c-2-4-6-6-10-5 2 3 5 5 10 5z" />
      <path d="M107 12c2-4 6-6 10-5-2 3-5 5-10 5z" />
      <circle cx="100" cy="4" r="1.5" fill={color} opacity="0.3" />
      <path d="M96 8c-1-2-3-3-5-2.5 1 1.5 3 2.5 5 2.5z" opacity="0.6" />
      <path d="M104 8c1-2 3-3 5-2.5-1 1.5-3 2.5-5 2.5z" opacity="0.6" />
    </svg>
  )
}
