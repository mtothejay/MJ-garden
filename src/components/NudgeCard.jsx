export default function NudgeCard({ text }) {
  if (!text) return null

  return (
    <div className="bg-amber/60 border border-terra/20 rounded-card px-4 py-3 shadow-card">
      <p className="font-hand text-lg text-text leading-snug">{text}</p>
    </div>
  )
}
