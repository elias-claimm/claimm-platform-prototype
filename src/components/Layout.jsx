import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="ml-[240px] h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
