import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight } from 'lucide-react'
import { gfMorgenbriefing } from '../../data/mockData'

export default function MorningBriefing() {
  return (
    <div className="bg-white dark:bg-white/5 border border-claimm-dark/10 dark:border-white/10 rounded-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={16} className="text-claimm-red" />
        <span className="text-xs font-semibold text-claimm-red uppercase tracking-wide">Morgenbriefing</span>
      </div>

      <p className="text-sm text-claimm-dark/90 dark:text-white/90 mb-3">3 Punkte benötigen Ihre Entscheidung:</p>
      <ul className="flex flex-col gap-2 mb-5">
        {gfMorgenbriefing.entscheidungspunkte.map((p) => (
          <li key={p.text}>
            <Link
              to={p.link}
              className="flex items-center justify-between gap-2 text-sm text-claimm-dark/80 dark:text-white/80 hover:text-claimm-dark dark:hover:text-white bg-claimm-beige dark:bg-white/5 hover:bg-claimm-dark/5 dark:hover:bg-white/10 rounded px-3 py-2 transition-colors"
            >
              <span>→ {p.text}</span>
              <ArrowRight size={14} className="shrink-0" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-claimm-dark/10 dark:border-white/10">
        <div>
          <p className="text-xs text-claimm-dark/40 dark:text-white/40">Portfolio</p>
          <p className="text-sm text-claimm-dark dark:text-white font-medium mt-0.5">{gfMorgenbriefing.portfolio}</p>
        </div>
        <div>
          <p className="text-xs text-claimm-dark/40 dark:text-white/40">Pipeline</p>
          <p className="text-sm text-claimm-dark dark:text-white font-medium mt-0.5">{gfMorgenbriefing.pipeline}</p>
        </div>
        <div>
          <p className="text-xs text-claimm-dark/40 dark:text-white/40">Liquidität</p>
          <p className="text-sm text-claimm-dark dark:text-white font-medium mt-0.5">{gfMorgenbriefing.liquiditaet}</p>
        </div>
      </div>
    </div>
  )
}
