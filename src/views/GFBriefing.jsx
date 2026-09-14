import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'
import MorningBriefing from '../components/gf/MorningBriefing'
import DecisionCard from '../components/gf/DecisionCard'
import ChatPanel from '../components/gf/ChatPanel'
import PortfolioMinimap from '../components/gf/PortfolioMinimap'
import { gfEntscheidungen } from '../data/mockData'

export default function GFBriefing() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const datum = now.toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })
  const uhrzeit = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', second: '2-digit' })

  return (
    <div className="min-h-full bg-claimm-beige dark:bg-claimm-dark transition-colors">
      <div className="flex items-start justify-between px-8 py-6 border-b border-claimm-dark/10 dark:border-white/10">
        <div>
          <h1 className="text-2xl font-semibold text-claimm-dark dark:text-white">Guten Morgen, Michal.</h1>
          <p className="text-sm text-claimm-dark/60 dark:text-white/50 mt-1">
            {datum} · {uhrzeit}
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-claimm-red rounded-full px-3 py-1.5 shrink-0">
          <Sparkles size={12} />
          KI-Assistent aktiv
        </span>
      </div>

      <div className="p-8 flex flex-col gap-6">
        <MorningBriefing />

        <div>
          <h2 className="text-sm font-semibold text-claimm-dark/70 dark:text-white/70 uppercase tracking-wide mb-3">Entscheidungen heute</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gfEntscheidungen.map((d) => (
              <DecisionCard key={d.id} decision={d} />
            ))}
          </div>
        </div>

        <ChatPanel />

        <PortfolioMinimap />
      </div>
    </div>
  )
}
