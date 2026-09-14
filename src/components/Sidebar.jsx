import { NavLink } from 'react-router-dom'
import { Home, BarChart2, GitBranch, Briefcase } from 'lucide-react'
import { navigation, currentUser } from '../data/mockData'
import logo from '../assets/logo.png'

const icons = {
  Home,
  BarChart2,
  GitBranch,
  Briefcase,
}

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] bg-claimm-dark flex flex-col">
      <div className="px-6 py-8">
        <img src={logo} alt="claim.m" className="h-8 w-auto" />
      </div>

      <nav className="flex-1 px-3">
        {navigation.map(({ label, path, icon }) => {
          const Icon = icons[icon]
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 mb-1 border-l-2 text-sm transition-colors ${
                  isActive
                    ? 'border-claimm-red text-claimm-red bg-white/5'
                    : 'border-transparent text-gray-400 hover:text-gray-200'
                }`
              }
            >
              <Icon size={18} strokeWidth={1.75} />
              <span>{label}</span>
            </NavLink>
          )
        })}
      </nav>

      <div className="px-6 py-5 border-t border-white/10">
        <p className="text-sm text-white font-medium">{currentUser.name}</p>
        <p className="text-xs text-gray-400">{currentUser.role}</p>
      </div>
    </aside>
  )
}
