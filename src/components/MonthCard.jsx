import { useState } from 'react'
import ChecklistItem from './ChecklistItem'

export default function MonthCard({ monthData, checklist, onToggle, isCurrentMonth }) {
  const [expanded, setExpanded] = useState(isCurrentMonth)

  const completedCount = monthData.tasks.filter(t => checklist[t.taskId]?.completed).length
  const totalCount = monthData.tasks.length
  const progress = totalCount > 0 ? completedCount / totalCount : 0

  return (
    <div className={`bg-cream rounded-card shadow-card border overflow-hidden transition-all duration-soft ${
      isCurrentMonth ? 'border-sage/30' : 'border-sage/10'
    }`}>
      {/* Header — always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-4 active:bg-linen/50 transition-colors"
      >
        <div className="flex items-center justify-between mb-1">
          <h2 className="font-display text-forest text-xl">{monthData.title}</h2>
          {isCurrentMonth && (
            <span className="font-hand text-terra text-sm">now</span>
          )}
        </div>
        <p className="font-hand text-text-soft text-base italic">{monthData.subtitle}</p>

        {/* Progress vine */}
        <div className="mt-3 h-1.5 bg-linen rounded-full overflow-hidden">
          <div
            className="h-full bg-sage/40 rounded-full transition-all duration-700"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <p className="font-hand text-text-soft text-sm mt-1">
          {completedCount} of {totalCount}
        </p>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-4 pb-4 space-y-3">
          {/* Narrative */}
          <p className="font-display italic text-text text-sm leading-relaxed border-t border-sage/10 pt-3">
            {monthData.narrative}
          </p>

          {/* Checklist */}
          <div className="space-y-0.5">
            {monthData.tasks.map(task => (
              <ChecklistItem
                key={task.taskId}
                text={task.text}
                completed={checklist[task.taskId]?.completed || false}
                onToggle={() => onToggle(task.taskId)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
