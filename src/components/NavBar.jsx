import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Languages } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function NavBar() {
  const { pathname } = useLocation()
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 dark:border-neutral-800 backdrop-blur bg-white/70 dark:bg-neutral-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link to="/farmer/dashboard" className="font-semibold">🌾 Agrikart</Link>
        <div className="flex items-center gap-2 text-sm">
          <nav className="hidden md:flex gap-4 text-gray-600 dark:text-gray-300">
            <Link to="/farmer/dashboard" className={pathname.startsWith('/farmer') ? 'text-brand-600' : ''}>Farmer</Link>
            <Link to="/buyer/browse" className={pathname.startsWith('/buyer') ? 'text-brand-600' : ''}>Buyer</Link>
            <Link to="/employee/assignments" className={pathname.startsWith('/employee') ? 'text-brand-600' : ''}>Employee</Link>
            <Link to="/admin/users" className={pathname.startsWith('/admin') ? 'text-brand-600' : ''}>Admin</Link>
          </nav>
          <button className="btn-outline" aria-label="toggle theme" onClick={() => setDark(v => !v)}>{dark ? <Sun size={16}/> : <Moon size={16}/>}</button>
        </div>
      </div>
    </header>
  )
}
