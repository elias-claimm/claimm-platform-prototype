import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MeinArbeitstag from './views/MeinArbeitstag'
import ClaimDashboard from './views/ClaimDashboard'
import Nachtragslebenszyklus from './views/Nachtragslebenszyklus'
import GFBriefing from './views/GFBriefing'

export default function App() {
  return (
    <div className="min-h-screen bg-claimm-beige">
      <Sidebar />
      <div className="ml-[240px] min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<MeinArbeitstag />} />
            <Route path="/claim-dashboard" element={<ClaimDashboard />} />
            <Route path="/nachtragslebenszyklus" element={<Nachtragslebenszyklus />} />
            <Route path="/gf-briefing" element={<GFBriefing />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
