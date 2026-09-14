import StatusChip from '../StatusChip'

function formatEUR(value) {
  if (value == null) return '–'
  return value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
}

export default function ClaimsTable({ nachtraege, onSelect }) {
  return (
    <div className="bg-white border border-claimm-dark/10 rounded-md overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-claimm-dark/10 text-left text-xs text-claimm-dark/50">
            <th className="px-4 py-3 font-medium whitespace-nowrap">Nachtrag-Nr.</th>
            <th className="px-4 py-3 font-medium whitespace-nowrap">Projekt</th>
            <th className="px-4 py-3 font-medium">Beschreibung</th>
            <th className="px-4 py-3 font-medium whitespace-nowrap">Anspruchsgrund</th>
            <th className="px-4 py-3 font-medium whitespace-nowrap text-right">Angemeldeter Wert</th>
            <th className="px-4 py-3 font-medium whitespace-nowrap text-right">Geprüfter Wert</th>
            <th className="px-4 py-3 font-medium whitespace-nowrap">Status</th>
            <th className="px-4 py-3 font-medium whitespace-nowrap">Frist</th>
            <th className="px-4 py-3 font-medium whitespace-nowrap">Verantwortlich</th>
          </tr>
        </thead>
        <tbody>
          {nachtraege.map((n) => (
            <tr
              key={n.id}
              onClick={() => onSelect(n)}
              className="border-b border-claimm-dark/5 last:border-0 hover:bg-claimm-beige/50 cursor-pointer transition-colors"
            >
              <td className="px-4 py-3 font-medium text-claimm-dark whitespace-nowrap">{n.id}</td>
              <td className="px-4 py-3 text-claimm-dark whitespace-nowrap">{n.projekt}</td>
              <td className="px-4 py-3 text-claimm-dark/80 max-w-xs">{n.beschreibung}</td>
              <td className="px-4 py-3 text-claimm-dark/70 whitespace-nowrap">{n.anspruchsgrund}</td>
              <td className="px-4 py-3 text-claimm-dark text-right whitespace-nowrap">
                {formatEUR(n.angemeldeterWert ?? n.geforderterWert)}
              </td>
              <td className="px-4 py-3 text-claimm-dark text-right whitespace-nowrap">{formatEUR(n.gepruefterWert)}</td>
              <td className="px-4 py-3">
                <StatusChip status={n.status} />
              </td>
              <td className="px-4 py-3 text-claimm-dark/70 whitespace-nowrap">{n.frist}</td>
              <td className="px-4 py-3 text-claimm-dark/70 whitespace-nowrap">{n.verantwortlich}</td>
            </tr>
          ))}
          {nachtraege.length === 0 && (
            <tr>
              <td colSpan={9} className="px-4 py-8 text-center text-claimm-dark/40">
                Keine Nachträge für die gewählten Filter.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
