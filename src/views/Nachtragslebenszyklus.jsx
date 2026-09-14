import { useState } from 'react'
import PhaseStepper from '../components/nachtrag/PhaseStepper'
import Phase1Erkennung from '../components/nachtrag/Phase1Erkennung'
import Phase2Vorpruefung from '../components/nachtrag/Phase2Vorpruefung'
import Phase3Pruefung from '../components/nachtrag/Phase3Pruefung'
import Phase4Freigabe from '../components/nachtrag/Phase4Freigabe'
import Phase5Verhandlung from '../components/nachtrag/Phase5Verhandlung'
import Phase6Abschluss from '../components/nachtrag/Phase6Abschluss'

export default function Nachtragslebenszyklus() {
  const [phase, setPhase] = useState(1)

  function next() {
    setPhase((p) => Math.min(p + 1, 6))
  }

  return (
    <div className="min-h-full bg-claimm-beige dark:bg-claimm-dark transition-colors">
      <div className="px-8 pt-6">
        <h1 className="text-2xl font-semibold text-claimm-dark dark:text-white">Nachtragslebenszyklus</h1>
        <p className="text-sm text-claimm-dark/60 dark:text-white/50 mt-1">
          NT-2026-014 · KAU Köln · Behinderung nach § 6 VOB/B
        </p>
      </div>

      <PhaseStepper current={phase} onSelect={setPhase} />

      <div className="p-8">
        {phase === 1 && <Phase1Erkennung onNext={next} />}
        {phase === 2 && <Phase2Vorpruefung onNext={next} />}
        {phase === 3 && <Phase3Pruefung onNext={next} />}
        {phase === 4 && <Phase4Freigabe onNext={next} />}
        {phase === 5 && <Phase5Verhandlung onNext={next} />}
        {phase === 6 && <Phase6Abschluss />}
      </div>
    </div>
  )
}
