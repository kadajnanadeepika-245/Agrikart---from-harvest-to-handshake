import { useState } from 'react'
import { useAuthStore } from '../../stores/auth.jsx'
import { User, Mail, Phone, MapPin, Calendar, Save, Camera, Shield, CheckCircle, XCircle, Award, TrendingUp, Clock, Star, Eye, Package, AlertTriangle } from 'lucide-react'

export default function EmployeeProfile() {
  const { user, setUser } = useAuthStore()
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    city: user?.city || '',
    state: user?.state || '',
    pincode: user?.pincode || '',
    dateOfBirth: user?.dateOfBirth || '',
    gender: user?.gender || '',
    qualification: user?.qualification || '',
    department: user?.department || '',
    employeeId: user?.employeeId || 'EMP001',
    experience: user?.experience || '',
    specialization: user?.specialization || '',
    certifications: user?.certifications || ''
  })

  // Quality checker performance data
  const performanceStats = {
    totalAssignments: 156,
    completedAssignments: 148,
    pendingAssignments: 8,
    accuracyRate: 96.5,
    avgProcessingTime: '2.3 hours',
    monthlyTarget: 200,
    currentMonthCompleted: 45,
    rating: 4.8,
    totalFarmersVerified: 89,
    cropsApproved: 142,
    cropsRejected: 14
  }

  const recentActivity = [
    {
      id: 1,
      action: 'Verified',
      crop: 'Organic Tomatoes',
      farmer: 'Rajesh Kumar',
      date: '2024-10-16',
      status: 'approved',
      notes: 'High quality, meets organic standards'
    },
    {
      id: 2,
      action: 'Rejected',
      crop: 'Wheat',
      farmer: 'Suresh Patel',
      date: '2024-10-15',
      status: 'rejected',
      notes: 'Quality issues detected, moisture content too high'
    },
    {
      id: 3,
      action: 'Verified',
      crop: 'Basmati Rice',
      farmer: 'Amit Singh',
      date: '2024-10-15',
      status: 'approved',
      notes: 'Premium quality, excellent grain length'
    },
    {
      id: 4,
      action: 'Flagged',
      crop: 'Potatoes',
      farmer: 'Priya Sharma',
      date: '2024-10-14',
      status: 'flagged',
      notes: 'Requires additional documentation'
    }
  ]

  const certifications = [
    {
      name: 'Organic Food Quality Certification',
      issuer: 'FSSAI',
      date: '2023-08-15',
      validity: '2025-08-15',
      status: 'active'
    },
    {
      name: 'Agricultural Quality Inspector',
      issuer: 'Ministry of Agriculture',
      date: '2022-12-10',
      validity: '2024-12-10',
      status: 'active'
    },
    {
      name: 'Food Safety Management',
      issuer: 'ISO 22000',
      date: '2023-03-20',
      validity: '2026-03-20',
      status: 'active'
    }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {
    setUser({ ...user, ...formData })
    setIsEditing(false)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'text-green-600 bg-green-50'
      case 'rejected': return 'text-red-600 bg-red-50'
      case 'flagged': return 'text-yellow-600 bg-yellow-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-4 h-4" />
      case 'rejected': return <XCircle className="w-4 h-4" />
      case 'flagged': return <AlertTriangle className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold">
              {user?.name?.charAt(0) || 'Q'}
            </div>
            <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{user?.name || 'Quality Checker'}</h1>
            <div className="flex items-center space-x-4 text-white/80 mb-2">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Quality Inspector</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{user?.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span>ID: {formData.employeeId}</span>
              <span>•</span>
              <span>Rating: {performanceStats.rating}/5</span>
              <span>•</span>
              <span>Accuracy: {performanceStats.accuracyRate}%</span>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'profile', label: 'Profile', icon: <User className="w-4 h-4" /> },
            { id: 'performance', label: 'Performance', icon: <TrendingUp className="w-4 h-4" /> },
            { id: 'activity', label: 'Recent Activity', icon: <Clock className="w-4 h-4" /> },
            { id: 'certifications', label: 'Certifications', icon: <Award className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Personal Information</h2>
          
          <div className="space-y-6">
            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Employee ID</label>
                <input
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700"
                  placeholder="+91 9876543210"
                />
              </div>
            </div>

            {/* Professional Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700"
                  placeholder="e.g., B.Sc Agriculture"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Department</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700"
                >
                  <option value="">Select Department</option>
                  <option value="quality_control">Quality Control</option>
                  <option value="inspection">Inspection</option>
                  <option value="testing">Testing</option>
                  <option value="certification">Certification</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700"
                  placeholder="e.g., 5 years"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Specialization</label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700"
                  placeholder="e.g., Organic Certification, Grain Quality"
                />
              </div>
            </div>

            {/* Save Button */}
            {isEditing && (
              <div className="flex justify-end pt-6">
                <button
                  onClick={handleSave}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Performance Tab */}
      {activeTab === 'performance' && (
        <div className="space-y-6">
          {/* Performance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Assignments</p>
                  <p className="text-2xl font-bold text-purple-600">{performanceStats.totalAssignments}</p>
                </div>
                <Package className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Accuracy Rate</p>
                  <p className="text-2xl font-bold text-green-600">{performanceStats.accuracyRate}%</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Avg Processing Time</p>
                  <p className="text-2xl font-bold text-blue-600">{performanceStats.avgProcessingTime}</p>
                </div>
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Rating</p>
                  <p className="text-2xl font-bold text-yellow-600">{performanceStats.rating}/5</p>
                </div>
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
          </div>

          {/* Monthly Progress */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Monthly Progress</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Assignments Completed</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">{performanceStats.currentMonthCompleted}/{performanceStats.monthlyTarget}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(performanceStats.currentMonthCompleted / performanceStats.monthlyTarget) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recent Activity Tab */}
      {activeTab === 'activity' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Quality Checks</h3>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-full ${getStatusColor(activity.status)}`}>
                      {getStatusIcon(activity.status)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {activity.action} {activity.crop}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Farmer: {activity.farmer}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                        {activity.notes}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{activity.date}</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                      {activity.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications Tab */}
      {activeTab === 'certifications' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Professional Certifications</h3>
          </div>
          <div className="p-6">
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                        <Award className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Issued by: {cert.issuer}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>Issued: {cert.date}</span>
                          <span>Valid until: {cert.validity}</span>
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {cert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
