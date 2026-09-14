import { Sparkles, ArrowRight } from 'lucide-react'
import { erkannterSachverhalt } from '../../data/mockData'

export default function Phase1Erkennung({ onNext }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-lg font-semibold text-claimm-dark mb-1">Erkennung</h2>
      <p className="text-sm text-claimm-dark/60 mb-5">
        M10 hat einen möglichen Nachtragssachverhalt automatisch erkannt.
      </p>

      <div className="bg-white border border-claimm-dark/10 rounded-md p-5">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={16} className="text-claimm-red" />
          <span className="text-xs font-semibold text-claimm-red uppercase tracking-wide">KI-Hinweis</span>
        </div>
        <p className="text-sm font-medium text-claimm-dark mb-1">{erkannterSachverhalt.projekt}</p>
        <p className="text-xs text-claimm-dark/50 mb-3">
          Quelle: {erkannterSachverhalt.quelle} · erkannt am {erkannterSachverhalt.datum}
        </p>
        <p className="text-sm text-claimm-dark/80 leading-relaxed">{erkannterSachverhalt.kiHinweis}</p>

        <button
          onClick={onNext}
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white bg-claimm-red rounded px-4 py-2.5 hover:bg-claimm-red/90 transition-colors"
        >
          Als Nachtrag anlegen
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}
