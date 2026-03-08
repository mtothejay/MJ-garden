import BottomNav from './BottomNav'

export default function Layout({ children }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <main className="flex-1 w-full max-w-[480px] mx-auto px-4 pb-24 pt-6">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
