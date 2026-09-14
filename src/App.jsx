import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './ThemeContext'
import Layout from './components/Layout'
import Login from './views/Login'
import MeinArbeitstag from './views/MeinArbeitstag'
import ClaimDashboard from './views/ClaimDashboard'
import Nachtragslebenszyklus from './views/Nachtragslebenszyklus'
import GFBriefing from './views/GFBriefing'

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<MeinArbeitstag />} />
          <Route path="/claims" element={<ClaimDashboard />} />
          <Route path="/nachtrag" element={<Nachtragslebenszyklus />} />
          <Route path="/gf-briefing" element={<GFBriefing />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
