import maintenance from '../data/maintenance.json'

function getWeekPhase() {
  const day = new Date().getDate()
  if (day <= 10) return 'early'
  if (day <= 20) return 'mid'
  return 'late'
}

function getMonthKey() {
  return new Date().toLocaleString('en', { month: 'long' }).toLowerCase()
}

export default function WeekInGarden() {
  const month = getMonthKey()
  const phase = getWeekPhase()
  const monthTasks = maintenance.weeklyTasks[month]

  if (!monthTasks) return null

  const tasks = monthTasks[phase]
  if (!tasks || tasks.length === 0) return null

  const phaseLabel = phase === 'early' ? 'early' : phase === 'mid' ? 'mid' : 'late'

  return (
    <div className="bg-cream rounded-card p-5 shadow-card border border-sage/10">
      <h2 className="font-display text-forest text-lg mb-1">this week in the garden</h2>
      <p className="font-hand text-text-soft text-base mb-3">{phaseLabel} {month}</p>
      <div className="space-y-2.5">
        {tasks.map((task, i) => (
          <p key={i} className="font-body text-text text-sm leading-relaxed pl-4 border-l-2 border-sage/20">
            {task}
          </p>
        ))}
      </div>
    </div>
  )
}
