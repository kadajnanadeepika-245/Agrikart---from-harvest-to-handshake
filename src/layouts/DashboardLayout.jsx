import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import SimpleTopBar from '../components/SimpleTopBar.jsx'

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950">
      <SimpleTopBar />
      <div className="flex">
        <aside className="w-64 min-h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
          <Sidebar />
        </aside>
        <main className="flex-1 p-6">
          <div className="card p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
