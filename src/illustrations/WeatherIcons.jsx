const iconProps = { width: 32, height: 32, viewBox: '0 0 32 32', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function SunnyIcon({ size = 32, color = '#C4714A' }) {
  return (
    <svg {...iconProps} width={size} height={size} stroke={color}>
      <circle cx="16" cy="16" r="6" />
      <path d="M16 4v4M16 24v4M6.34 6.34l2.83 2.83M22.83 22.83l2.83 2.83M4 16h4M24 16h4M6.34 25.66l2.83-2.83M22.83 9.17l2.83-2.83" />
    </svg>
  )
}

export function PartlyCloudyIcon({ size = 32, color = '#5C7A5E' }) {
  return (
    <svg {...iconProps} width={size} height={size} stroke={color}>
      <circle cx="20" cy="10" r="5" />
      <path d="M20 2v2M28 10h2M25.66 4.34l1.41 1.41" />
      <path d="M8 28a6 6 0 010-12h1a7 7 0 0113.5 1.5A5 5 0 0122 28H8z" />
    </svg>
  )
}

export function CloudyIcon({ size = 32, color = '#8A9BAD' }) {
  return (
    <svg {...iconProps} width={size} height={size} stroke={color}>
      <path d="M8 26a6 6 0 010-12h1a7 7 0 0113.5 1.5A5 5 0 0122 26H8z" />
      <path d="M18 14a4 4 0 014-4 3 3 0 013 3" opacity="0.4" />
    </svg>
  )
}

export function RainIcon({ size = 32, color = '#8A9BAD' }) {
  return (
    <svg {...iconProps} width={size} height={size} stroke={color}>
      <path d="M7 20a5 5 0 010-10h1a6 6 0 0111.5 1.3A4 4 0 0120 20H7z" />
      <path d="M10 24l-1 3M15 24l-1 3M20 24l-1 3" strokeWidth="2" />
    </svg>
  )
}

export function HeavyRainIcon({ size = 32, color = '#8A9BAD' }) {
  return (
    <svg {...iconProps} width={size} height={size} stroke={color}>
      <path d="M7 18a5 5 0 010-10h1a6 6 0 0111.5 1.3A4 4 0 0120 18H7z" />
      <path d="M9 22l-2 4M13 22l-2 4M17 22l-2 4M21 22l-2 4" strokeWidth="2" />
    </svg>
  )
}

export function ThunderstormIcon({ size = 32, color = '#7A6E5F' }) {
  return (
    <svg {...iconProps} width={size} height={size} stroke={color}>
      <path d="M7 18a5 5 0 010-10h1a6 6 0 0111.5 1.3A4 4 0 0120 18H7z" />
      <path d="M14 20l-2 5h5l-2 5" strokeWidth="2" stroke="#C4714A" />
    </svg>
  )
}

export function SnowIcon({ size = 32, color = '#8A9BAD' }) {
  return (
    <svg {...iconProps} width={size} height={size} stroke={color}>
      <path d="M7 18a5 5 0 010-10h1a6 6 0 0111.5 1.3A4 4 0 0120 18H7z" />
      <circle cx="10" cy="23" r="1" fill={color} />
      <circle cx="15" cy="25" r="1" fill={color} />
      <circle cx="20" cy="23" r="1" fill={color} />
      <circle cx="12" cy="28" r="1" fill={color} />
      <circle cx="18" cy="28" r="1" fill={color} />
    </svg>
  )
}

export function WindIcon({ size = 32, color = '#8A9BAD' }) {
  return (
    <svg {...iconProps} width={size} height={size} stroke={color}>
      <path d="M3 12h15a3 3 0 100-3" />
      <path d="M3 18h19a3 3 0 110 3" />
      <path d="M6 24h10a2 2 0 100-2" opacity="0.5" />
    </svg>
  )
}

// Map Open-Meteo WMO weather codes to icons
const wmoMap = {
  0: SunnyIcon,
  1: SunnyIcon,
  2: PartlyCloudyIcon,
  3: CloudyIcon,
  45: CloudyIcon,
  48: CloudyIcon,
  51: RainIcon,
  53: RainIcon,
  55: HeavyRainIcon,
  56: RainIcon,
  57: HeavyRainIcon,
  61: RainIcon,
  63: HeavyRainIcon,
  65: HeavyRainIcon,
  66: RainIcon,
  67: HeavyRainIcon,
  71: SnowIcon,
  73: SnowIcon,
  75: SnowIcon,
  77: SnowIcon,
  80: RainIcon,
  81: HeavyRainIcon,
  82: HeavyRainIcon,
  85: SnowIcon,
  86: SnowIcon,
  95: ThunderstormIcon,
  96: ThunderstormIcon,
  99: ThunderstormIcon,
}

export function WeatherIcon({ code, size = 32, color }) {
  const Icon = wmoMap[code] || PartlyCloudyIcon
  return <Icon size={size} color={color} />
}
