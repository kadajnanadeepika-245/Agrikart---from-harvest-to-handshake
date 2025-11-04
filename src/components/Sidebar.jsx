import { NavLink, useLocation } from 'react-router-dom'
import { Sprout, ShoppingCart, Users, CheckCircle2, Settings } from 'lucide-react'

const linkClass = ({ isActive }) => `
  flex items-center gap-2 px-3 py-2 rounded-lg text-sm
  ${isActive ? 'bg-brand-50 text-brand-700 dark:bg-neutral-800 dark:text-brand-300' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-900'}
`

export default function Sidebar() {
  const { pathname } = useLocation()
  const role = pathname.split('/')[1] || 'farmer'

  return (
    <nav className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">{role}</p>
        {role === 'farmer' && (
          <div className="space-y-1">
            <NavLink to="/farmer/dashboard" className={linkClass}><Sprout size={16}/>Dashboard</NavLink>
            <NavLink to="/farmer/crops" className={linkClass}><ShoppingCart size={16}/>Crops</NavLink>
            <NavLink to="/farmer/proposals" className={linkClass}><Users size={16}/>Proposals</NavLink>
            <NavLink to="/farmer/deals" className={linkClass}><CheckCircle2 size={16}/>Deals</NavLink>
          </div>
        )}
        {role === 'buyer' && (
          <div className="space-y-1">
            <NavLink to="/buyer/browse" className={linkClass}><Sprout size={16}/>Browse</NavLink>
            <NavLink to="/buyer/proposals" className={linkClass}><Users size={16}/>Proposals</NavLink>
            <NavLink to="/buyer/chat" className={linkClass}><Settings size={16}/>Chat</NavLink>
          </div>
        )}
        {role === 'employee' && (
          <div className="space-y-1">
            <NavLink to="/employee/assignments" className={linkClass}><Users size={16}/>Assignments</NavLink>
            <NavLink to="/employee/quality" className={linkClass}><CheckCircle2 size={16}/>Quality</NavLink>
          </div>
        )}
        {role === 'admin' && (
          <div className="space-y-1">
            <NavLink to="/admin/users" className={linkClass}><Users size={16}/>Users</NavLink>
            <NavLink to="/admin/reports" className={linkClass}><CheckCircle2 size={16}/>Reports</NavLink>
            <NavLink to="/admin/settings" className={linkClass}><Settings size={16}/>Settings</NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}
