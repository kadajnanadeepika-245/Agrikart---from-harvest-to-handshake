import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { User, Mail, Lock, Phone, MapPin, Calendar, Briefcase, Leaf, ShoppingCart, Shield, Settings } from 'lucide-react'

export default function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const nav = useNavigate()
  const [selectedRole, setSelectedRole] = useState('farmer')

  const onSubmit = (data) => {
    console.log('Registration data:', data)
    // Here you would normally send data to your backend
    nav('/login')
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

  const renderRoleSpecificFields = () => {
    switch (selectedRole) {
      case 'farmer':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Farm Size (acres)</label>
                <input
                  {...register('farmSize')}
                  placeholder="e.g., 5 acres"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience (years)</label>
                <input
                  {...register('experience')}
                  placeholder="e.g., 10 years"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Crop Types</label>
              <input
                {...register('cropTypes')}
                placeholder="e.g., Rice, Wheat, Vegetables"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </>
        )
      case 'buyer':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  {...register('companyName')}
                  placeholder="e.g., ABC Trading Co."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                <select
                  {...register('businessType')}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Type</option>
                  <option value="retailer">Retailer</option>
                  <option value="wholesaler">Wholesaler</option>
                  <option value="distributor">Distributor</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="food_processing">Food Processing</option>
                </select>
              </div>
            </div>
          </>
        )
      case 'employee':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Qualification</label>
                <input
                  {...register('qualification')}
                  placeholder="e.g., B.Sc Agriculture"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <select
                  {...register('department')}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select Department</option>
                  <option value="quality_control">Quality Control</option>
                  <option value="inspection">Inspection</option>
                  <option value="testing">Testing</option>
                  <option value="certification">Certification</option>
                </select>
              </div>
            </div>
          </>
        )
      case 'admin':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <select
              {...register('department')}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Select Department</option>
              <option value="operations">Operations</option>
              <option value="management">Management</option>
              <option value="technical">Technical</option>
              <option value="support">Support</option>
            </select>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Agrikart</h1>
          <p className="text-gray-600">Create your account and start connecting with the agricultural community</p>
        </div>

        {/* Role Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Choose Your Role</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: 'farmer', label: 'Farmer', desc: 'Sell your crops directly' },
              { value: 'buyer', label: 'Buyer', desc: 'Buy fresh produce' },
              { value: 'employee', label: 'Quality Checker', desc: 'Ensure quality standards' },
              { value: 'admin', label: 'Admin', desc: 'Manage the platform' }
            ].map((role) => (
              <button
                key={role.value}
                type="button"
                onClick={() => setSelectedRole(role.value)}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  selectedRole === role.value ? getRoleColor(role.value) : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  {getRoleIcon(role.value)}
                  <span className="font-semibold">{role.label}</span>
                </div>
                <p className="text-xs text-gray-500">{role.desc}</p>
              </button>
            ))}
          </div>
          <input type="hidden" {...register('role')} value={selectedRole} />
        </div>

        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
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
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  {...register('phone', { required: 'Phone number is required' })}
                  type="tel"
                  placeholder="+91 9876543210"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  {...register('dateOfBirth')}
                  type="date"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select
              {...register('gender')}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                {...register('password', { 
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                })}
                type="password"
                placeholder="Create a strong password"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
        </div>

        {/* Address Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Address Information</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <textarea
                {...register('address')}
                rows={3}
                placeholder="Enter your complete address"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                {...register('city')}
                placeholder="e.g., Mumbai"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <input
                {...register('state')}
                placeholder="e.g., Maharashtra"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
              <input
                {...register('pincode')}
                placeholder="e.g., 400001"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Role-specific fields */}
        {selectedRole && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {selectedRole === 'farmer' && 'Farming Details'}
              {selectedRole === 'buyer' && 'Business Details'}
              {selectedRole === 'employee' && 'Professional Details'}
              {selectedRole === 'admin' && 'Administrative Details'}
            </h3>
            {renderRoleSpecificFields()}
          </div>
        )}

        <button 
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Create Account
        </button>
        
        <p className="text-center text-sm text-gray-500">
          Already have an account? <Link className="text-green-600 hover:text-green-700 font-medium" to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  )
}
