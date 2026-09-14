import { useState } from 'react'
import { ArrowRight, Check, Clock } from 'lucide-react'
import { freigabeWorkflow, anschreibenEntwurf } from '../../data/mockData'

export default function Phase4Freigabe({ onNext }) {
  const [entwurf, setEntwurf] = useState(anschreibenEntwurf)

  return (
    <div className="max-w-2xl flex flex-col gap-6">
      <div>
        <h2 className="text-lg font-semibold text-claimm-dark dark:text-white mb-1">Freigabe &amp; Einreichung</h2>
        <p className="text-sm text-claimm-dark/60 dark:text-white/50">Freigabeworkflow und Anschreiben an den Auftraggeber.</p>
      </div>

      <div className="bg-white dark:bg-white/5 border border-claimm-dark/10 dark:border-white/10 rounded-md p-5">
        <h3 className="text-sm font-semibold text-claimm-dark dark:text-white mb-4">Freigabeworkflow</h3>
        <ol className="flex flex-col gap-3">
          {freigabeWorkflow.map((step, i) => (
            <li key={i} className="flex items-center gap-3">
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                  step.status === 'abgeschlossen'
                    ? 'bg-green-600 text-white'
                    : step.status === 'in Prüfung'
                    ? 'bg-amber-500 text-white'
                    : 'bg-claimm-dark/10 dark:bg-white/10 text-claimm-dark/40 dark:text-white/40'
                }`}
              >
                {step.status === 'abgeschlossen' ? <Check size={14} /> : <Clock size={14} />}
              </span>
              <div>
                <p className="text-sm font-medium text-claimm-dark dark:text-white">{step.rolle}</p>
                <p className="text-xs text-claimm-dark/50 dark:text-white/40">
                  {step.name} · {step.status}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="bg-white dark:bg-white/5 border border-claimm-dark/10 dark:border-white/10 rounded-md p-5">
        <h3 className="text-sm font-semibold text-claimm-dark dark:text-white mb-3">KI-generierter Entwurf des Anschreibens</h3>
        <textarea
          className="w-full border border-claimm-dark/20 dark:border-white/20 rounded px-3 py-2.5 text-sm text-claimm-dark dark:text-white bg-white dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-claimm-red/40 focus:border-claimm-red font-sans"
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
