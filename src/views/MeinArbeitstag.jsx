import { useEffect, useState } from 'react'
import { Settings2 } from 'lucide-react'
import Header from '../components/Header'
import CustomizeModal from '../components/dashboard/CustomizeModal'
import TasksWidget from '../components/dashboard/TasksWidget'
import ApprovalsWidget from '../components/dashboard/ApprovalsWidget'
import DeadlinesWidget from '../components/dashboard/DeadlinesWidget'
import ProjectsWidget from '../components/dashboard/ProjectsWidget'
import AIBriefingWidget from '../components/dashboard/AIBriefingWidget'
import NewsWidget from '../components/dashboard/NewsWidget'
import { dashboardWidgetDefinitions, currentUser } from '../data/mockData'

const STORAGE_KEY = 'claimm-dashboard-widgets'

const WIDGET_COMPONENTS = {
  aufgaben: TasksWidget,
  freigaben: ApprovalsWidget,
  fristen: DeadlinesWidget,
  projekte: ProjectsWidget,
  kibriefing: AIBriefingWidget,
  neuigkeiten: NewsWidget,
}

function loadWidgetSettings() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return dashboardWidgetDefinitions.map((w) => ({ ...w, enabled: true }))
    const parsed = JSON.parse(stored)
    const known = new Set(parsed.map((w) => w.id))
    const missing = dashboardWidgetDefinitions.filter((w) => !known.has(w.id)).map((w) => ({ ...w, enabled: true }))
    return [...parsed, ...missing]
  } catch {
    return dashboardWidgetDefinitions.map((w) => ({ ...w, enabled: true }))
  }
}

export default function MeinArbeitstag() {
  const [widgets, setWidgets] = useState(loadWidgetSettings)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(widgets))
  }, [widgets])

  function handleSave(newWidgets) {
    setWidgets(newWidgets)
    setModalOpen(false)
  }

  const firstName = currentUser.name.split(' ')[0]

  return (
    <div className="min-h-full bg-claimm-beige dark:bg-claimm-dark transition-colors">
      <Header
        greetingName={firstName}
        action={
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 text-sm font-medium text-claimm-dark dark:text-white border border-claimm-dark/20 dark:border-white/20 rounded px-3 py-2 hover:bg-white dark:hover:bg-white/10 transition-colors shrink-0"
          >
            <Settings2 size={16} />
            Dashboard anpassen
          </button>
        }
      />

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {widgets
          .filter((w) => w.enabled)
          .map((w) => {
            const Widget = WIDGET_COMPONENTS[w.id]
            return Widget ? <Widget key={w.id} /> : null
          })}
      </div>

      {modalOpen && (
        <CustomizeModal widgets={widgets} onSave={handleSave} onClose={() => setModalOpen(false)} />
      )}
    </div>
  )
}
