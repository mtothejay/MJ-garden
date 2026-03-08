import { motion, AnimatePresence } from 'framer-motion'
import plants from '../data/plants.json'
import LocationToggle from './LocationToggle'

function getExpectedSproutWindow(sownDate, plant) {
  if (!sownDate || !plant) return null
  const sown = new Date(sownDate)
  const minDate = new Date(sown)
  minDate.setDate(minDate.getDate() + plant.germinationDays.min)
  const maxDate = new Date(sown)
  maxDate.setDate(maxDate.getDate() + plant.germinationDays.max)
  return {
    min: minDate.toLocaleDateString('en-CA', { month: 'short', day: 'numeric' }),
    max: maxDate.toLocaleDateString('en-CA', { month: 'short', day: 'numeric' }),
  }
}

export default function GerminationDrawer({
  isOpen,
  onClose,
  trayId,
  cellId,
  plantKey,
  cellData,
  onSow,
  onSprout,
  onLocationChange,
}) {
  const plant = plants.find(p => p.plantKey === plantKey)
  if (!plant) return null

  const sownDate = cellData?.sownDate
  const sproutedDate = cellData?.sproutedDate
  const location = cellData?.location || 'inside'
  const sproutWindow = getExpectedSproutWindow(sownDate, plant)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-cream rounded-t-2xl shadow-soft max-h-[80vh] overflow-y-auto"
          >
            <div className="max-w-[480px] mx-auto p-5 pb-8">
              {/* Handle */}
              <div className="flex justify-center mb-4">
                <div className="w-10 h-1 bg-sage/20 rounded-full" />
              </div>

              {/* Plant name */}
              <h2 className="font-display text-forest text-xl mb-1">{plant.commonName}</h2>
              <p className="font-body text-text-soft text-sm italic mb-4">{plant.latinName}</p>

              {/* Cell reference */}
              <p className="font-hand text-text-soft text-base mb-4">
                {trayId}-cell tray · cell {cellId}
              </p>

              {/* Sow date */}
              <div className="space-y-3 mb-5">
                {sownDate ? (
                  <div className="bg-linen rounded-card p-3">
                    <p className="font-body text-sm text-text-soft">sown</p>
                    <p className="font-display text-text">
                      {new Date(sownDate).toLocaleDateString('en-CA', { month: 'long', day: 'numeric' })}
                    </p>
                    {sproutWindow && !sproutedDate && (
                      <p className="font-hand text-sage text-base mt-1">
                        sprouts expected {sproutWindow.min}–{sproutWindow.max}
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="font-hand text-text-soft text-lg">not yet sown — tap below to log</p>
                )}

                {sproutedDate && (
                  <div className="bg-forest/10 rounded-card p-3">
                    <p className="font-body text-sm text-text-soft">sprouted</p>
                    <p className="font-display text-forest">
                      {new Date(sproutedDate).toLocaleDateString('en-CA', { month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                )}
              </div>

              {/* Germination info */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-linen rounded-card p-3">
                  <p className="font-body text-xs text-text-soft">germination temp</p>
                  <p className="font-hand text-text text-lg">{plant.germinationTemp}</p>
                </div>
                <div className="bg-linen rounded-card p-3">
                  <p className="font-body text-xs text-text-soft">days to sprout</p>
                  <p className="font-hand text-text text-lg">{plant.germinationDays.min}–{plant.germinationDays.max}</p>
                </div>
              </div>

              {/* Pre-treatment */}
              {plant.pretreatment && (
                <div className="bg-amber/40 rounded-card p-3 mb-5">
                  <p className="font-body text-sm text-text">{plant.pretreatment}</p>
                </div>
              )}

              {/* Location toggle */}
              <div className="mb-5">
                <p className="font-body text-xs text-text-soft mb-2">location</p>
                <LocationToggle value={location} onChange={(loc) => onLocationChange?.(trayId, cellId, loc)} />
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                {!sownDate && (
                  <button
                    onClick={() => onSow?.(trayId, cellId)}
                    className="flex-1 bg-terra text-cream font-hand text-lg py-3 rounded-pill active:scale-[0.98] transition-transform"
                  >
                    mark as sown
                  </button>
                )}
                {sownDate && !sproutedDate && (
                  <button
                    onClick={() => onSprout?.(trayId, cellId)}
                    className="flex-1 bg-forest text-cream font-hand text-lg py-3 rounded-pill active:scale-[0.98] transition-transform"
                  >
                    mark as sprouted
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="px-6 py-3 font-hand text-lg text-text-soft rounded-pill border border-sage/20 active:scale-[0.98] transition-transform"
                >
                  close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
