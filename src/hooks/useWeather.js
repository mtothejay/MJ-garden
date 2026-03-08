import { useState, useEffect, useCallback } from 'react'

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=45.5017&longitude=-73.5673&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max,weathercode&current_weather=true&timezone=America%2FToronto'

const CACHE_KEY = 'mj-garden-weather'
const CACHE_DURATION = 3 * 60 * 60 * 1000 // 3 hours

const WMO_DESCRIPTIONS = {
  0: 'clear sky',
  1: 'mainly clear',
  2: 'partly cloudy',
  3: 'overcast',
  45: 'foggy',
  48: 'depositing rime fog',
  51: 'light drizzle',
  53: 'drizzle',
  55: 'dense drizzle',
  61: 'slight rain',
  63: 'rain',
  65: 'heavy rain',
  71: 'slight snow',
  73: 'snow',
  75: 'heavy snow',
  80: 'rain showers',
  81: 'heavy rain showers',
  82: 'violent rain showers',
  95: 'thunderstorm',
  96: 'thunderstorm with hail',
  99: 'heavy thunderstorm',
}

function getEditorialLine(current) {
  if (!current) return 'checking the sky...'
  const temp = current.temperature
  const code = current.weathercode

  if (code >= 95) return 'stormy — everything stays inside today'
  if (code >= 61 && temp < 10) return 'cold rain — a day for planning, not planting'
  if (code >= 61) return 'raining — the garden waters itself today'
  if (code >= 51) return 'a gentle drizzle — the seedlings will like this'
  if (temp < 0) return 'below zero — winter is still holding on'
  if (temp < 5) return 'chilly — spring is taking its time'
  if (temp < 12) return 'cool and fresh — good weather for the greens'
  if (temp < 20) return 'lovely growing weather'
  if (temp < 25) return 'warm and bright — the basil is happy'
  if (temp < 30) return 'hot today — water in the evening'
  return 'very hot — shade cloth and evening watering'
}

function deriveNudges(daily) {
  if (!daily) return []
  const nudges = []
  const today = daily.temperature_2m_min?.[0]
  const tomorrowMax = daily.temperature_2m_max?.[1]
  const tomorrowPrecip = daily.precipitation_probability_max?.[1]
  const tomorrowWind = daily.windspeed_10m_max?.[1]

  // Tonight cold
  if (today != null && today < 5) {
    nudges.push('cold night ahead — basil and tomatoes will be happier inside')
  }

  // Rain tomorrow
  if (tomorrowPrecip != null && tomorrowPrecip > 60) {
    nudges.push('rain coming tomorrow — skip watering today, the balcony will manage')
  }

  // Dry stretch (3+ days with <20% precipitation)
  const dryDays = (daily.precipitation_probability_max || []).slice(0, 5).filter(p => p < 20).length
  if (dryDays >= 3) {
    nudges.push('dry stretch ahead — the greens box will need checking every morning')
  }

  // Hot tomorrow
  if (tomorrowMax != null && tomorrowMax > 28) {
    nudges.push('hot day tomorrow — water in the evening, not the morning')
  }

  // Windy
  if (tomorrowWind != null && tomorrowWind > 40) {
    nudges.push("windy forecast — check that the delphinium isn't leaning too far")
  }

  return nudges.slice(0, 3)
}

function loadCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (raw) return JSON.parse(raw)
  } catch (e) { /* ignore */ }
  return null
}

function saveCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, fetchedAt: Date.now() }))
  } catch (e) { /* ignore */ }
}

export default function useWeather() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [stale, setStale] = useState(false)

  const fetchWeather = useCallback(async () => {
    // Check cache
    const cached = loadCache()
    if (cached && Date.now() - cached.fetchedAt < CACHE_DURATION) {
      setWeather(cached.data)
      setLoading(false)
      setStale(false)
      return
    }

    // Show cached while fetching
    if (cached) {
      setWeather(cached.data)
      setStale(true)
    }

    try {
      const res = await fetch(API_URL)
      if (!res.ok) throw new Error('Weather fetch failed')
      const data = await res.json()
      setWeather(data)
      saveCache(data)
      setStale(false)
    } catch (e) {
      console.warn('Weather fetch error:', e)
      if (!cached) setWeather(null)
      setStale(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchWeather()
  }, [fetchWeather])

  const current = weather?.current_weather
  const daily = weather?.daily
  const editorial = getEditorialLine(current)
  const nudges = deriveNudges(daily)
  const description = current ? (WMO_DESCRIPTIONS[current.weathercode] || 'checking...') : null

  // Build 5-day forecast
  const forecast = daily ? Array.from({ length: 5 }, (_, i) => ({
    date: daily.time?.[i],
    high: daily.temperature_2m_max?.[i],
    low: daily.temperature_2m_min?.[i],
    code: daily.weathercode?.[i],
    precip: daily.precipitation_probability_max?.[i],
    wind: daily.windspeed_10m_max?.[i],
  })) : []

  return {
    current,
    description,
    editorial,
    forecast,
    nudges,
    loading,
    stale,
    refresh: fetchWeather,
  }
}
