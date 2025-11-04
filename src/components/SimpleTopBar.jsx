import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, LogOut, Settings, Sun, Moon } from 'lucide-react'
import { useAuthStore } from '../stores/auth.jsx'

export default function SimpleTopBar() {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const getProfilePath = () => {
    if (!user?.role) return '/profile'
    return `/${user.role}/profile`
  }

  const getThemeColor = () => {
    switch (user?.role) {
      case 'farmer': return 'from-green-600 to-emerald-600'
      case 'buyer': return 'from-blue-600 to-cyan-600'
      case 'employee': return 'from-purple-600 to-indigo-600'
      case 'admin': return 'from-red-600 to-pink-600'
      default: return 'from-green-600 to-emerald-600'
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-3">
      <div className="flex items-center justify-end space-x-4">
        {/* Theme Toggle */}
        <button
          onClick={() => {
            setDark(!dark)
            document.documentElement.classList.toggle('dark', !dark)
          }}
          className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Toggle theme"
        >
          {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Profile Menu */}
        <div className="relative">
          <button
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            className="flex items-center space-x-2 p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getThemeColor()} flex items-center justify-center text-white font-bold text-sm`}>
              {user?.name?.charAt(0) || 'U'}
            </div>
            <span className="hidden sm:block font-medium">{user?.name || 'User'}</span>
          </button>

          {/* Profile Dropdown */}
          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
              <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email}</p>
                <p className="text-xs text-green-600 dark:text-green-400 capitalize">{user?.role}</p>
              </div>
              <Link
                to={getProfilePath()}
                onClick={() => setProfileMenuOpen(false)}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <User className="w-4 h-4" />
                <span>Profile Settings</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Close dropdown when clicking outside */}
      {profileMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setProfileMenuOpen(false)}
        />
      )}
    </div>
  )
}
