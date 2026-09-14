import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { vorpruefungFormular, nachweischeckliste } from '../../data/mockData'

const inputClass =
  'w-full border border-claimm-dark/20 dark:border-white/20 rounded px-3 py-2 text-sm text-claimm-dark dark:text-white bg-white dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-claimm-red/40 focus:border-claimm-red'

export default function Phase2Vorpruefung({ onNext }) {
  const [form, setForm] = useState(vorpruefungFormular)
  const [checkliste, setCheckliste] = useState(nachweischeckliste)

  const vollstaendigkeit = useMemo(() => {
    const erledigt = checkliste.filter((c) => c.status === 'bestätigt').length
    return Math.round((erledigt / checkliste.length) * 100)
  }, [checkliste])

  function toggleNachweis(id) {
    setCheckliste((prev) =>
      prev.map((n) => (n.id === id ? { ...n, status: n.status === 'bestätigt' ? 'fehlt' : 'bestätigt' } : n))
    )
  }

  return (
    <div className="max-w-2xl flex flex-col gap-6">
      <div>
        <h2 className="text-lg font-semibold text-claimm-dark dark:text-white mb-1">Vorprüfung</h2>
        <p className="text-sm text-claimm-dark/60 dark:text-white/50">Anspruchsgrund, Beschreibung und Nachweise erfassen.</p>
      </div>

      <div className="bg-white dark:bg-white/5 border border-claimm-dark/10 dark:border-white/10 rounded-md p-5 flex flex-col gap-4">
        <div>
          <label className="block text-xs font-medium text-claimm-dark/70 dark:text-white/60 mb-1.5">Anspruchsgrund</label>
          <input
            className={inputClass}
            value={form.anspruchsgrund}
            onChange={(e) => setForm({ ...form, anspruchsgrund: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-claimm-dark/70 dark:text-white/60 mb-1.5">Beschreibung</label>
          <textarea
            className={inputClass}
            rows={3}
            value={form.beschreibung}
            onChange={(e) => setForm({ ...form, beschreibung: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-claimm-dark/70 dark:text-white/60 mb-1.5">Kostenschätzung (€)</label>
          <input
            type="number"
            className={inputClass}
            value={form.kostenschaetzung}
            onChange={(e) => setForm({ ...form, kostenschaetzung: Number(e.target.value) })}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-white/5 border border-claimm-dark/10 dark:border-white/10 rounded-md p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-claimm-dark dark:text-white">Nachweischeckliste</h3>
          <span className="text-sm font-semibold text-claimm-red">{vollstaendigkeit}% vollständig</span>
        </div>
        <div className="w-full h-1.5 bg-claimm-dark/10 dark:bg-white/10 rounded-full mb-4 overflow-hidden">
          <div className="h-full bg-claimm-red rounded-full transition-all" style={{ width: `${vollstaendigkeit}%` }} />
        </div>
        <ul className="flex flex-col gap-2">
          {checkliste.map((n) => (
            <li key={n.id} className="flex items-center gap-2.5">
              <input
                type="checkbox"
                checked={n.status === 'bestätigt'}
                onChange={() => toggleNachweis(n.id)}
                className="accent-claimm-red w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-claimm-dark dark:text-white">{n.label}</span>
              <span className={`text-xs ml-auto ${n.status === 'bestätigt' ? 'text-green-700 dark:text-green-400' : 'text-claimm-red'}`}>
                {n.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onNext}
        className="self-start inline-flex items-center gap-2 text-sm font-medium text-white bg-claimm-red rounded px-4 py-2.5 hover:bg-claimm-red/90 transition-colors"
      >
        Zur vollständigen Prüfung
        <ArrowRight size={16} />
      </button>
    </div>
  )
}
