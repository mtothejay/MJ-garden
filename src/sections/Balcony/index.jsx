import { useState } from 'react'
import BalconyMap from '../../components/BalconyMap'
import ContainerCard from '../../components/ContainerCard'
import WeatherModeToggle from '../../components/WeatherModeToggle'
import useGardenState from '../../hooks/useGardenState'

export default function Balcony() {
  const { state, waterContainer, setContainerLocation, setWeatherMode } = useGardenState()
  const [activeContainer, setActiveContainer] = useState(null)

  return (
    <div className="space-y-5">
      <h1 className="font-display text-forest text-2xl">the balcony</h1>

      {/* Weather mode */}
      <div>
        <p className="font-body text-xs text-text-soft mb-2">watering mode</p>
        <WeatherModeToggle
          value={state.weatherMode}
          onChange={setWeatherMode}
        />
      </div>

      {/* Map */}
      <BalconyMap
        gardenState={state}
        onContainerTap={(id) => setActiveContainer(id)}
      />

      <p className="font-hand text-text-soft text-center">tap a container to see details</p>

      {/* Container drawer */}
      <ContainerCard
        isOpen={!!activeContainer}
        onClose={() => setActiveContainer(null)}
        containerId={activeContainer}
        gardenState={state}
        weatherMode={state.weatherMode}
        onWater={waterContainer}
        onLocationChange={setContainerLocation}
      />
    </div>
  )
}
