export default function ChecklistItem({ text, completed, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-start gap-3 w-full text-left py-2 group"
    >
      <span
        className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-soft ${
          completed
            ? 'border-sage bg-sage/20'
            : 'border-sage/40 group-hover:border-sage/60'
        }`}
      >
        {completed && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#5C7A5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 5.5l2 2 4-4.5" />
          </svg>
        )}
      </span>
      <span
        className={`font-body text-[15px] leading-relaxed transition-all duration-soft ${
          completed
            ? 'text-text-soft/50'
            : 'text-text'
        }`}
      >
        {text}
      </span>
    </button>
  )
}
