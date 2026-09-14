const STATUS_STYLES = {
  erkannt: 'bg-gray-200 text-gray-700',
  eingegangen: 'bg-gray-200 text-gray-700',
  'in Prüfung': 'bg-blue-100 text-blue-700',
  angekündigt: 'bg-gray-200 text-gray-700',
  Rückfrage: 'bg-amber-100 text-amber-800',
  eingereicht: 'bg-blue-100 text-blue-700',
  'in Verhandlung': 'bg-amber-100 text-amber-800',
  beauftragt: 'bg-green-100 text-green-800',
  anerkannt: 'bg-green-100 text-green-800',
  abgelehnt: 'bg-red-100 text-red-700',
  zurückgewiesen: 'bg-red-100 text-red-700',
  abgerechnet: 'bg-claimm-dark text-white',
  abgeschlossen: 'bg-claimm-dark text-white',
}

export default function StatusChip({ status }) {
  const style = STATUS_STYLES[status] || 'bg-gray-200 text-gray-700'
  return (
    <span className={`inline-block px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap ${style}`}>
      {status}
    </span>
  )
}
