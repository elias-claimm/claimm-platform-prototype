import { useState } from 'react'
import { LayoutGrid, X } from 'lucide-react'
import AmpelDot from '../AmpelDot'
import { projects } from '../../data/mockData'

export default function PortfolioMinimap() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="bg-white/5 border border-white/10 rounded-md p-5">
      <div className="flex items-center gap-2 mb-4">
        <LayoutGrid size={16} className="text-claimm-red" />
        <h2 className="text-sm font-semibold text-white">Portfolio-Minimap</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelected(p)}
            className="text-left bg-white/5 border border-white/10 rounded p-3 hover:border-claimm-red/50 transition-colors"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <p className="text-xs font-medium text-white truncate">{p.name}</p>
              <AmpelDot status={p.ampel} />
            </div>
            <div className="flex gap-2">
              <AmpelDot status={p.ampelTermine} />
              <AmpelDot status={p.ampelKosten} />
              <AmpelDot status={p.ampelQualitaet} />
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#1A1A1A] border border-white/10 rounded-md max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{selected.name}</h3>
                <p className="text-sm text-white/50">{selected.adresse}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-white/40 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="border border-white/10 rounded p-3 text-center">
                <AmpelDot status={selected.ampelTermine} />
                <p className="text-xs text-white/50 mt-1.5">Termine</p>
              </div>
              <div className="border border-white/10 rounded p-3 text-center">
                <AmpelDot status={selected.ampelKosten} />
                <p className="text-xs text-white/50 mt-1.5">Kosten</p>
              </div>
              <div className="border border-white/10 rounded p-3 text-center">
                <AmpelDot status={selected.ampelQualitaet} />
                <p className="text-xs text-white/50 mt-1.5">Qualität</p>
              </div>
            </div>

            <dl className="text-sm space-y-1.5">
              <div className="flex justify-between">
                <dt className="text-white/50">Mandatsperspektive</dt>
                <dd className="text-white font-medium">{selected.perspektive}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/50">Verantwortlich</dt>
                <dd className="text-white font-medium">{selected.verantwortlich}</dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  )
}
