import { useState } from 'react'
import { X, FileText } from 'lucide-react'
import StatusChip from '../StatusChip'

function formatEUR(value) {
  if (value == null) return '–'
  return value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
}

const TABS = ['Details', 'Dokumente', 'Verlauf', 'Kommunikation']

export default function ClaimDetailPanel({ nachtrag, onClose }) {
  const [tab, setTab] = useState('Details')

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="flex-1 bg-black/30" onClick={onClose} />
      <div className="w-full max-w-md bg-white dark:bg-claimm-dark border-l border-transparent dark:border-white/10 h-full overflow-y-auto shadow-xl flex flex-col">
        <div className="flex items-start justify-between px-6 py-5 border-b border-claimm-dark/10 dark:border-white/10">
          <div>
            <p className="text-xs text-claimm-dark/50 dark:text-white/40">{nachtrag.id}</p>
            <h3 className="text-lg font-semibold text-claimm-dark dark:text-white mt-0.5">{nachtrag.projekt}</h3>
            <div className="mt-2">
              <StatusChip status={nachtrag.status} />
            </div>
          </div>
          <button onClick={onClose} className="text-claimm-dark/40 dark:text-white/40 hover:text-claimm-dark dark:hover:text-white">
            <X size={20} />
          </button>
        </div>

        <div className="flex border-b border-claimm-dark/10 dark:border-white/10 px-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                tab === t
                  ? 'border-claimm-red text-claimm-red'
                  : 'border-transparent text-claimm-dark/50 dark:text-white/40 hover:text-claimm-dark dark:hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="p-6 flex-1">
          {tab === 'Details' && (
            <dl className="text-sm space-y-3">
              <div>
                <dt className="text-claimm-dark/50 dark:text-white/40 text-xs">Beschreibung</dt>
                <dd className="text-claimm-dark dark:text-white mt-0.5">{nachtrag.beschreibung}</dd>
              </div>
              <div>
                <dt className="text-claimm-dark/50 dark:text-white/40 text-xs">Anspruchsgrund</dt>
                <dd className="text-claimm-dark dark:text-white mt-0.5">{nachtrag.anspruchsgrund}</dd>
              </div>
              <div>
                <dt className="text-claimm-dark/50 dark:text-white/40 text-xs">Nachtragsart</dt>
                <dd className="text-claimm-dark dark:text-white mt-0.5">{nachtrag.nachtragsart}</dd>
              </div>
              <div className="flex justify-between border-t border-claimm-dark/10 dark:border-white/10 pt-3">
                <dt className="text-claimm-dark/50 dark:text-white/40">Angemeldeter/Geforderter Wert</dt>
                <dd className="text-claimm-dark dark:text-white font-medium">
                  {formatEUR(nachtrag.angemeldeterWert ?? nachtrag.geforderterWert)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-claimm-dark/50 dark:text-white/40">Geprüfter Wert</dt>
                <dd className="text-claimm-dark dark:text-white font-medium">{formatEUR(nachtrag.gepruefterWert)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-claimm-dark/50 dark:text-white/40">Frist</dt>
                <dd className="text-claimm-dark dark:text-white font-medium">
                  {nachtrag.frist} · {nachtrag.fristLabel}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-claimm-dark/50 dark:text-white/40">Verantwortlich</dt>
                <dd className="text-claimm-dark dark:text-white font-medium">{nachtrag.verantwortlich}</dd>
              </div>
            </dl>
          )}

          {tab === 'Dokumente' && (
            <ul className="flex flex-col gap-2">
              {nachtrag.details.dokumente.map((doc) => (
                <li key={doc} className="flex items-center gap-2.5 border border-claimm-dark/10 dark:border-white/10 rounded px-3 py-2.5">
                  <FileText size={16} className="text-claimm-red shrink-0" />
                  <span className="text-sm text-claimm-dark dark:text-white truncate">{doc}</span>
                </li>
              ))}
              {nachtrag.details.dokumente.length === 0 && (
                <p className="text-sm text-claimm-dark/40 dark:text-white/30">Keine Dokumente vorhanden.</p>
              )}
            </ul>
          )}

          {tab === 'Verlauf' && (
            <ol className="relative border-l border-claimm-dark/15 dark:border-white/15 pl-4 flex flex-col gap-4">
              {nachtrag.details.verlauf.map((v, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-claimm-red" />
                  <p className="text-xs text-claimm-dark/50 dark:text-white/40">{v.datum}</p>
                  <p className="text-sm text-claimm-dark dark:text-white mt-0.5">{v.ereignis}</p>
                </li>
              ))}
            </ol>
          )}

          {tab === 'Kommunikation' && (
            <ul className="flex flex-col gap-3">
              {nachtrag.details.kommunikation.map((k, i) => (
                <li key={i} className="border border-claimm-dark/10 dark:border-white/10 rounded p-3">
                  <p className="text-sm text-claimm-dark dark:text-white font-medium">{k.betreff}</p>
                  <p className="text-xs text-claimm-dark/50 dark:text-white/40 mt-1">
                    {k.von} → {k.an} · {k.datum}
                  </p>
                </li>
              ))}
              {nachtrag.details.kommunikation.length === 0 && (
                <p className="text-sm text-claimm-dark/40 dark:text-white/30">Keine Kommunikation vorhanden.</p>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
