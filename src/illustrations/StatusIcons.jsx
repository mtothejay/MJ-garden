export function InsideIcon({ size = 20, color = '#5C7A5E' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10l7-7 7 7" />
      <path d="M5 9v7a1 1 0 001 1h8a1 1 0 001-1V9" />
      <rect x="8" y="12" width="4" height="5" rx="0.5" />
    </svg>
  )
}

export function HardeningIcon({ size = 20, color = '#8A9BAD' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v2M3.5 5.5l1.4 1.4M16.5 5.5l-1.4 1.4" />
      <circle cx="10" cy="11" r="5" />
      <path d="M10 6v5" />
      <path d="M5 16h10" strokeDasharray="2 2" />
    </svg>
  )
}

export function OutsideIcon({ size = 20, color = '#C4714A' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="4" />
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.93 4.93l1.41 1.41M13.66 13.66l1.41 1.41M4.93 15.07l1.41-1.41M13.66 6.34l1.41-1.41" />
    </svg>
  )
}

export function SproutIcon({ size = 20, color = '#2D4A2F' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 18V9" />
      <path d="M7 12c-3-.5-4-3-3-5.5 2.5 0 4.5 1.5 5.5 4" />
      <path d="M13 9c2.5-1 5-.5 5.5 2-2 1-4.5.5-5.5-1" />
    </svg>
  )
}

export function SeedIcon({ size = 12, color = '#5C7A5E' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill={color} stroke="none">
      <ellipse cx="6" cy="6" rx="2.5" ry="3.5" transform="rotate(-15 6 6)" opacity="0.6" />
    </svg>
  )
}

export function LeafIcon({ size = 16, color = '#C4714A' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14C4 8 8 2 14 2c0 6-4 10-10 12z" />
      <path d="M4 14c2-3 5-6 10-10" />
    </svg>
  )
}
