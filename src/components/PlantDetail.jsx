import { motion, AnimatePresence } from 'framer-motion'
import plants from '../data/plants.json'
import containers from '../data/containers.json'

const typeColors = {
  herb: 'bg-sage/15 text-sage',
  flower: 'bg-terra/15 text-terra',
  medicinal: 'bg-cool/20 text-cool',
  edible: 'bg-forest/10 text-forest',
}

export default function PlantDetail({ plantKey, isOpen, onClose }) {
  const plant = plants.find(p => p.plantKey === plantKey)
  if (!plant) return null

  const plantContainers = containers.filter(c => plant.containers.includes(c.containerId))
  const companions = plant.companionsWith
    .map(k => plants.find(p => p.plantKey === k))
    .filter(Boolean)
  const avoids = plant.avoids
    .map(k => plants.find(p => p.plantKey === k))
    .filter(Boolean)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-cream overflow-y-auto"
        >
          <div className="max-w-[480px] mx-auto px-5 py-6 pb-24">
            {/* Back button */}
            <button
              onClick={onClose}
              className="flex items-center gap-1 font-hand text-sage text-lg mb-4 active:scale-[0.98] transition-transform"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4l-6 6 6 6" />
              </svg>
              back to plants
            </button>

            {/* Botanical illustration area */}
            <div className="w-full h-32 flex items-center justify-center bg-linen rounded-card mb-5">
              <svg width="64" height="64" viewBox="0 0 40 40" fill="none" stroke="var(--color-sage)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
                <path d="M20 35V18" />
                <path d="M14 22c-5-1-8-5-6-10 4-.5 8 2 10 6" />
                <path d="M26 18c4-2 8-1 9 3-3 2-7 1-9-2" />
                <path d="M16 28c-3 0-5-2-5-4 3-1 5.5 0 6.5 2" />
                <path d="M24 28c3 0 5-2 5-4-3-1-5.5 0-6.5 2" />
                <circle cx="20" cy="12" r="3" strokeDasharray="2 2" />
              </svg>
            </div>

            {/* Name */}
            <h1 className="font-display text-forest text-2xl mb-1">{plant.commonName}</h1>
            <p className="font-body text-text-soft italic mb-3">{plant.latinName}</p>

            {/* Type pills */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {plant.types.map(type => (
                <span key={type} className={`px-2.5 py-1 rounded-pill text-xs font-body ${typeColors[type] || 'bg-alt text-text-soft'}`}>
                  {type}
                </span>
              ))}
            </div>

            {/* Safety note — Valerian only */}
            {plant.safetyNote && (
              <div className="bg-terra/15 border border-terra/30 rounded-card p-4 mb-5">
                <p className="font-body text-sm text-text font-medium">{plant.safetyNote}</p>
              </div>
            )}

            {/* Growing notes */}
            <div className="bg-linen rounded-card p-4 mb-4">
              <h3 className="font-display text-forest text-sm mb-2">growing notes</h3>
              <p className="font-body text-text text-sm leading-relaxed">{plant.growingNotes}</p>
            </div>

            {/* Quick facts grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-linen rounded-card p-3">
                <p className="font-body text-xs text-text-soft">germination</p>
                <p className="font-hand text-text text-lg">{plant.germinationDays.min}–{plant.germinationDays.max} days</p>
              </div>
              <div className="bg-linen rounded-card p-3">
                <p className="font-body text-xs text-text-soft">temp</p>
                <p className="font-hand text-text text-lg">{plant.germinationTemp}</p>
              </div>
              <div className="bg-linen rounded-card p-3">
                <p className="font-body text-xs text-text-soft">zone</p>
                <p className="font-hand text-text text-lg">{plant.sowingZone}</p>
              </div>
              <div className="bg-linen rounded-card p-3">
                <p className="font-body text-xs text-text-soft">start</p>
                <p className="font-hand text-text text-lg">{plant.startWeek}</p>
              </div>
            </div>

            {/* Pre-treatment */}
            {plant.pretreatment && (
              <div className="bg-amber/40 rounded-card p-4 mb-4">
                <h3 className="font-display text-forest text-sm mb-1">pre-treatment</h3>
                <p className="font-body text-text text-sm">{plant.pretreatment}</p>
              </div>
            )}

            {/* Harvest */}
            <div className="bg-linen rounded-card p-4 mb-4">
              <h3 className="font-display text-forest text-sm mb-2">harvesting</h3>
              <p className="font-body text-text text-sm leading-relaxed">{plant.harvestMethod}</p>
            </div>

            {/* Medicinal properties */}
            {plant.medicinalProperties && (
              <div className="bg-cool/10 border border-cool/20 rounded-card p-4 mb-4">
                <h3 className="font-display text-forest text-sm mb-2">medicinal uses</h3>
                <p className="font-body text-text text-sm leading-relaxed">{plant.medicinalProperties}</p>
              </div>
            )}

            {/* Companions */}
            {companions.length > 0 && (
              <div className="mb-4">
                <h3 className="font-display text-forest text-sm mb-2">good companions</h3>
                <div className="flex flex-wrap gap-1.5">
                  {companions.map(c => (
                    <span key={c.plantKey} className="bg-sage/10 px-2.5 py-1 rounded-pill font-hand text-sm text-sage">
                      {c.commonName}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Avoids */}
            {avoids.length > 0 && (
              <div className="mb-4">
                <h3 className="font-display text-forest text-sm mb-2">keep apart from</h3>
                <div className="flex flex-wrap gap-1.5">
                  {avoids.map(a => (
                    <span key={a.plantKey} className="bg-terra/10 px-2.5 py-1 rounded-pill font-hand text-sm text-terra">
                      {a.commonName}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Containers */}
            {plantContainers.length > 0 && (
              <div className="mb-4">
                <h3 className="font-display text-forest text-sm mb-2">planted in</h3>
                <div className="flex flex-wrap gap-1.5">
                  {plantContainers.map(c => (
                    <span key={c.containerId} className="bg-linen px-2.5 py-1 rounded-pill font-hand text-sm text-text">
                      {c.emoji} {c.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
