import useWeather from '../../hooks/useWeather'
import WeatherCard from '../../components/WeatherCard'
import NudgeCard from '../../components/NudgeCard'
import WeekInGarden from '../../components/WeekInGarden'
import KeepAnEyeOut from '../../components/KeepAnEyeOut'
import BotanicalDivider from '../../illustrations/BotanicalDivider'
import checklistData from '../../data/checklist.json'

function getGardenNote() {
  const now = new Date()
  const month = now.toLocaleString('en', { month: 'long' }).toLowerCase()
  const monthData = checklistData.months.find(m => m.month === month)
  if (monthData) return monthData.narrative
  return 'the garden is resting'
}

function getDaysUntilTransplant() {
  const transplantDate = new Date('2026-05-15')
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  transplantDate.setHours(0, 0, 0, 0)
  const diff = Math.ceil((transplantDate - now) / (1000 * 60 * 60 * 24))
  return diff
}

export default function Today() {
  const { current, description, editorial, forecast, nudges, loading, stale } = useWeather()
  const gardenNote = getGardenNote()
  const daysLeft = getDaysUntilTransplant()

  return (
    <div className="space-y-6">
      <h1 className="font-display text-forest text-2xl">today in the garden</h1>

      {loading && !current ? (
        <div className="bg-linen rounded-card p-5 shadow-card">
          <p className="font-hand text-text-soft text-lg">checking the sky...</p>
        </div>
      ) : (
        <WeatherCard
          current={current}
          description={description}
          editorial={editorial}
          forecast={forecast}
          stale={stale}
        />
      )}

      {/* Garden note */}
      <div className="bg-cream rounded-card p-5 shadow-card border border-sage/10">
        <p className="font-display italic text-text leading-relaxed">{gardenNote}</p>
      </div>

      {/* Countdown to May 15 */}
      {daysLeft > 0 && (
        <p className="font-hand text-text-soft text-lg text-center">
          {daysLeft} {daysLeft === 1 ? 'day' : 'days'} until the balcony opens
        </p>
      )}

      <BotanicalDivider />

      {/* Nudge cards */}
      {nudges.length > 0 && (
        <div className="space-y-3">
          {nudges.map((nudge, i) => (
            <NudgeCard key={i} text={nudge} />
          ))}
        </div>
      )}

      {/* This week in the garden */}
      <WeekInGarden />

      {/* Seasonal watchouts */}
      <KeepAnEyeOut />
    </div>
  )
}
