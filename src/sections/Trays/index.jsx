import { useState } from 'react'
import TrayGrid from '../../components/TrayGrid'
import GerminationDrawer from '../../components/GerminationDrawer'
import useGardenState from '../../hooks/useGardenState'
import traysData from '../../data/trays.json'

export default function Trays() {
  const { state, sowCell, sproutCell, setCellLocation } = useGardenState()
  const [activeTray, setActiveTray] = useState('72')
  const [drawerCell, setDrawerCell] = useState(null)

  const assignments = traysData.defaultAssignments[activeTray] || {}

  // Summary counts
  const totalCells = activeTray === '72' ? 72 : 16
  const sownCount = Object.keys(assignments).filter(cellId => {
    const key = `${activeTray}-${cellId}`
    return state.trays[key]?.sownDate
  }).length
  const sproutedCount = Object.keys(assignments).filter(cellId => {
    const key = `${activeTray}-${cellId}`
    return state.trays[key]?.sproutedDate
  }).length
  const waitingCount = sownCount - sproutedCount

  return (
    <div className="space-y-5">
      <h1 className="font-display text-forest text-2xl">the seedling trays</h1>

      {/* Tray selector */}
      <div className="flex gap-2">
        {['72', '16'].map(id => (
          <button
            key={id}
            onClick={() => setActiveTray(id)}
            className={`px-4 py-2 rounded-pill font-hand text-lg transition-all duration-soft ${
              activeTray === id
                ? 'bg-sage text-cream shadow-card'
                : 'bg-linen text-text-soft'
            }`}
          >
            {id}-cell tray
          </button>
        ))}
      </div>

      {/* Summary */}
      <p className="font-hand text-text-soft text-lg">
        {sownCount} of {totalCells} sown · {sproutedCount} sprouted · {waitingCount > 0 ? `${waitingCount} waiting` : 'none waiting'}
      </p>

      {/* Grid */}
      <TrayGrid
        trayId={activeTray}
        gardenState={state}
        onCellTap={(cellId, plantKey) => setDrawerCell({ cellId, plantKey })}
      />

      {/* Germination drawer */}
      <GerminationDrawer
        isOpen={!!drawerCell}
        onClose={() => setDrawerCell(null)}
        trayId={activeTray}
        cellId={drawerCell?.cellId}
        plantKey={drawerCell?.plantKey}
        cellData={state.trays[`${activeTray}-${drawerCell?.cellId}`]}
        onSow={sowCell}
        onSprout={sproutCell}
        onLocationChange={setCellLocation}
      />
    </div>
  )
}
