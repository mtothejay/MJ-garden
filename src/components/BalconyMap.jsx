import containers from '../data/containers.json'

export default function BalconyMap({ gardenState, onContainerTap }) {
  return (
    <div className="overflow-x-auto -mx-4 px-4 pb-2">
      <svg
        viewBox="0 0 400 340"
        className="w-full min-w-[380px]"
        style={{ maxWidth: 480 }}
      >
        {/* Background */}
        <rect x="0" y="0" width="400" height="340" fill="var(--color-linen)" rx="12" />

        {/* Building wall */}
        <rect x="10" y="10" width="380" height="16" rx="4" fill="var(--color-alt)" stroke="var(--color-text-soft)" strokeWidth="0.5" strokeDasharray="4 2" />
        <text x="200" y="22" textAnchor="middle" className="font-hand" fill="var(--color-text-soft)" fontSize="10">building wall</text>

        {/* Railing */}
        <rect x="10" y="280" width="380" height="6" rx="3" fill="var(--color-sage)" opacity="0.3" />
        <text x="200" y="300" textAnchor="middle" className="font-hand" fill="var(--color-text-soft)" fontSize="10">railing</text>

        {/* Floor area */}
        <rect x="15" y="30" width="370" height="245" rx="8" fill="none" stroke="var(--color-sage)" strokeWidth="0.5" strokeDasharray="6 3" opacity="0.3" />

        {/* Containers */}
        {containers.map((c) => {
          const x = (c.position.x / 100) * 370 + 15
          const y = (c.position.y / 100) * 245 + 30
          const w = (c.position.width / 100) * 370
          const h = (c.position.height / 100) * 245

          const isWatered = (() => {
            const today = new Date().toISOString().slice(0, 10)
            const dates = gardenState?.containers?.[c.containerId]?.wateredDates || []
            return dates[dates.length - 1] === today
          })()

          const isRailing = c.position.y >= 80

          return (
            <g
              key={c.containerId}
              onClick={() => onContainerTap?.(c.containerId)}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
            >
              <rect
                x={x}
                y={y}
                width={w}
                height={h}
                rx={isRailing ? h / 2 : 8}
                fill={isWatered ? 'rgba(92, 122, 94, 0.15)' : 'var(--color-cream)'}
                stroke={isWatered ? 'var(--color-sage)' : 'rgba(92, 122, 94, 0.3)'}
                strokeWidth={isWatered ? 1.5 : 1}
                className="transition-all"
              />
              <text
                x={x + w / 2}
                y={y + h / 2 - 4}
                textAnchor="middle"
                fontSize="14"
              >
                {c.emoji}
              </text>
              <text
                x={x + w / 2}
                y={y + h / 2 + 10}
                textAnchor="middle"
                className="font-hand"
                fill="var(--color-text)"
                fontSize="9"
              >
                {c.name.length > 14 ? c.name.slice(0, 12) + '…' : c.name}
              </text>
            </g>
          )
        })}

        {/* Compass */}
        <text x="375" y="50" textAnchor="middle" className="font-hand" fill="var(--color-text-soft)" fontSize="9">N↑</text>

        {/* Sun direction */}
        <text x="375" y="160" textAnchor="middle" className="font-hand" fill="var(--color-terra)" fontSize="9" opacity="0.6">☀ south</text>
      </svg>
    </div>
  )
}
