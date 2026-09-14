export default function Header() {
  const today = new Date().toLocaleDateString('de-DE', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-claimm-dark/10">
      <span className="text-sm text-claimm-dark/60">{today}</span>
    </header>
  )
}
