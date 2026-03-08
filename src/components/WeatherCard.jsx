import { WeatherIcon } from '../illustrations/WeatherIcons'

const DAY_NAMES = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

export default function WeatherCard({ current, description, editorial, forecast, stale }) {
  if (!current) {
    return (
      <div className="bg-linen rounded-card p-5 shadow-card">
        <p className="font-hand text-text-soft text-lg">checking the sky...</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Current conditions */}
      <div className="bg-linen rounded-card p-5 shadow-card">
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-forest text-3xl font-bold">
                {Math.round(current.temperature)}°
              </span>
              <span className="font-body text-text-soft text-sm">{description}</span>
            </div>
          </div>
          <WeatherIcon code={current.weathercode} size={48} />
        </div>
        <p className="font-hand text-text text-xl leading-snug">{editorial}</p>
        {stale && (
          <p className="font-body text-text-soft text-xs mt-2">last updated a while ago</p>
        )}
      </div>

      {/* 5-day forecast strip */}
      {forecast.length > 0 && (
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {forecast.map((day, i) => {
            const date = new Date(day.date)
            const dayName = DAY_NAMES[date.getDay()]
            const isToday = i === 0

            return (
              <div
                key={day.date}
                className={`flex-shrink-0 flex flex-col items-center gap-1 rounded-card px-3 py-2 min-w-[60px] transition-all duration-soft ${
                  isToday
                    ? 'bg-cream shadow-card -translate-y-0.5'
                    : 'bg-linen/50'
                }`}
              >
                <span className={`font-hand text-sm ${isToday ? 'text-sage' : 'text-text-soft'}`}>
                  {isToday ? 'today' : dayName}
                </span>
                <WeatherIcon code={day.code} size={24} />
                <div className="flex gap-1 text-xs font-body">
                  <span className="text-forest font-medium">{Math.round(day.high)}°</span>
                  <span className="text-text-soft">{Math.round(day.low)}°</span>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
