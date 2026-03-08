import { useState } from 'react'

export default function WateringButton({ containerId, wateredDates = [], onWater }) {
  const [animating, setAnimating] = useState(false)
  const today = new Date().toISOString().slice(0, 10)
  const isWatered = wateredDates[wateredDates.length - 1] === today

  const lastDate = wateredDates[wateredDates.length - 1]
  const lastWateredText = (() => {
    if (!lastDate) return 'not yet watered'
    if (lastDate === today) return 'watered today'
    const d = new Date(lastDate)
    const now = new Date()
    const diff = Math.floor((now - d) / (1000 * 60 * 60 * 24))
    if (diff === 1) return 'watered yesterday'
    return `watered ${diff} days ago`
  })()

  const handleTap = () => {
    if (isWatered) return
    setAnimating(true)
    onWater?.(containerId)
    setTimeout(() => setAnimating(false), 800)
  }

  return (
    <div className="space-y-2">
      <button
        onClick={handleTap}
        disabled={isWatered}
        className={`w-full py-4 rounded-card font-hand text-xl transition-all duration-700 relative overflow-hidden active:scale-[0.98] ${
          isWatered
            ? 'bg-sage/20 text-sage border-2 border-sage/30'
            : 'bg-cream text-sage border-2 border-sage/30 hover:border-sage/50'
        }`}
      >
        {/* Watercolour wash animation */}
        <span
          className={`absolute inset-0 bg-gradient-to-r from-sage/10 via-sage/20 to-sage/10 transition-transform duration-700 ${
            animating ? 'translate-x-0' : '-translate-x-full'
          }`}
        />
        <span className="relative z-10">
          {isWatered ? 'watered ✓' : 'water this container'}
        </span>
      </button>
      <p className="font-hand text-text-soft text-base text-center">{lastWateredText}</p>
    </div>
  )
}
