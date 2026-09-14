import { useState } from 'react'
import { CheckSquare } from 'lucide-react'
import WidgetCard from './WidgetCard'
import { meineAufgaben } from '../../data/mockData'

const PRIORITY_STYLES = {
  hoch: 'text-claimm-red',
  mittel: 'text-amber-600 dark:text-amber-400',
  niedrig: 'text-claimm-dark/50 dark:text-white/40',
}

export default function TasksWidget() {
  const [aufgaben, setAufgaben] = useState(meineAufgaben)

  function toggle(id) {
    setAufgaben((prev) =>
      prev.map((a) => (a.id === id ? { ...a, erledigt: !a.erledigt } : a))
    )
  }

  return (
    <WidgetCard title="Meine Aufgaben heute" icon={CheckSquare}>
      <ul className="flex flex-col gap-2.5">
        {aufgaben.map((a) => (
          <li key={a.id} className="flex items-start gap-2.5">
            <input
              type="checkbox"
              checked={a.erledigt}
              onChange={() => toggle(a.id)}
              className="mt-0.5 accent-claimm-red w-4 h-4 shrink-0 cursor-pointer"
            />
            <div className="min-w-0">
              <p className={`text-sm leading-snug ${a.erledigt ? 'line-through text-claimm-dark/40 dark:text-white/30' : 'text-claimm-dark dark:text-white'}`}>
                {a.titel}
              </p>
              <p className="text-xs text-claimm-dark/50 dark:text-white/40 mt-0.5">
                {a.projekt} · Fällig {a.faelligkeit}{' '}
                <span className={`font-medium ${PRIORITY_STYLES[a.prioritaet]}`}>· {a.prioritaet}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </WidgetCard>
  )
}
