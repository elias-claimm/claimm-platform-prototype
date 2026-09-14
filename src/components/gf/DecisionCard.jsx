import { useState } from 'react'

const DECISION_LABELS = {
  freigegeben: 'Freigegeben',
  abgelehnt: 'Abgelehnt',
  zurückgestellt: 'Zurückgestellt',
}

export default function DecisionCard({ decision }) {
  const [entscheidung, setEntscheidung] = useState(null)

  return (
    <div className="bg-white/5 border border-white/10 rounded-md p-5">
      <p className="text-sm font-semibold text-white">{decision.thema}</p>
      <p className="text-xs text-white/50 mt-2">{decision.auswirkung}</p>
      <p className="text-xs text-white/70 mt-2 leading-relaxed">{decision.empfehlung}</p>
      <p className="text-xs text-claimm-red mt-3">Frist: {decision.frist}</p>

      {entscheidung ? (
        <p className="text-sm font-medium text-white mt-4">{DECISION_LABELS[entscheidung]}</p>
      ) : (
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setEntscheidung('freigegeben')}
            className="flex-1 text-xs font-medium py-2 rounded bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            Freigeben
          </button>
          <button
            onClick={() => setEntscheidung('abgelehnt')}
            className="flex-1 text-xs font-medium py-2 rounded bg-claimm-red text-white hover:bg-claimm-red/90 transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={() => setEntscheidung('zurückgestellt')}
            className="flex-1 text-xs font-medium py-2 rounded bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            Zurückstellen
          </button>
        </div>
      )}
    </div>
  )
}
