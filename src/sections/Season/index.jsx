import MonthCard from '../../components/MonthCard'
import SoilMixCard from '../../components/SoilMixCard'
import BagCalculator from '../../components/BagCalculator'
import BotanicalDivider from '../../illustrations/BotanicalDivider'
import useGardenState from '../../hooks/useGardenState'
import checklistData from '../../data/checklist.json'
import soilMixes from '../../data/soilMixes.json'

export default function Season() {
  const { state, toggleChecklist } = useGardenState()

  const currentMonth = new Date().toLocaleString('en', { month: 'long' }).toLowerCase()

  // Sort: current month first, then chronological
  const sortedMonths = [...checklistData.months].sort((a, b) => {
    if (a.month === currentMonth) return -1
    if (b.month === currentMonth) return 1
    return 0
  })

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
    </div>
  )
}
