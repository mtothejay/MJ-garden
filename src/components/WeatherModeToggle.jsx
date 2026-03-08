const modes = [
  { value: 'cool', label: 'Cool', color: '#8A9BAD' },
  { value: 'normal', label: 'Normal', color: '#5C7A5E' },
  { value: 'hot', label: 'Hot', color: '#C4714A' },
  { value: 'heatwave', label: 'Heatwave', color: '#8B4513' },
]

export default function WeatherModeToggle({ value = 'normal', onChange }) {
  return (
    <div className="flex gap-1 bg-linen rounded-pill p-1">
      {modes.map(({ value: v, label, color }) => (
        <button
          key={v}
          onClick={() => onChange?.(v)}
          className={`flex-1 px-2 py-1.5 rounded-pill text-sm font-hand transition-all duration-soft ${
            value === v
              ? 'bg-cream shadow-card'
              : 'hover:bg-cream/50'
          }`}
          style={{ color: value === v ? color : 'var(--color-text-soft)' }}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
