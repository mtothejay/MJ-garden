import { useState, useEffect, useCallback } from 'react'
import { loadState, saveState } from '../store/gardenStore'

export default function useGardenState() {
  const [state, setState] = useState(loadState)

  useEffect(() => {
    saveState(state)
  }, [state])

  const updateTrayCell = useCallback((trayId, cellId, updates) => {
    setState(prev => ({
      ...prev,
      trays: {
        ...prev.trays,
        [`${trayId}-${cellId}`]: {
          ...(prev.trays[`${trayId}-${cellId}`] || {}),
          ...updates,
        },
      },
    }))
  }, [])

  const sowCell = useCallback((trayId, cellId) => {
    updateTrayCell(trayId, cellId, { sownDate: new Date().toISOString().slice(0, 10) })
  }, [updateTrayCell])

  const sproutCell = useCallback((trayId, cellId) => {
    updateTrayCell(trayId, cellId, { sproutedDate: new Date().toISOString().slice(0, 10) })
  }, [updateTrayCell])

  const setCellLocation = useCallback((trayId, cellId, location) => {
    updateTrayCell(trayId, cellId, { location })
  }, [updateTrayCell])

  const waterContainer = useCallback((containerId) => {
    const today = new Date().toISOString().slice(0, 10)
    setState(prev => {
      const container = prev.containers[containerId] || { wateredDates: [] }
      const dates = container.wateredDates || []
      if (dates[dates.length - 1] === today) return prev
      return {
        ...prev,
        containers: {
          ...prev.containers,
          [containerId]: {
            ...container,
            wateredDates: [...dates, today],
          },
        },
      }
    })
  }, [])

  const setContainerLocation = useCallback((containerId, location) => {
    setState(prev => ({
      ...prev,
      containers: {
        ...prev.containers,
        [containerId]: {
          ...(prev.containers[containerId] || {}),
          location,
        },
      },
    }))
  }, [])

  const toggleChecklist = useCallback((taskId) => {
    setState(prev => {
      const existing = prev.checklist[taskId]
      return {
        ...prev,
        checklist: {
          ...prev.checklist,
          [taskId]: {
            completed: !existing?.completed,
            completedDate: !existing?.completed ? new Date().toISOString().slice(0, 10) : null,
          },
        },
      }
    })
  }, [])

  const setWeatherMode = useCallback((mode) => {
    setState(prev => ({ ...prev, weatherMode: mode }))
  }, [])

  const setWeatherCache = useCallback((data) => {
    setState(prev => ({
      ...prev,
      weatherCache: { data, fetchedAt: new Date().toISOString() },
    }))
  }, [])

  return {
    state,
    setState,
    sowCell,
    sproutCell,
    setCellLocation,
    waterContainer,
    setContainerLocation,
    toggleChecklist,
    setWeatherMode,
    setWeatherCache,
  }
}
