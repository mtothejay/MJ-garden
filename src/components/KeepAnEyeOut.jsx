import maintenance from '../data/maintenance.json'

function getMonthKey() {
  return new Date().toLocaleString('en', { month: 'long' }).toLowerCase()
}

export default function KeepAnEyeOut() {
  const month = getMonthKey()
  const watchouts = maintenance.seasonalWatchouts[month]

  if (!watchouts || watchouts.length === 0) return null

  return (
    <div className="bg-amber rounded-card p-5 shadow-card border border-terra/15">
      <h2 className="font-hand text-forest text-xl mb-3">keep an eye out</h2>
      <div className="space-y-2.5">
        {watchouts.map((item, i) => (
          <p key={i} className="font-hand text-text text-base leading-snug">
            {item}
          </p>
        ))}
      </div>
    </div>
  )
}
