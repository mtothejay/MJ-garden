import { InsideIcon, HardeningIcon, OutsideIcon } from '../illustrations/StatusIcons'

const options = [
  { value: 'inside', label: 'Inside', Icon: InsideIcon, color: '#5C7A5E' },
  { value: 'hardening', label: 'Hardening Off', Icon: HardeningIcon, color: '#8A9BAD' },
  { value: 'outside', label: 'Outside', Icon: OutsideIcon, color: '#C4714A' },
]

export default function LocationToggle({ value = 'inside', onChange }) {
  return (
    <div className="flex gap-1 bg-linen rounded-pill p-1">
      {options.map(({ value: v, label, Icon, color }) => (
        <button
          key={v}
          onClick={() => onChange?.(v)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-pill text-sm font-body transition-all duration-soft ${
            value === v
              ? 'bg-cream shadow-card'
              : 'hover:bg-cream/50'
          }`}
          style={{ color: value === v ? color : 'var(--color-text-soft)' }}
        >
          <Icon size={16} color={value === v ? color : '#7A6E5F'} />
          <span className="font-hand text-base">{label}</span>
        </button>
      ))}
    </div>
  )
}
