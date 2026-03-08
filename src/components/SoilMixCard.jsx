import containers from '../data/containers.json'

export default function SoilMixCard({ mix }) {
  const mixContainers = containers.filter(c => mix.containers.includes(c.containerId))

  return (
    <div className="bg-cream rounded-card p-4 shadow-card border border-sage/10">
      <div className="flex items-baseline gap-2 mb-2">
        <span className="font-display text-forest text-lg font-bold">Mix {mix.mixId}</span>
        <span className="font-hand text-text-soft text-base">{mix.name}</span>
      </div>

      {/* Ratio bars */}
      <div className="space-y-1.5 mb-3">
        {[
          { label: 'Potting mix', value: mix.ratios.pottingMix, color: 'bg-forest/30' },
          { label: 'Compost', value: mix.ratios.compost, color: 'bg-terra/30' },
          { label: 'Perlite', value: mix.ratios.perlite, color: 'bg-cool/30' },
          ...(mix.ratios.sand > 0 ? [{ label: 'Sand', value: mix.ratios.sand, color: 'bg-amber/60' }] : []),
        ].map(({ label, value, color }) => (
          <div key={label} className="flex items-center gap-2">
            <span className="font-body text-xs text-text-soft w-20 text-right">{label}</span>
            <div className="flex-1 h-3 bg-linen rounded-full overflow-hidden">
              <div className={`h-full ${color} rounded-full`} style={{ width: `${value}%` }} />
            </div>
            <span className="font-hand text-sm text-text-soft w-8">{value}%</span>
          </div>
        ))}
      </div>

      {/* Containers using this mix */}
      <div className="flex flex-wrap gap-1.5 mb-2">
        {mixContainers.map(c => (
          <span key={c.containerId} className="font-hand text-sm text-sage">
            {c.emoji} {c.containerId}
          </span>
        ))}
      </div>

      <p className="font-body text-xs text-text-soft">{mix.notes}</p>
    </div>
  )
}
