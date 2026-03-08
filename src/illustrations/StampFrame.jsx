export default function StampFrame({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 260"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d={`
            M 10 5
            Q 15 0, 25 5 Q 35 10, 45 5 Q 55 0, 65 5 Q 75 10, 85 5
            Q 95 0, 105 5 Q 115 10, 125 5 Q 135 0, 145 5 Q 155 10, 165 5
            Q 175 0, 185 5 Q 195 10, 195 15
            Q 200 25, 195 35 Q 190 45, 195 55 Q 200 65, 195 75
            Q 190 85, 195 95 Q 200 105, 195 115 Q 190 125, 195 135
            Q 200 145, 195 155 Q 190 165, 195 175 Q 200 185, 195 195
            Q 190 205, 195 215 Q 200 225, 195 235 Q 190 245, 185 250
            Q 175 260, 165 255 Q 155 250, 145 255 Q 135 260, 125 255
            Q 115 250, 105 255 Q 95 260, 85 255 Q 75 250, 65 255
            Q 55 260, 45 255 Q 35 250, 25 255 Q 15 260, 10 255
            Q 0 245, 5 235 Q 10 225, 5 215 Q 0 205, 5 195
            Q 10 185, 5 175 Q 0 165, 5 155 Q 10 145, 5 135
            Q 0 125, 5 115 Q 10 105, 5 95 Q 0 85, 5 75
            Q 10 65, 5 55 Q 0 45, 5 35 Q 10 25, 5 15
            Q 0 5, 10 5 Z
          `}
          stroke="rgba(92, 122, 94, 0.25)"
          strokeWidth="1.5"
          fill="var(--color-cream)"
        />
      </svg>
      <div className="relative z-10 p-4">
        {children}
      </div>
    </div>
  )
}
