import { useState } from 'react'
import { ArrowRight, Lock } from 'lucide-react'
import { verhandlungsHistorie, interneVerhandlungsnotizen } from '../../data/mockData'

function formatEUR(value) {
  return value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
}

export default function Phase5Verhandlung({ onNext }) {
  const [notizen, setNotizen] = useState(interneVerhandlungsnotizen)
  const max = Math.max(...verhandlungsHistorie.map((v) => v.betrag))

  return (
    <div className="max-w-2xl flex flex-col gap-6">
      <div>
        <h2 className="text-lg font-semibold text-claimm-dark dark:text-white mb-1">Verhandlung</h2>
        <p className="text-sm text-claimm-dark/60 dark:text-white/50">Verhandlungsverlauf und interne Notizen.</p>
      </div>

      <div className="bg-white dark:bg-white/5 border border-claimm-dark/10 dark:border-white/10 rounded-md p-5">
        <h3 className="text-sm font-semibold text-claimm-dark dark:text-white mb-4">Verhandlungshistorie</h3>
        <div className="flex flex-col gap-3">
          {verhandlungsHistorie.map((v) => (
            <div key={v.bezeichnung}>
              <div className="flex justify-between text-xs text-claimm-dark/60 dark:text-white/50 mb-1">
                <span>
                  {v.bezeichnung} · {v.datum}
                </span>
                <span className="font-medium text-claimm-dark dark:text-white">{formatEUR(v.betrag)}</span>
              </div>
              <div className="w-full h-3 bg-claimm-dark/5 dark:bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-claimm-red rounded-full transition-all"
                  style={{ width: `${(v.betrag / max) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 rounded-md p-5">
        <div className="flex items-center gap-2 mb-3">
          <Lock size={14} className="text-amber-700 dark:text-amber-400" />
          <h3 className="text-sm font-semibold text-amber-900 dark:text-amber-200">Interne Notizen (nicht extern sichtbar)</h3>
        </div>
        <textarea
          className="w-full border border-amber-300 dark:border-amber-700/50 rounded px-3 py-2.5 text-sm text-claimm-dark dark:text-white bg-white dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
          rows={5}
          value={notizen}
          onChange={(e) => setNotizen(e.target.value)}
        />
      </div>

      <button
        onClick={onNext}
        className="self-start inline-flex items-center gap-2 text-sm font-medium text-white bg-claimm-red rounded px-4 py-2.5 hover:bg-claimm-red/90 transition-colors"
      >
        Einigung dokumentieren
        <ArrowRight size={16} />
      </button>
    </div>
  )
}
