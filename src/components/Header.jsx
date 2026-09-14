export default function Header({ greetingName, action }) {
  const today = new Date().toLocaleDateString('de-DE', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <header className="flex items-start justify-between px-8 py-6 border-b border-claimm-dark/10">
      <div>
        <h1 className="text-2xl font-semibold text-claimm-dark">
          {greetingName ? `Guten Morgen, ${greetingName}` : today}
        </h1>
        {greetingName && <p className="text-sm text-claimm-dark/60 mt-1">{today}</p>}
      </div>
      {action}
    </header>
  )
}
