import { useState } from 'react'
import soilMixes from '../data/soilMixes.json'

export default function BagCalculator() {
  const [purchased, setPurchased] = useState(
    soilMixes.shoppingList.reduce((acc, item) => ({ ...acc, [item.item]: 0 }), {})
  )

  const handleChange = (item, value) => {
    setPurchased(prev => ({ ...prev, [item]: Math.max(0, parseInt(value) || 0) }))
  }

  const totalSpent = soilMixes.shoppingList.reduce((sum, item) => {
    return sum + (purchased[item.item] || 0) * (item.cost / item.quantity)
  }, 0)

  return (
    <div className="bg-cream rounded-card p-4 shadow-card border border-sage/10">
      <h3 className="font-display text-forest text-lg mb-3">bag calculator</h3>

      <div className="space-y-3">
        {soilMixes.shoppingList.map(item => {
          const bought = purchased[item.item] || 0
          const remaining = item.quantity - bought
          const unitCost = item.cost / item.quantity

          return (
            <div key={item.item} className="flex items-center gap-3">
              <div className="flex-1">
                <p className="font-body text-sm text-text">{item.item}</p>
                <p className="font-hand text-xs text-text-soft">
                  need {item.quantity} · ${item.cost} total
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleChange(item.item, bought - 1)}
                  className="w-8 h-8 rounded-full bg-linen flex items-center justify-center font-hand text-lg text-text-soft active:scale-95"
                >
                  −
                </button>
                <span className="font-hand text-lg text-text w-6 text-center">{bought}</span>
                <button
                  onClick={() => handleChange(item.item, bought + 1)}
                  className="w-8 h-8 rounded-full bg-linen flex items-center justify-center font-hand text-lg text-text-soft active:scale-95"
                >
                  +
                </button>
              </div>
              <span className={`font-hand text-sm w-16 text-right ${remaining <= 0 ? 'text-sage' : 'text-terra'}`}>
                {remaining <= 0 ? '✓ done' : `${remaining} left`}
              </span>
            </div>
          )
        })}
      </div>

      <div className="border-t border-sage/10 mt-4 pt-3 flex justify-between">
        <span className="font-body text-sm text-text-soft">spent so far</span>
        <span className="font-hand text-lg text-text">${Math.round(totalSpent)} of ${soilMixes.totalCost} {soilMixes.currency}</span>
      </div>
    </div>
  )
}
