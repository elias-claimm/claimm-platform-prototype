import { useState } from 'react'
import { Check } from 'lucide-react'
import WidgetCard from './WidgetCard'
import { offeneFreigaben } from '../../data/mockData'

export default function ApprovalsWidget() {
  const [freigaben, setFreigaben] = useState(
    offeneFreigaben.map((f) => ({ ...f, entscheidung: null }))
  )

  function entscheiden(id, entscheidung) {
    setFreigaben((prev) => prev.map((f) => (f.id === id ? { ...f, entscheidung } : f)))
  }

  return (
    <WidgetCard title="Offene Freigaben" icon={Check}>
      <ul className="flex flex-col gap-3">
        {freigaben.map((f) => (
          <li key={f.id} className="border border-claimm-dark/10 rounded p-3">
            <p className="text-sm text-claimm-dark leading-snug">{f.titel}</p>
            <p className="text-xs text-claimm-dark/50 mt-1">
              {f.modul} · {f.antragsteller} · Frist {f.frist}
            </p>
            {f.entscheidung ? (
              <p className="text-xs font-medium mt-2">
                {f.entscheidung === 'freigegeben' ? (
                  <span className="text-green-700">Freigegeben</span>
                ) : (
                  <span className="text-claimm-red">Abgelehnt</span>
                )}
              </p>
            ) : (
              <div className="flex gap-2 mt-2.5">
                <button
                  onClick={() => entscheiden(f.id, 'freigegeben')}
                  className="flex-1 text-xs font-medium py-1.5 rounded bg-green-600 text-white hover:bg-green-700 transition-colors"
                >
                  Freigeben
                </button>
                <button
                  onClick={() => entscheiden(f.id, 'abgelehnt')}
                  className="flex-1 text-xs font-medium py-1.5 rounded bg-claimm-red text-white hover:bg-claimm-red/90 transition-colors"
                >
                  Ablehnen
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </WidgetCard>
  )
}
