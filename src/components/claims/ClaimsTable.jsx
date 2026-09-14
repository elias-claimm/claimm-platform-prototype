import StatusChip from '../StatusChip'

function formatEUR(value) {
  if (value == null) return '–'
  return value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
}

export default function ClaimsTable({ nachtraege, onSelect }) {
  return (
    <div className="bg-white dark:bg-white/5 border border-claimm-dark/10 dark:border-white/10 rounded-md overflow-x-auto">
      <table className="w-full text-sm table-fixed">
        <colgroup>
          <col className="w-[115px]" />
          <col className="w-[125px]" />
          <col className="w-[140px]" />
          <col className="w-[120px]" />
          <col className="w-[105px]" />
          <col className="w-[95px]" />
          <col className="w-[95px]" />
          <col className="w-[100px]" />
          <col className="w-[110px]" />
        </colgroup>
        <thead>
          <tr className="border-b border-claimm-dark/10 dark:border-white/10 text-left text-xs text-claimm-dark/50 dark:text-white/40">
            <th className="px-2.5 py-3 font-medium">Nachtrag-Nr.</th>
            <th className="px-2.5 py-3 font-medium">Projekt</th>
            <th className="px-2.5 py-3 font-medium">Beschreibung</th>
            <th className="px-2.5 py-3 font-medium">Anspruchsgrund</th>
            <th className="px-2.5 py-3 font-medium text-right">Angemeldeter Wert</th>
            <th className="px-2.5 py-3 font-medium text-right">Geprüfter Wert</th>
            <th className="px-2.5 py-3 font-medium">Status</th>
            <th className="px-2.5 py-3 font-medium">Frist</th>
            <th className="px-2.5 py-3 font-medium">Verantwortlich</th>
          </tr>
        </thead>
        <tbody>
          {nachtraege.map((n) => (
            <tr
              key={n.id}
              onClick={() => onSelect(n)}
              className="border-b border-claimm-dark/5 dark:border-white/5 last:border-0 hover:bg-claimm-beige/50 dark:hover:bg-white/10 cursor-pointer transition-colors"
            >
              <td className="px-2.5 py-3 font-medium text-claimm-dark dark:text-white truncate">{n.id}</td>
              <td className="px-2.5 py-3 text-claimm-dark dark:text-white truncate" title={n.projekt}>
                {n.projekt}
              </td>
              <td className="px-2.5 py-3 text-claimm-dark/80 dark:text-white/70 truncate" title={n.beschreibung}>
                {n.beschreibung}
              </td>
              <td className="px-2.5 py-3 text-claimm-dark/70 dark:text-white/60 truncate" title={n.anspruchsgrund}>
                {n.anspruchsgrund}
              </td>
              <td className="px-2.5 py-3 text-claimm-dark dark:text-white text-right truncate">
                {formatEUR(n.angemeldeterWert ?? n.geforderterWert)}
              </td>
              <td className="px-2.5 py-3 text-claimm-dark dark:text-white text-right truncate">{formatEUR(n.gepruefterWert)}</td>
              <td className="px-2.5 py-3">
                <StatusChip status={n.status} />
              </td>
              <td className="px-2.5 py-3 text-claimm-dark/70 dark:text-white/60 truncate">{n.frist}</td>
              <td className="px-2.5 py-3 text-claimm-dark/70 dark:text-white/60 truncate" title={n.verantwortlich}>
                {n.verantwortlich}
              </td>
            </tr>
          ))}
          {nachtraege.length === 0 && (
            <tr>
              <td colSpan={9} className="px-4 py-8 text-center text-claimm-dark/40 dark:text-white/30">
                Keine Nachträge für die gewählten Filter.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
