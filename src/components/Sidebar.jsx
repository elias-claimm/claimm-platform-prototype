import { NavLink } from 'react-router-dom'
import { Home, BarChart2, GitBranch, Briefcase, Sun, Moon } from 'lucide-react'
import { navigation, currentUser } from '../data/mockData'
import { useTheme } from '../ThemeContext'
import logo from '../assets/logo.png'

const icons = {
  Home,
  BarChart2,
  GitBranch,
  Briefcase,
}

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] bg-claimm-beige dark:bg-claimm-dark border-r border-claimm-dark/10 dark:border-white/10 flex flex-col transition-colors">
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
                    ? 'border-claimm-red text-claimm-red bg-claimm-dark/5 dark:bg-white/5'
                    : 'border-transparent text-claimm-dark/50 dark:text-gray-400 hover:text-claimm-dark dark:hover:text-gray-200'
                }`
              }
            >
              <Icon size={18} strokeWidth={1.75} />
              <span>{label}</span>
            </NavLink>
          )
        })}
      </nav>

      <div className="px-6 py-5 border-t border-claimm-dark/10 dark:border-white/10 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="text-sm text-claimm-dark dark:text-white font-medium truncate">{currentUser.name}</p>
          <p className="text-xs text-claimm-dark/50 dark:text-gray-400">{currentUser.role}</p>
        </div>
        <button
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Hellmodus aktivieren' : 'Dunkelmodus aktivieren'}
          className="shrink-0 w-8 h-8 flex items-center justify-center rounded border border-claimm-dark/15 dark:border-white/15 text-claimm-dark/60 dark:text-gray-300 hover:text-claimm-red hover:border-claimm-red/40 transition-colors"
        >
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>
    </aside>
  )
}
