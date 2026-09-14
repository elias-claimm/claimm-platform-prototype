function formatEUR(value) {
  return value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
}

function sumBy(list, status, field) {
  return list.filter((n) => n.status === status).reduce((acc, n) => acc + (n[field] || 0), 0)
}

export default function KpiBar({ perspektive, nachtraege }) {
  const liste = nachtraege.filter((n) => n.perspektive === perspektive)

  const kpis =
    perspektive === 'AN'
      ? [
          { label: 'Erkanntes Potenzial', value: liste.reduce((acc, n) => acc + (n.angemeldeterWert || 0), 0) },
          { label: 'Eingereicht', value: sumBy(liste, 'eingereicht', 'angemeldeterWert') },
          { label: 'In Verhandlung', value: sumBy(liste, 'in Verhandlung', 'angemeldeterWert') },
          { label: 'Beauftragt', value: sumBy(liste, 'beauftragt', 'angemeldeterWert') },
          { label: 'Abgerechnet', value: sumBy(liste, 'abgerechnet', 'angemeldeterWert') },
        ]
      : [
          { label: 'Eingegangen', value: liste.reduce((acc, n) => acc + (n.geforderterWert || 0), 0) },
          { label: 'Geprüft', value: liste.reduce((acc, n) => acc + (n.gepruefterWert || 0), 0) },
          { label: 'Zurückgewiesen', value: sumBy(liste, 'zurückgewiesen', 'geforderterWert') },
          { label: 'Anerkannt', value: sumBy(liste, 'anerkannt', 'gepruefterWert') },
          {
            label: 'Einsparung',
            value: liste.reduce(
              (acc, n) =>
                acc + (n.geforderterWert != null && n.gepruefterWert != null ? n.geforderterWert - n.gepruefterWert : 0),
              0
            ),
          },
        ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {kpis.map((kpi) => (
        <div key={kpi.label} className="bg-white dark:bg-white/5 border border-claimm-dark/10 dark:border-white/10 rounded-md p-4">
          <p className="text-xs text-claimm-dark/50 dark:text-white/40">{kpi.label}</p>
          <p className="text-xl font-semibold text-claimm-dark dark:text-white mt-1">{formatEUR(kpi.value)}</p>
        </div>
      ))}
    </div>
  )
}
