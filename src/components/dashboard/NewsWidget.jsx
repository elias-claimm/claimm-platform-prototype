import { Bell } from 'lucide-react'
import WidgetCard from './WidgetCard'
import { neuigkeiten } from '../../data/mockData'

export default function NewsWidget() {
  return (
    <WidgetCard title="Neuigkeiten seit gestern" icon={Bell}>
      <ul className="flex flex-col gap-2.5">
        {neuigkeiten.map((n) => (
          <li key={n.id}>
            <p className="text-xs font-medium text-claimm-red">{n.typ}</p>
            <p className="text-sm text-claimm-dark leading-snug mt-0.5">{n.text}</p>
            <p className="text-xs text-claimm-dark/40 mt-0.5">{n.zeit}</p>
          </li>
        ))}
      </ul>
    </WidgetCard>
  )
}
