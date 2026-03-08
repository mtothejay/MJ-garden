import TrayCell from './TrayCell'
import traysData from '../data/trays.json'

const ROW_LABELS = 'ABCDEFGHIJKL'.split('')

function getZone(trayId, rowIndex) {
  const tray = traysData.trays.find(t => t.trayId === trayId)
  if (!tray) return 'light'
  for (const [zoneName, zone] of Object.entries(tray.zones)) {
    if (zone.rows.includes(rowIndex + 1)) return zoneName
  }
  return 'light'
}

export default function TrayGrid({ trayId, gardenState, onCellTap }) {
  const tray = traysData.trays.find(t => t.trayId === trayId)
  if (!tray) return null

  const assignments = traysData.defaultAssignments[trayId] || {}
  const { rows, cols } = tray

  return (
    <div className="space-y-3">
      {/* Zone legend */}
      <div className="flex gap-3 justify-center flex-wrap">
        {Object.entries(tray.zones).map(([zoneName, zone]) => (
          <div key={zoneName} className="flex items-center gap-1.5">
            <span className={`w-3 h-3 rounded-sm ${
              zoneName === 'heat' ? 'bg-terra/20' :
              zoneName === 'cool' ? 'bg-cool/20' :
              zoneName === 'dark' ? 'bg-forest/15' :
              'bg-sage/10'
            }`} />
            <span className="font-hand text-sm text-text-soft">{zone.label}</span>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-1" style={{ gridTemplateColumns: `auto repeat(${cols}, 1fr)` }}>
        {/* Header row — column numbers */}
        <div />
        {Array.from({ length: cols }, (_, c) => (
          <div key={c} className="text-center font-hand text-xs text-text-soft">
            {c + 1}
          </div>
        ))}

        {/* Cell rows */}
        {Array.from({ length: rows }, (_, r) => {
          const rowLabel = ROW_LABELS[r]
          const zone = getZone(trayId, r)
          return [
            <div key={`label-${r}`} className="flex items-center justify-center font-hand text-xs text-text-soft pr-1">
              {rowLabel}
            </div>,
            ...Array.from({ length: cols }, (_, c) => {
              const cellId = `${rowLabel}${c + 1}`
              const plantKey = assignments[cellId] || null
              const stateKey = `${trayId}-${cellId}`
              const cellData = gardenState?.trays?.[stateKey]

              return (
                <TrayCell
                  key={cellId}
                  cellId={cellId}
                  plantKey={plantKey}
                  cellData={cellData}
                  zone={zone}
                  onTap={() => onCellTap?.(cellId, plantKey)}
                />
              )
            }),
          ]
        }).flat()}
      </div>
    </div>
  )
}
