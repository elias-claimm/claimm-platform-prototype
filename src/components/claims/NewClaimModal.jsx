import { useState } from 'react'
import { X } from 'lucide-react'

const NACHTRAGSARTEN = [
  'Leistungsänderung',
  'zusätzliche Leistung',
  'entfallene Leistung',
  'Mengenänderung',
  'geänderte Ausführungsbedingungen',
  'Behinderung',
  'Unterbrechung',
  'Verzögerung',
  'Beschleunigung',
  'Bauzeitverlängerung',
  'Produktivitätsverlust',
  'Preisänderung',
  'Anordnung',
  'Planänderung',
  'sonstige vertragliche Anpassung',
]

const inputClass =
  'w-full border border-claimm-dark/20 rounded px-3 py-2 text-sm text-claimm-dark bg-white focus:outline-none focus:ring-2 focus:ring-claimm-red/40 focus:border-claimm-red'

export default function NewClaimModal({ perspektive, projekte, onCreate, onClose }) {
  const [form, setForm] = useState({
    projekt: projekte[0] || '',
    nachtragsart: NACHTRAGSARTEN[0],
    anspruchsgrund: '',
    beschreibung: '',
    kostenschaetzung: '',
  })

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    onCreate({
      ...form,
      kostenschaetzung: Number(form.kostenschaetzung) || 0,
      perspektive,
    })
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-md max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-semibold text-claimm-dark">Neuer Nachtrag ({perspektive}-Perspektive)</h3>
          <button onClick={onClose} className="text-claimm-dark/40 hover:text-claimm-dark">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-medium text-claimm-dark/70 mb-1.5">Projekt</label>
            <select className={inputClass} value={form.projekt} onChange={(e) => update('projekt', e.target.value)}>
              {projekte.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-claimm-dark/70 mb-1.5">Nachtragsart</label>
            <select
              className={inputClass}
              value={form.nachtragsart}
              onChange={(e) => update('nachtragsart', e.target.value)}
            >
              {NACHTRAGSARTEN.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-claimm-dark/70 mb-1.5">Anspruchsgrund</label>
            <input
              className={inputClass}
              value={form.anspruchsgrund}
              onChange={(e) => update('anspruchsgrund', e.target.value)}
              placeholder="z. B. Behinderung nach § 6 VOB/B"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-claimm-dark/70 mb-1.5">Beschreibung</label>
            <textarea
              className={inputClass}
              rows={3}
              value={form.beschreibung}
              onChange={(e) => update('beschreibung', e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-claimm-dark/70 mb-1.5">Kostenschätzung (€)</label>
            <input
              type="number"
              min="0"
              className={inputClass}
              value={form.kostenschaetzung}
              onChange={(e) => update('kostenschaetzung', e.target.value)}
              required
            />
          </div>

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 text-sm font-medium py-2 rounded border border-claimm-dark/20 text-claimm-dark hover:bg-claimm-dark/5 transition-colors"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              className="flex-1 text-sm font-medium py-2 rounded bg-claimm-red text-white hover:bg-claimm-red/90 transition-colors"
            >
              Nachtrag anlegen
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
