import { useMemo, useState } from 'react'
import { Plus } from 'lucide-react'
import KpiBar from '../components/claims/KpiBar'
import FilterBar from '../components/claims/FilterBar'
import ClaimsTable from '../components/claims/ClaimsTable'
import ClaimDetailPanel from '../components/claims/ClaimDetailPanel'
import NewClaimModal from '../components/claims/NewClaimModal'
import { nachtraege as initialNachtraege, projects, AN_STATUS, AG_STATUS, employees } from '../data/mockData'

const HEUTE = new Date('2026-09-14')

function istDieseWoche(datumStr) {
  const datum = new Date(datumStr)
  const diffTage = (datum - HEUTE) / (1000 * 60 * 60 * 24)
  return diffTage >= 0 && diffTage <= 7
}

function istDieserMonat(datumStr) {
  const datum = new Date(datumStr)
  return datum.getFullYear() === HEUTE.getFullYear() && datum.getMonth() === HEUTE.getMonth()
}

let nextId = 100

export default function ClaimDashboard() {
  const [perspektive, setPerspektive] = useState('AN')
  const [nachtraege, setNachtraege] = useState(initialNachtraege)
  const [filters, setFilters] = useState({ projekt: 'alle', status: 'alle', verantwortlich: 'alle', zeitraum: 'alle' })
  const [selected, setSelected] = useState(null)
  const [newModalOpen, setNewModalOpen] = useState(false)

  const perspektivListe = useMemo(
    () => nachtraege.filter((n) => n.perspektive === perspektive),
    [nachtraege, perspektive]
  )

  const gefiltert = useMemo(() => {
    return perspektivListe.filter((n) => {
      if (filters.projekt !== 'alle' && n.projekt !== filters.projekt) return false
      if (filters.status !== 'alle' && n.status !== filters.status) return false
      if (filters.verantwortlich !== 'alle' && n.verantwortlich !== filters.verantwortlich) return false
      if (filters.zeitraum === 'woche' && !istDieseWoche(n.frist)) return false
      if (filters.zeitraum === 'monat' && !istDieserMonat(n.frist)) return false
      return true
    })
  }, [perspektivListe, filters])

  const projekteFuerPerspektive = useMemo(
    () => projects.filter((p) => p.perspektive === perspektive).map((p) => p.name),
    [perspektive]
  )

  function handleFilterChange(field, value) {
    setFilters((prev) => ({ ...prev, [field]: value }))
  }

  function handlePerspektivWechsel(p) {
    setPerspektive(p)
    setFilters({ projekt: 'alle', status: 'alle', verantwortlich: 'alle', zeitraum: 'alle' })
  }

  function handleCreate(form) {
    const projekt = projects.find((p) => p.name === form.projekt)
    const neu = {
      id: `NT-2026-${nextId++}`,
      projekt: form.projekt,
      projektId: projekt?.id,
      perspektive: form.perspektive,
      nachtragsart: form.nachtragsart,
      beschreibung: form.beschreibung,
      anspruchsgrund: form.anspruchsgrund,
      status: form.perspektive === 'AN' ? 'erkannt' : 'eingegangen',
      frist: '2026-10-01',
      fristLabel: 'Vollständigkeitsprüfung',
      verantwortlich: 'Elias Wüstenhöfer',
      details: { dokumente: [], verlauf: [{ datum: '2026-09-14', ereignis: 'Nachtrag manuell angelegt' }], kommunikation: [] },
      ...(form.perspektive === 'AN'
        ? { angemeldeterWert: form.kostenschaetzung, gepruefterWert: null }
        : { geforderterWert: form.kostenschaetzung, gepruefterWert: null }),
    }
    setNachtraege((prev) => [neu, ...prev])
    setNewModalOpen(false)
  }

  const statusOptions = perspektive === 'AN' ? AN_STATUS : AG_STATUS
  const verantwortliche = employees.map((e) => e.name)

  return (
    <div className="min-h-full bg-claimm-beige dark:bg-claimm-dark transition-colors">
      <div className="flex items-center justify-between px-8 py-6 border-b border-claimm-dark/10 dark:border-white/10">
        <div>
          <h1 className="text-2xl font-semibold text-claimm-dark dark:text-white">Claim-Dashboard</h1>
          <p className="text-sm text-claimm-dark/60 dark:text-white/50 mt-1">Claim- &amp; Contract Management</p>
        </div>

        <div className="inline-flex border border-claimm-dark/20 dark:border-white/20 rounded overflow-hidden">
          <button
            onClick={() => handlePerspektivWechsel('AN')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              perspektive === 'AN' ? 'bg-claimm-dark dark:bg-white text-white dark:text-claimm-dark' : 'bg-white dark:bg-white/5 text-claimm-dark dark:text-white hover:bg-claimm-dark/5 dark:hover:bg-white/10'
            }`}
          >
            AN-Perspektive
          </button>
          <button
            onClick={() => handlePerspektivWechsel('AG')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              perspektive === 'AG' ? 'bg-claimm-dark dark:bg-white text-white dark:text-claimm-dark' : 'bg-white dark:bg-white/5 text-claimm-dark dark:text-white hover:bg-claimm-dark/5 dark:hover:bg-white/10'
            }`}
          >
            AG-Perspektive
          </button>
        </div>
      </div>

      <div className="p-8 flex flex-col gap-5">
        <KpiBar perspektive={perspektive} nachtraege={nachtraege} />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <FilterBar
            filters={filters}
            onChange={handleFilterChange}
            projekte={projekteFuerPerspektive}
            statusOptions={statusOptions}
            verantwortliche={verantwortliche}
          />
          <button
            onClick={() => setNewModalOpen(true)}
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-claimm-red rounded px-4 py-2 hover:bg-claimm-red/90 transition-colors shrink-0"
          >
            <Plus size={16} />
            Neuer Nachtrag
          </button>
        </div>

        <ClaimsTable nachtraege={gefiltert} onSelect={setSelected} />
      </div>

      {selected && <ClaimDetailPanel nachtrag={selected} onClose={() => setSelected(null)} />}

      {newModalOpen && (
        <NewClaimModal
          perspektive={perspektive}
          projekte={projekteFuerPerspektive}
          onCreate={handleCreate}
          onClose={() => setNewModalOpen(false)}
        />
      )}
    </div>
  )
}
