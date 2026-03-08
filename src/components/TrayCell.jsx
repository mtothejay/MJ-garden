import { SeedIcon, SproutIcon, LeafIcon } from '../illustrations/StatusIcons'
import plants from '../data/plants.json'

function getCellState(cellData, plantKey) {
  if (!plantKey) return 'empty'
  if (!cellData?.sownDate) return 'unsown'
  if (cellData.sproutedDate) {
    const transplantDate = new Date('2026-05-15')
    const now = new Date()
    const daysUntil = Math.ceil((transplantDate - now) / (1000 * 60 * 60 * 24))
    if (daysUntil <= 7 && daysUntil > 0) return 'ready'
    return 'sprouted'
  }

  const plant = plants.find(p => p.plantKey === plantKey)
  if (!plant) return 'sown'

  const sown = new Date(cellData.sownDate)
  const now = new Date()
  const daysSince = Math.floor((now - sown) / (1000 * 60 * 60 * 24))

  if (daysSince >= plant.germinationDays.min && daysSince <= plant.germinationDays.max + 5) {
    return 'germinating'
  }
  return 'sown'
}

const zoneBg = {
  heat: 'bg-terra/8',
  light: 'bg-sage/5',
  cool: 'bg-cool/10',
  dark: 'bg-forest/8',
}

export default function TrayCell({ cellId, plantKey, cellData, zone, onTap }) {
  const state = getCellState(cellData, plantKey)
  const plant = plants.find(p => p.plantKey === plantKey)

  const stateStyles = {
    empty: 'bg-linen',
    unsown: `${zoneBg[zone] || 'bg-linen'} border-dashed border-sage/20`,
    sown: `${zoneBg[zone] || 'bg-sage/10'} border-sage/30`,
    germinating: `${zoneBg[zone] || 'bg-sage/15'} border-sage/40 animate-pulse`,
    sprouted: 'bg-forest/15 border-forest/30',
    ready: 'bg-terra/15 border-terra/40',
  }

  return (
    <button
      onClick={() => onTap?.(cellId)}
      className={`w-full aspect-square rounded-lg border flex items-center justify-center transition-all duration-soft active:scale-95 ${stateStyles[state] || stateStyles.empty}`}
      title={plant?.commonName || cellId}
    >
      {state === 'sown' && <SeedIcon size={10} />}
      {state === 'germinating' && <SeedIcon size={10} color="#5C7A5E" />}
      {state === 'sprouted' && <SproutIcon size={14} />}
      {state === 'ready' && <LeafIcon size={14} />}
      {state === 'unsown' && plantKey && (
        <span className="text-[7px] font-hand text-text-soft leading-none text-center px-0.5">
          {plant?.commonName?.split(' ')[0]?.[0]}
        </span>
      )}
    </button>
  )
}
