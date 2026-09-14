import { useState } from 'react'
import { ArrowRight, Check, Clock } from 'lucide-react'
import { freigabeWorkflow, anschreibenEntwurf } from '../../data/mockData'

export default function Phase4Freigabe({ onNext }) {
  const [entwurf, setEntwurf] = useState(anschreibenEntwurf)

  return (
    <div className="max-w-2xl flex flex-col gap-6">
      <div>
        <h2 className="text-lg font-semibold text-claimm-dark mb-1">Freigabe &amp; Einreichung</h2>
        <p className="text-sm text-claimm-dark/60">Freigabeworkflow und Anschreiben an den Auftraggeber.</p>
      </div>

      <div className="bg-white border border-claimm-dark/10 rounded-md p-5">
        <h3 className="text-sm font-semibold text-claimm-dark mb-4">Freigabeworkflow</h3>
        <ol className="flex flex-col gap-3">
          {freigabeWorkflow.map((step, i) => (
            <li key={i} className="flex items-center gap-3">
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                  step.status === 'abgeschlossen'
                    ? 'bg-green-600 text-white'
                    : step.status === 'in Prüfung'
                    ? 'bg-amber-500 text-white'
                    : 'bg-claimm-dark/10 text-claimm-dark/40'
                }`}
              >
                {step.status === 'abgeschlossen' ? <Check size={14} /> : <Clock size={14} />}
              </span>
              <div>
                <p className="text-sm font-medium text-claimm-dark">{step.rolle}</p>
                <p className="text-xs text-claimm-dark/50">
                  {step.name} · {step.status}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="bg-white border border-claimm-dark/10 rounded-md p-5">
        <h3 className="text-sm font-semibold text-claimm-dark mb-3">KI-generierter Entwurf des Anschreibens</h3>
        <textarea
          className="w-full border border-claimm-dark/20 rounded px-3 py-2.5 text-sm text-claimm-dark bg-white focus:outline-none focus:ring-2 focus:ring-claimm-red/40 focus:border-claimm-red font-sans"
          rows={12}
          value={entwurf}
          onChange={(e) => setEntwurf(e.target.value)}
        />
      </div>

      <button
        onClick={onNext}
        className="self-start inline-flex items-center gap-2 text-sm font-medium text-white bg-claimm-red rounded px-4 py-2.5 hover:bg-claimm-red/90 transition-colors"
      >
        Extern einreichen
        <ArrowRight size={16} />
      </button>
    </div>
  )
}
