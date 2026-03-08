import { useRef } from 'react'
import MonthCard from '../../components/MonthCard'
import SoilMixCard from '../../components/SoilMixCard'
import BagCalculator from '../../components/BagCalculator'
import BotanicalDivider from '../../illustrations/BotanicalDivider'
import useGardenState from '../../hooks/useGardenState'
import { exportJSON, importJSON } from '../../store/gardenStore'
import checklistData from '../../data/checklist.json'
import soilMixes from '../../data/soilMixes.json'

export default function Season() {
  const { state, setState, toggleChecklist } = useGardenState()
  const fileInputRef = useRef(null)

  const currentMonth = new Date().toLocaleString('en', { month: 'long' }).toLowerCase()

  const sortedMonths = [...checklistData.months].sort((a, b) => {
    if (a.month === currentMonth) return -1
    if (b.month === currentMonth) return 1
    return 0
  })

  const handleExport = () => exportJSON(state)

  const handleImport = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      const data = await importJSON(file)
      setState(data)
    } catch (err) {
      console.warn('Import failed:', err)
    }
    e.target.value = ''
  }

  return (
    <div className="space-y-6">
      <h1 className="font-display text-forest text-2xl">the season</h1>

      {/* Monthly cards */}
      <div className="space-y-4">
        {sortedMonths.map(monthData => (
          <MonthCard
            key={monthData.month}
            monthData={monthData}
            checklist={state.checklist}
            onToggle={toggleChecklist}
            isCurrentMonth={monthData.month === currentMonth}
          />
        ))}
      </div>

      <BotanicalDivider className="my-6" />

      {/* Soil mixes */}
      <div className="space-y-4">
        <h2 className="font-display text-forest text-xl">soil recipes</h2>
        {soilMixes.mixes.map(mix => (
          <SoilMixCard key={mix.mixId} mix={mix} />
        ))}
      </div>

      <BotanicalDivider className="my-6" />

      {/* Bag calculator */}
      <BagCalculator />

      <BotanicalDivider className="my-6" />

      {/* Data management */}
      <div className="bg-cream rounded-card p-4 shadow-card border border-sage/10">
        <h3 className="font-display text-forest text-lg mb-3">garden data</h3>
        <p className="font-body text-text-soft text-sm mb-4">
          back up your garden journal or restore from a previous backup
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleExport}
            className="flex-1 py-3 rounded-pill font-hand text-lg text-sage border-2 border-sage/30 active:scale-[0.98] transition-transform"
          >
            export backup
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex-1 py-3 rounded-pill font-hand text-lg text-text-soft border-2 border-sage/15 active:scale-[0.98] transition-transform"
          >
            import backup
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleImport}
            className="hidden"
          />
        </div>
      </div>
    </div>
  )
}
