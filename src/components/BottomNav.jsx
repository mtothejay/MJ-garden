import { NavLink } from 'react-router-dom'

const navItems = [
  {
    to: '/today',
    label: 'today',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#5C7A5E' : '#7A6E5F'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M16.95 16.95l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M16.95 7.05l1.42-1.42" />
        <path d="M17 10c1.5.5 3 2 3 4" opacity="0.5" />
      </svg>
    ),
  },
  {
    to: '/trays',
    label: 'trays',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#5C7A5E' : '#7A6E5F'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <line x1="9" y1="5" x2="9" y2="19" />
        <line x1="15" y1="5" x2="15" y2="19" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <circle cx="6" cy="8.5" r="1" fill={active ? '#5C7A5E' : 'none'} />
        <circle cx="12" cy="8.5" r="1" fill={active ? '#5C7A5E' : 'none'} />
      </svg>
    ),
  },
  {
    to: '/balcony',
    label: 'balcony',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#5C7A5E' : '#7A6E5F'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <rect x="5" y="6" width="5" height="4" rx="1" />
        <rect x="13" y="6" width="5" height="4" rx="1" />
        <rect x="5" y="14" width="5" height="4" rx="1" />
        <rect x="13" y="14" width="5" height="4" rx="1" />
        <line x1="3" y1="5" x2="21" y2="5" strokeWidth="2" />
      </svg>
    ),
  },
  {
    to: '/plants',
    label: 'plants',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#5C7A5E' : '#7A6E5F'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V8" />
        <path d="M8 12c-3-1-5-4-4-7 3-.5 6 1 7 4" />
        <path d="M16 12c3-1 5-4 4-7-3-.5-6 1-7 4" />
        <path d="M7 17c-2 0-4-1-4-3 2-1 4 0 5 1.5" />
        <path d="M17 17c2 0 4-1 4-3-2-1-4 0-5 1.5" />
      </svg>
    ),
  },
  {
    to: '/season',
    label: 'season',
    icon: (active) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#5C7A5E' : '#7A6E5F'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1 0 1.5.5 1.5 1.5v13c0 1-.5 1.5-1.5 1.5H4c-1 0-1.5-.5-1.5-1.5v-13C2.5 4.5 3 4 4 4z" />
        <path d="M2.5 8h19" />
        <line x1="12" y1="4" x2="12" y2="8" />
        <circle cx="8" cy="13" r="1" fill={active ? '#5C7A5E' : 'none'} />
        <circle cx="12" cy="13" r="1" fill={active ? '#5C7A5E' : 'none'} />
        <circle cx="16" cy="13" r="1" fill={active ? '#5C7A5E' : 'none'} />
        <circle cx="8" cy="17" r="1" fill={active ? '#5C7A5E' : 'none'} />
      </svg>
    ),
  },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-cream border-t border-sage/20 z-50">
      <div className="max-w-[480px] mx-auto flex justify-around items-center h-16 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="flex flex-col items-center gap-0.5 py-1 px-3 min-w-[56px]"
          >
            {({ isActive }) => (
              <>
                <span className="transition-transform duration-soft" style={{ transform: isActive ? 'scale(1.1)' : 'scale(1)' }}>
                  {item.icon(isActive)}
                </span>
                {isActive && (
                  <span className="font-hand text-sage text-sm leading-none">
                    {item.label}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
      <div className="h-[env(safe-area-inset-bottom)] bg-cream" />
    </nav>
  )
}
