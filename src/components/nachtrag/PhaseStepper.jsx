import { Check } from 'lucide-react'
import { nachtragslebenszyklusPhasen } from '../../data/mockData'

export default function PhaseStepper({ current, onSelect }) {
  return (
    <div className="flex items-center px-8 py-6 bg-white border-b border-claimm-dark/10">
      {nachtragslebenszyklusPhasen.map((phase, index) => {
        const isDone = phase.id < current
        const isActive = phase.id === current
        return (
          <div key={phase.id} className="flex items-center flex-1 last:flex-none">
            <button onClick={() => onSelect(phase.id)} className="flex flex-col items-center gap-2 group">
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-colors ${
                  isActive
                    ? 'bg-claimm-red border-claimm-red text-white'
                    : isDone
                    ? 'bg-claimm-dark border-claimm-dark text-white'
                    : 'bg-white border-claimm-dark/20 text-claimm-dark/40 group-hover:border-claimm-red/50'
                }`}
              >
                {isDone ? <Check size={14} /> : phase.id}
              </span>
              <span
                className={`text-xs font-medium whitespace-nowrap ${
                  isActive ? 'text-claimm-red' : isDone ? 'text-claimm-dark' : 'text-claimm-dark/40'
                }`}
              >
                {phase.label}
              </span>
            </button>
            {index < nachtragslebenszyklusPhasen.length - 1 && (
              <div className={`flex-1 h-0.5 mx-2 ${isDone ? 'bg-claimm-dark' : 'bg-claimm-dark/15'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}
