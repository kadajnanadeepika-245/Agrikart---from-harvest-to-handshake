import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Sun, Moon, LogOut, User, Bell, Menu, X, Leaf, ShoppingCart, Shield, Settings, Package, MessageSquare, TrendingUp, CheckCircle, Users, BarChart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../stores/auth.jsx'

export default function ThemedHeader() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  // Determine current section and theme
  const getCurrentTheme = () => {
    if (pathname.startsWith('/farmer')) {
      return {
        name: 'Farmer Portal',
        icon: <Leaf className="w-6 h-6" />,
        gradient: 'from-green-600 to-emerald-600',
        bgPattern: 'bg-green-50',
        textColor: 'text-green-700',
        accentColor: 'text-green-600'
      }
    } else if (pathname.startsWith('/buyer')) {
      return {
        name: 'Buyer Portal',
        icon: <ShoppingCart className="w-6 h-6" />,
        gradient: 'from-blue-600 to-cyan-600',
        bgPattern: 'bg-blue-50',
        textColor: 'text-blue-700',
        accentColor: 'text-blue-600'
      }
    } else if (pathname.startsWith('/employee')) {
      return {
        name: 'Quality Control',
        icon: <Shield className="w-6 h-6" />,
        gradient: 'from-purple-600 to-indigo-600',
        bgPattern: 'bg-purple-50',
        textColor: 'text-purple-700',
        accentColor: 'text-purple-600'
      }
    } else if (pathname.startsWith('/admin')) {
      return {
        name: 'Admin Panel',
        icon: <Settings className="w-6 h-6" />,
        gradient: 'from-red-600 to-pink-600',
        bgPattern: 'bg-red-50',
        textColor: 'text-red-700',
        accentColor: 'text-red-600'
      }
    }
    return {
      name: 'Agrikart',
      icon: <Leaf className="w-6 h-6" />,
      gradient: 'from-green-600 to-emerald-600',
      bgPattern: 'bg-green-50',
      textColor: 'text-green-700',
      accentColor: 'text-green-600'
    }
  }

  const theme = getCurrentTheme()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  // Get navigation items based on user role
  const getNavItems = () => {
    if (!user || !user.role) return []
    
    switch (user.role) {
      case 'farmer':
        return [
          { path: '/farmer/dashboard', label: 'Dashboard', icon: <Leaf className="w-4 h-4" /> },
          { path: '/farmer/crops', label: 'My Crops', icon: <Package className="w-4 h-4" /> },
          { path: '/farmer/proposals', label: 'Proposals', icon: <MessageSquare className="w-4 h-4" /> },
          { path: '/farmer/deals', label: 'Deals', icon: <TrendingUp className="w-4 h-4" /> }
        ]
      case 'buyer':
        return [
          { path: '/buyer/browse', label: 'Browse', icon: <ShoppingCart className="w-4 h-4" /> },
          { path: '/buyer/proposals', label: 'My Proposals', icon: <MessageSquare className="w-4 h-4" /> },
          { path: '/buyer/chat', label: 'Chat', icon: <MessageSquare className="w-4 h-4" /> }
        ]
      case 'employee':
        return [
          { path: '/employee/assignments', label: 'Assignments', icon: <Shield className="w-4 h-4" /> },
          { path: '/employee/quality', label: 'Quality Check', icon: <CheckCircle className="w-4 h-4" /> }
        ]
      case 'admin':
        return [
          { path: '/admin/users', label: 'Users', icon: <Users className="w-4 h-4" /> },
          { path: '/admin/reports', label: 'Reports', icon: <BarChart className="w-4 h-4" /> },
          { path: '/admin/settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> }
        ]
      default:
        return []
    }
  }

  const navItems = getNavItems()

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-700 shadow-lg`}>
      {/* Main Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className={`p-2 rounded-xl bg-gradient-to-r ${theme.gradient} text-white transform group-hover:scale-110 transition-all duration-200`}>
                {theme.icon}
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Agrikart</h1>
                <p className={`text-xs ${theme.accentColor} font-medium`}>{theme.name}</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path || pathname.startsWith(item.path.split('/').slice(0, 2).join('/'))
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? `bg-gradient-to-r ${theme.gradient} text-white shadow-lg`
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Notifications */}
            <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setDark(v => !v)}
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
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${theme.gradient} flex items-center justify-center text-white font-bold text-sm`}>
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
                  </div>
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <User className="w-4 h-4" />
                    <span>Profile</span>
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.path)
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? `bg-gradient-to-r ${theme.gradient} text-white`
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Themed Banner */}
      <div className={`${theme.bgPattern} dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${theme.gradient} text-white`}>
                {theme.icon}
              </div>
              <div>
                <h2 className={`text-lg font-bold ${theme.textColor} dark:text-white`}>
                  {theme.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {pathname.includes('dashboard') && 'Overview & Analytics'}
                  {pathname.includes('crops') && 'Manage Your Crops'}
                  {pathname.includes('browse') && 'Discover Fresh Produce'}
                  {pathname.includes('proposals') && 'Manage Proposals'}
                  {pathname.includes('deals') && 'Your Deals & Transactions'}
                  {pathname.includes('chat') && 'Communication Center'}
                  {pathname.includes('assignments') && 'Quality Check Tasks'}
                  {pathname.includes('quality') && 'Quality Assessment'}
                  {pathname.includes('users') && 'User Management'}
                  {pathname.includes('reports') && 'Analytics & Reports'}
                  {pathname.includes('settings') && 'System Configuration'}
                </p>
              </div>
            </div>
            
            {/* Quick Stats or Actions */}
            <div className="hidden sm:flex items-center space-x-4">
              <div className="text-right">
                <p className={`text-sm font-bold ${theme.accentColor}`}>
                  {pathname.includes('farmer') && '12 Active Crops'}
                  {pathname.includes('buyer') && '47 New Listings'}
                  {pathname.includes('employee') && '8 Pending Checks'}
                  {pathname.includes('admin') && '1,247 Total Users'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Last updated: Just now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Close dropdowns when clicking outside */}
      {(profileMenuOpen || mobileMenuOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setProfileMenuOpen(false)
            setMobileMenuOpen(false)
          }}
        />
      )}
    </header>
  )
}
