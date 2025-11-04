import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAuthStore } from '../../stores/auth.jsx'
import { User, Mail, Leaf, ShoppingCart, Shield, Settings, Eye, EyeOff } from 'lucide-react'

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const nav = useNavigate()
  const loc = useLocation()
  const { loginDemo } = useAuthStore()
  const [showPassword, setShowPassword] = useState(false)
  const [selectedRole, setSelectedRole] = useState('farmer')

  const onSubmit = (data) => {
    loginDemo(selectedRole)
    const redirect = selectedRole === 'farmer' ? '/farmer/dashboard'
      : selectedRole === 'buyer' ? '/buyer/browse'
      : selectedRole === 'employee' ? '/employee/assignments'
      : '/admin/users'
    nav(loc.state?.from?.pathname || redirect)
  }

  const handleGoogleLogin = () => {
    // Simulate Google login
    loginDemo(selectedRole)
    const redirect = selectedRole === 'farmer' ? '/farmer/dashboard'
      : selectedRole === 'buyer' ? '/buyer/browse'
      : selectedRole === 'employee' ? '/employee/assignments'
      : '/admin/users'
    nav(redirect)
  }

  const getRoleIcon = (role) => {
    switch (role) {
      case 'farmer': return <Leaf className="w-5 h-5 text-green-600" />
      case 'buyer': return <ShoppingCart className="w-5 h-5 text-blue-600" />
      case 'employee': return <Shield className="w-5 h-5 text-purple-600" />
      case 'admin': return <Settings className="w-5 h-5 text-red-600" />
      default: return <User className="w-5 h-5 text-gray-600" />
    }
  }

  const getRoleColor = (role) => {
    switch (role) {
      case 'farmer': return 'border-green-500 bg-green-50 text-green-700'
      case 'buyer': return 'border-blue-500 bg-blue-50 text-blue-700'
      case 'employee': return 'border-purple-500 bg-purple-50 text-purple-700'
      case 'admin': return 'border-red-500 bg-red-50 text-red-700'
      default: return 'border-gray-300 bg-gray-50 text-gray-700'
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back!</h1>
        <p className="text-gray-600 dark:text-gray-400">Sign in to your Agrikart account</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              placeholder="Enter your full name"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
          <div className="relative">
            <input
              {...register('password', { required: 'Password is required' })}
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="w-full pl-4 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        {/* Role Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Select Your Role</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: 'farmer', label: 'Farmer', desc: 'Sell your crops' },
              { value: 'buyer', label: 'Buyer', desc: 'Buy fresh produce' },
              { value: 'employee', label: 'Quality Checker', desc: 'Verify crop quality' },
              { value: 'admin', label: 'Admin', desc: 'Manage platform' }
            ].map((role) => (
              <button
                key={role.value}
                type="button"
                onClick={() => setSelectedRole(role.value)}
                className={`p-3 border-2 rounded-lg text-left transition-all ${
                  selectedRole === role.value ? getRoleColor(role.value) : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2 mb-1">
                  {getRoleIcon(role.value)}
                  <span className="font-medium text-sm">{role.label}</span>
                </div>
                <p className="text-xs text-gray-500">{role.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Sign In
        </button>
      </form>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white dark:bg-gray-900 text-gray-500">Or continue with</span>
        </div>
      </div>

      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Continue with Google
      </button>

      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        Don't have an account? <Link className="text-green-600 hover:text-green-700 font-medium" to="/register">Sign up</Link>
      </p>
    </div>
  )
}
