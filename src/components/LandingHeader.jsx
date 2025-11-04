import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X, Leaf, ArrowRight, Users, Shield, Settings } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function LandingHeader() {
  const { pathname } = useLocation()
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ]

  const portalLinks = [
    { 
      label: 'Farmer Portal', 
      href: '/farmer/dashboard', 
      icon: <Leaf className="w-4 h-4" />,
      color: 'text-green-600 hover:text-green-700'
    },
    { 
      label: 'Buyer Portal', 
      href: '/buyer/browse', 
      icon: <Users className="w-4 h-4" />,
      color: 'text-blue-600 hover:text-blue-700'
    },
    { 
      label: 'Quality Check', 
      href: '/employee/assignments', 
      icon: <Shield className="w-4 h-4" />,
      color: 'text-purple-600 hover:text-purple-700'
    },
    { 
      label: 'Admin', 
      href: '/admin/users', 
      icon: <Settings className="w-4 h-4" />,
      color: 'text-red-600 hover:text-red-700'
    }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700' 
        : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white transform group-hover:scale-110 transition-all duration-200 shadow-lg">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                scrolled ? 'text-gray-900 dark:text-white' : 'text-white'
              }`}>
                Agrikart
              </h1>
              <p className="text-xs text-green-500 font-medium">From Harvest to Handshake</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium transition-colors hover:text-green-500 ${
                  scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white/90'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Portal Dropdown */}
            <div className="relative group">
              <button className={`font-medium transition-colors hover:text-green-500 flex items-center space-x-1 ${
                scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white/90'
              }`}>
                <span>Portals</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {portalLinks.map((portal) => (
                    <Link
                      key={portal.label}
                      to={portal.href}
                      className={`flex items-center space-x-3 px-4 py-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 ${portal.color}`}
                    >
                      {portal.icon}
                      <span className="font-medium">{portal.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setDark(v => !v)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled 
                  ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link
                to="/login"
                className={`px-4 py-2 font-medium rounded-lg transition-all ${
                  scrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="group inline-flex items-center px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled 
                  ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {/* Navigation Links */}
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Portal Links */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <p className="px-4 text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Quick Access</p>
              <div className="space-y-1">
                {portalLinks.map((portal) => (
                  <Link
                    key={portal.label}
                    to={portal.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${portal.color}`}
                  >
                    {portal.icon}
                    <span className="font-medium">{portal.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-4 py-3 text-center text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-4 py-3 text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  )
}
