import { useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { positionsliste, pruefungGrund, pruefungHoehe, pruefungZusammenfassung } from '../../data/mockData'

function formatEUR(value) {
  return value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
}

const TABS = ['Prüfung dem Grunde nach', 'Prüfung der Höhe nach']

export default function Phase3Pruefung({ onNext }) {
  const [tab, setTab] = useState(TABS[0])

  return (
    <div className="max-w-3xl flex flex-col gap-6">
      <div>
        <h2 className="text-lg font-semibold text-claimm-dark mb-1">Prüfung</h2>
        <p className="text-sm text-claimm-dark/60">Zweistufige Nachtragsprüfung dem Grunde und der Höhe nach.</p>
      </div>

      <div className="bg-white border border-claimm-dark/10 rounded-md">
        <div className="flex border-b border-claimm-dark/10 px-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                tab === t
                  ? 'border-claimm-red text-claimm-red'
                  : 'border-transparent text-claimm-dark/50 hover:text-claimm-dark'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="p-5">
          <p className="text-sm text-claimm-dark/80 leading-relaxed">
            {tab === TABS[0] ? pruefungGrund : pruefungHoehe}
          </p>
        </div>
      </div>

      <div className="bg-white border border-claimm-dark/10 rounded-md overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-claimm-dark/10 text-left text-xs text-claimm-dark/50">
              <th className="px-4 py-3 font-medium">Pos.</th>
              <th className="px-4 py-3 font-medium">Bezeichnung</th>
              <th className="px-4 py-3 font-medium text-right">Menge</th>
              <th className="px-4 py-3 font-medium text-right">EP</th>
              <th className="px-4 py-3 font-medium text-right">GP</th>
              <th className="px-4 py-3 font-medium text-right">Geprüfter Wert</th>
              <th className="px-4 py-3 font-medium text-right">Differenz</th>
            </tr>
          </thead>
          <tbody>
            {positionsliste.map((p) => (
              <tr key={p.pos} className="border-b border-claimm-dark/5 last:border-0">
                <td className="px-4 py-3 text-claimm-dark/70">{p.pos}</td>
                <td className="px-4 py-3 text-claimm-dark">{p.bezeichnung}</td>
                <td className="px-4 py-3 text-right text-claimm-dark/70 whitespace-nowrap">
                  {p.menge} {p.einheit}
                </td>
                <td className="px-4 py-3 text-right text-claimm-dark/70 whitespace-nowrap">{formatEUR(p.ep)}</td>
                <td className="px-4 py-3 text-right text-claimm-dark whitespace-nowrap">{formatEUR(p.gp)}</td>
                <td className="px-4 py-3 text-right text-claimm-dark whitespace-nowrap">
                  {formatEUR(p.gepruefterWert)}
                </td>
                <td
                  className={`px-4 py-3 text-right whitespace-nowrap font-medium ${
                    p.differenz < 0 ? 'text-claimm-red' : 'text-claimm-dark/50'
                  }`}
                >
                  {p.differenz === 0 ? '–' : formatEUR(p.differenz)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white border border-claimm-dark/10 rounded-md p-5">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles size={16} className="text-claimm-red" />
          <span className="text-xs font-semibold text-claimm-red uppercase tracking-wide">KI-Zusammenfassung</span>
        </div>
        <p className="text-sm text-claimm-dark/80 leading-relaxed">{pruefungZusammenfassung}</p>
      </div>

      <button
        onClick={onNext}
        className="self-start inline-flex items-center gap-2 text-sm font-medium text-white bg-claimm-red rounded px-4 py-2.5 hover:bg-claimm-red/90 transition-colors"
      >
        Freigabe anfordern
        <ArrowRight size={16} />
      </button>
    </div>
  )
}
