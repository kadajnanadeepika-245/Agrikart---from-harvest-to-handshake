import { Outlet, Link } from 'react-router-dom'
import LanguageSwitcher from '../components/LanguageSwitcher.jsx'

export default function RootLayout() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-green-400/20 rounded-full blur-sm"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float delay-1000">
          <div className="w-12 h-12 bg-yellow-400/20 rounded-full blur-sm"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float delay-2000">
          <div className="w-20 h-20 bg-orange-400/20 rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen grid place-items-center p-6">
        <div className="w-full max-w-2xl">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="p-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white transform group-hover:scale-110 transition-all duration-200">
                  <span className="text-xl">🌾</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">Agrikart</h1>
                  <p className="text-xs text-green-600 font-medium">From Harvest to Handshake</p>
                </div>
              </Link>
              <LanguageSwitcher />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
