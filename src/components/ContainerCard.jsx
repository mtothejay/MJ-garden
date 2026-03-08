import { motion, AnimatePresence } from 'framer-motion'
import containers from '../data/containers.json'
import plants from '../data/plants.json'
import soilMixes from '../data/soilMixes.json'
import LocationToggle from './LocationToggle'
import WateringButton from './WateringButton'

export default function ContainerCard({
  isOpen,
  onClose,
  containerId,
  gardenState,
  weatherMode = 'normal',
  onWater,
  onLocationChange,
}) {
  const container = containers.find(c => c.containerId === containerId)
  if (!container) return null

  const containerState = gardenState?.containers?.[containerId] || {}
  const location = containerState.location || 'inside'
  const wateredDates = containerState.wateredDates || []
  const mix = soilMixes.mixes.find(m => m.mixId === container.soilMix)
  const cadence = container.wateringCadence[weatherMode]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-cream rounded-t-2xl shadow-soft max-h-[85vh] overflow-y-auto"
          >
            <div className="max-w-[480px] mx-auto p-5 pb-8">
              {/* Handle */}
              <div className="flex justify-center mb-4">
                <div className="w-10 h-1 bg-sage/20 rounded-full" />
              </div>

              {/* Header */}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{container.emoji}</span>
                <h2 className="font-display text-forest text-xl">{container.name}</h2>
              </div>
              <p className="font-body text-text-soft text-sm mb-4">{container.potSize}</p>

              {/* Plants */}
              <div className="mb-4">
                <p className="font-body text-xs text-text-soft mb-2">plants in this container</p>
                <div className="flex flex-wrap gap-1.5">
                  {container.plants.map(pk => {
                    const p = plants.find(pl => pl.plantKey === pk)
                    return (
                      <span key={pk} className="bg-linen px-2.5 py-1 rounded-pill font-hand text-sm text-text">
                        {p?.commonName || pk}
                      </span>
                    )
                  })}
                </div>
              </div>

              {/* Watering cadence */}
              <div className="bg-linen rounded-card p-3 mb-4">
                <p className="font-body text-xs text-text-soft">watering ({weatherMode} mode)</p>
                <p className="font-hand text-text text-lg">
                  every {cadence === 1 ? 'day' : `${cadence} days`}
                </p>
              </div>

              {/* Soil mix */}
              {mix && (
                <div className="bg-linen rounded-card p-3 mb-4">
                  <p className="font-body text-xs text-text-soft">soil mix {mix.mixId}</p>
                  <p className="font-hand text-text text-base">{mix.name}</p>
                  <p className="font-body text-text-soft text-xs mt-1">{mix.notes}</p>
                </div>
              )}

              {/* Location */}
              <div className="mb-5">
                <p className="font-body text-xs text-text-soft mb-2">location</p>
                <LocationToggle
                  value={location}
                  onChange={(loc) => onLocationChange?.(containerId, loc)}
                />
              </div>

              {/* Watering button */}
              <WateringButton
                containerId={containerId}
                wateredDates={wateredDates}
                onWater={onWater}
              />

              {/* Close */}
              <button
                onClick={onClose}
                className="w-full mt-4 py-3 font-hand text-lg text-text-soft rounded-pill border border-sage/20 active:scale-[0.98] transition-transform"
              >
                close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
