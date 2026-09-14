import { AlertTriangle } from 'lucide-react'
import WidgetCard from './WidgetCard'
import AmpelDot from '../AmpelDot'
import { kritischeFristen } from '../../data/mockData'

export default function DeadlinesWidget() {
  return (
    <WidgetCard title="Kritische Fristen" icon={AlertTriangle}>
      <ul className="flex flex-col gap-2.5">
        {kritischeFristen.map((f) => (
          <li key={f.id} className="flex items-start gap-2.5">
            <span className="mt-1.5">
              <AmpelDot status={f.ampel} />
            </span>
            <div className="min-w-0">
              <p className="text-sm text-claimm-dark dark:text-white leading-snug">{f.titel}</p>
              <p className="text-xs text-claimm-dark/50 dark:text-white/40 mt-0.5">
                {f.typ} · {f.datum}
                {f.zeit ? ` · ${f.zeit}` : ''}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </WidgetCard>
  )
}
