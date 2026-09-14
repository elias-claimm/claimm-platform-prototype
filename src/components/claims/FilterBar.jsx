export default function FilterBar({ filters, onChange, projekte, statusOptions, verantwortliche }) {
  const selectClass =
    'text-sm border border-claimm-dark/20 rounded px-3 py-2 bg-white text-claimm-dark focus:outline-none focus:ring-2 focus:ring-claimm-red/40 focus:border-claimm-red'

  return (
    <div className="flex flex-wrap gap-3">
      <select
        className={selectClass}
        value={filters.projekt}
        onChange={(e) => onChange('projekt', e.target.value)}
      >
        <option value="alle">Alle Projekte</option>
        {projekte.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      <select
        className={selectClass}
        value={filters.status}
        onChange={(e) => onChange('status', e.target.value)}
      >
        <option value="alle">Alle Status</option>
        {statusOptions.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <select
        className={selectClass}
        value={filters.verantwortlich}
        onChange={(e) => onChange('verantwortlich', e.target.value)}
      >
        <option value="alle">Alle Verantwortlichen</option>
        {verantwortliche.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>

      <select
        className={selectClass}
        value={filters.zeitraum}
        onChange={(e) => onChange('zeitraum', e.target.value)}
      >
        <option value="alle">Gesamter Zeitraum</option>
        <option value="woche">Frist diese Woche</option>
        <option value="monat">Frist diesen Monat</option>
      </select>
    </div>
  )
}
