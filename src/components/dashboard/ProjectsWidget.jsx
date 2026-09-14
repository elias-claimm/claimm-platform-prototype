import { useState } from 'react'
import { Building2, X } from 'lucide-react'
import WidgetCard from './WidgetCard'
import AmpelDot from '../AmpelDot'
import { projects } from '../../data/mockData'

const angezeigteProjekte = projects.slice(0, 4)

export default function ProjectsWidget() {
  const [selected, setSelected] = useState(null)

  return (
    <WidgetCard title="Meine Projekte" icon={Building2}>
      <ul className="flex flex-col gap-2">
        {angezeigteProjekte.map((p) => (
          <li key={p.id}>
            <button
              onClick={() => setSelected(p)}
              className="w-full text-left border border-claimm-dark/10 dark:border-white/10 rounded p-3 hover:border-claimm-red/40 transition-colors"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium text-claimm-dark dark:text-white">{p.name}</p>
                <AmpelDot status={p.ampel} />
              </div>
              <div className="flex gap-4 mt-2 text-xs text-claimm-dark/60 dark:text-white/50">
                <AmpelDot status={p.ampelTermine} label="Termine" />
                <AmpelDot status={p.ampelKosten} label="Kosten" />
                <AmpelDot status={p.ampelQualitaet} label="Qualität" />
              </div>
            </button>
          </li>
        ))}
      </ul>

      {selected && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white dark:bg-claimm-dark border border-transparent dark:border-white/10 rounded-md max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-claimm-dark dark:text-white">{selected.name}</h3>
                <p className="text-sm text-claimm-dark/60 dark:text-white/50">{selected.adresse}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-claimm-dark/40 dark:text-white/40 hover:text-claimm-dark dark:hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="border border-claimm-dark/10 dark:border-white/10 rounded p-3 text-center">
                <AmpelDot status={selected.ampelTermine} />
                <p className="text-xs text-claimm-dark/60 dark:text-white/50 mt-1.5">Termine</p>
              </div>
              <div className="border border-claimm-dark/10 dark:border-white/10 rounded p-3 text-center">
                <AmpelDot status={selected.ampelKosten} />
                <p className="text-xs text-claimm-dark/60 dark:text-white/50 mt-1.5">Kosten</p>
              </div>
              <div className="border border-claimm-dark/10 dark:border-white/10 rounded p-3 text-center">
                <AmpelDot status={selected.ampelQualitaet} />
                <p className="text-xs text-claimm-dark/60 dark:text-white/50 mt-1.5">Qualität</p>
              </div>
            </div>

            <dl className="text-sm space-y-1.5">
              <div className="flex justify-between">
                <dt className="text-claimm-dark/60 dark:text-white/50">Mandatsperspektive</dt>
                <dd className="text-claimm-dark dark:text-white font-medium">{selected.perspektive}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-claimm-dark/60 dark:text-white/50">Verantwortlich</dt>
                <dd className="text-claimm-dark dark:text-white font-medium">{selected.verantwortlich}</dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </WidgetCard>
  )
}
