const COLORS = {
  rot: '#E30613',
  gelb: '#D4A017',
  grün: '#1F8A45',
}

export default function AmpelDot({ status, label }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
        style={{ backgroundColor: COLORS[status] || '#9CA3AF' }}
      />
      {label && <span className="text-xs text-claimm-dark/70">{label}</span>}
    </span>
  )
}
