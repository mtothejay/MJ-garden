import { useState } from 'react'
import plants from '../../data/plants.json'
import StampCard from '../../components/StampCard'
import PlantDetail from '../../components/PlantDetail'

const filterOptions = [
  { label: 'all', value: 'all' },
  { label: 'herb', value: 'herb' },
  { label: 'flower', value: 'flower' },
  { label: 'medicinal', value: 'medicinal' },
  { label: 'edible', value: 'edible' },
  { label: 'direct sow', value: 'direct-sow' },
]

export default function Plants() {
  const [filters, setFilters] = useState(['all'])
  const [selectedPlant, setSelectedPlant] = useState(null)

  const toggleFilter = (value) => {
    if (value === 'all') {
      setFilters(['all'])
      return
    }
    setFilters(prev => {
      const next = prev.filter(f => f !== 'all')
      if (next.includes(value)) {
        const result = next.filter(f => f !== value)
        return result.length === 0 ? ['all'] : result
      }
      return [...next, value]
    })
  }

  const filtered = filters.includes('all')
    ? plants
    : plants.filter(p => {
        if (filters.includes('direct-sow') && p.startWeek === 'direct-sow') return true
        return p.types.some(t => filters.includes(t))
      })

  return (
    <div className="space-y-5">
      <h1 className="font-display text-forest text-2xl">the plants</h1>

      {/* Filter bar */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
        {filterOptions.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => toggleFilter(value)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-pill font-hand text-base transition-all duration-soft ${
              filters.includes(value)
                ? 'bg-sage text-cream'
                : 'bg-linen text-text-soft'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="font-hand text-text-soft">
        {filtered.length} {filtered.length === 1 ? 'variety' : 'varieties'}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3">
        {filtered.map(plant => (
          <StampCard
            key={plant.plantKey}
            plant={plant}
            onTap={() => setSelectedPlant(plant.plantKey)}
          />
        ))}
      </div>

      {/* Detail overlay */}
      <PlantDetail
        plantKey={selectedPlant}
        isOpen={!!selectedPlant}
        onClose={() => setSelectedPlant(null)}
      />
    </div>
  )
}
