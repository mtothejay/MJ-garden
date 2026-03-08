import StampFrame from '../illustrations/StampFrame'

const typeColors = {
  herb: 'bg-sage/15 text-sage',
  flower: 'bg-terra/15 text-terra',
  medicinal: 'bg-cool/20 text-cool',
  edible: 'bg-forest/10 text-forest',
}

const zoneLabels = {
  heat: 'heat pad',
  light: 'light',
  cool: 'cool zone',
  dark: 'dark',
  'direct-sow': 'direct sow',
}

export default function StampCard({ plant, onTap }) {
  return (
    <button
      onClick={() => onTap?.(plant.plantKey)}
      className="w-full text-left active:scale-[0.97] transition-transform duration-soft"
    >
      <StampFrame>
        <div className="space-y-2">
          {/* Plant icon placeholder — botanical area */}
          <div className="w-full h-16 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--color-sage)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
              <path d="M20 35V18" />
              <path d="M14 22c-5-1-8-5-6-10 4-.5 8 2 10 6" />
              <path d="M26 18c4-2 8-1 9 3-3 2-7 1-9-2" />
              <path d="M16 28c-3 0-5-2-5-4 3-1 5.5 0 6.5 2" />
              <path d="M24 28c3 0 5-2 5-4-3-1-5.5 0-6.5 2" />
              <circle cx="20" cy="12" r="3" strokeDasharray="2 2" />
            </svg>
          </div>

          {/* Name */}
          <h3 className="font-display text-forest text-base leading-tight">{plant.commonName}</h3>
          <p className="font-body text-text-soft text-xs italic">{plant.latinName}</p>

          {/* Type pills */}
          <div className="flex flex-wrap gap-1">
            {plant.types.map(type => (
              <span
                key={type}
                className={`px-2 py-0.5 rounded-pill text-[10px] font-body ${typeColors[type] || 'bg-alt text-text-soft'}`}
              >
                {type}
              </span>
            ))}
          </div>

          {/* Zone */}
          <p className="font-hand text-text-soft text-sm">
            {zoneLabels[plant.sowingZone] || plant.sowingZone}
          </p>
        </div>
      </StampFrame>
    </button>
  )
}
