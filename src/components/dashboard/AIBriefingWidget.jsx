import { Sparkles } from 'lucide-react'
import WidgetCard from './WidgetCard'
import { aiTagesbriefing } from '../../data/mockData'

export default function AIBriefingWidget() {
  return (
    <WidgetCard title="KI-Tagesbriefing" icon={Sparkles}>
      <p className="text-sm text-claimm-dark/80 dark:text-white/70 leading-relaxed">{aiTagesbriefing}</p>
    </WidgetCard>
  )
}
