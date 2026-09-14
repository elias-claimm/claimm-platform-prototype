import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { lessonsLearnedFelder } from '../../data/mockData'

const BEAUFTRAGTER_WERT = 232000

const FIELD_LABELS = {
  erfolgsfaktoren: 'Erfolgsfaktoren',
  wiederkehrendeRisiken: 'Wiederkehrende Risiken',
  empfehlungFuerKuenftigeProjekte: 'Empfehlung für künftige Projekte',
}

function formatEUR(value) {
  return value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
}

export default function Phase6Abschluss() {
  const [felder, setFelder] = useState(lessonsLearnedFelder)

  return (
    <div className="max-w-2xl flex flex-col gap-6">
      <div>
        <h2 className="text-lg font-semibold text-claimm-dark mb-1">Abschluss</h2>
        <p className="text-sm text-claimm-dark/60">Nachtrag beauftragt und an die Abrechnung übergeben.</p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-md p-5 flex items-start gap-3">
        <CheckCircle2 size={22} className="text-green-700 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-green-900">Nachtrag erfolgreich beauftragt</p>
          <p className="text-sm text-green-800 mt-1">
            Beauftragter Wert: <span className="font-semibold">{formatEUR(BEAUFTRAGTER_WERT)}</span>
          </p>
          <p className="text-xs text-green-700 mt-2">
            Der Vorgang wurde an M6 „Angebote &amp; Rechnungen“ zur Abrechnung übergeben.
          </p>
        </div>
      </div>

      <div className="bg-white border border-claimm-dark/10 rounded-md p-5">
        <h3 className="text-sm font-semibold text-claimm-dark mb-4">Lessons Learned</h3>
        <div className="flex flex-col gap-4">
          {Object.keys(felder).map((key) => (
            <div key={key}>
              <label className="block text-xs font-medium text-claimm-dark/70 mb-1.5">{FIELD_LABELS[key]}</label>
              <textarea
                className="w-full border border-claimm-dark/20 rounded px-3 py-2 text-sm text-claimm-dark bg-white focus:outline-none focus:ring-2 focus:ring-claimm-red/40 focus:border-claimm-red"
                rows={2}
                value={felder[key]}
                onChange={(e) => setFelder({ ...felder, [key]: e.target.value })}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
