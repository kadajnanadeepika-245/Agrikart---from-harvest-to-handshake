import { useState } from 'react'
import { PieChart, BarChart, LineChart, StatsCard } from '../../components/Charts.jsx'
import { Users, TrendingUp, Package, DollarSign, MapPin, Calendar, Search, Filter, Eye, Edit, Trash2, UserPlus, Download } from 'lucide-react'

export default function AdminUsers() {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRole, setFilterRole] = useState('all')

  // Analytics data
  const userDistribution = [
    { label: 'Farmers', value: 1250, color: '#16a34a' },
    { label: 'Buyers', value: 850, color: '#2563eb' },
    { label: 'Employees', value: 45, color: '#7c3aed' },
    { label: 'Admins', value: 8, color: '#dc2626' }
  ]

  const monthlyGrowth = [
    { label: 'Jan', value: 1200 },
    { label: 'Feb', value: 1350 },
    { label: 'Mar', value: 1500 },
    { label: 'Apr', value: 1680 },
    { label: 'May', value: 1820 },
    { label: 'Jun', value: 2000 },
    { label: 'Jul', value: 2153 }
  ]

  const locationData = [
    { label: 'Maharashtra', value: 680 },
    { label: 'Punjab', value: 520 },
    { label: 'Uttar Pradesh', value: 450 },
    { label: 'Gujarat', value: 380 },
    { label: 'Karnataka', value: 320 },
    { label: 'Others', value: 203 }
  ]

  const revenueData = [
    { label: 'Jan', value: 45000 },
    { label: 'Feb', value: 52000 },
    { label: 'Mar', value: 48000 },
    { label: 'Apr', value: 61000 },
    { label: 'May', value: 67000 },
    { label: 'Jun', value: 73000 },
    { label: 'Jul', value: 78000 }
  ]

  const users = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      role: "farmer",
      location: "Pune, Maharashtra",
      joinDate: "2023-05-15",
      status: "active",
      totalDeals: 156,
      revenue: 245000,
      rating: 4.8
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@example.com", 
      role: "buyer",
      location: "Mumbai, Maharashtra",
      joinDate: "2023-08-20",
      status: "active",
      totalDeals: 89,
      revenue: 180000,
      rating: 4.6
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit@example.com",
      role: "farmer",
      location: "Aurangabad, Maharashtra", 
      joinDate: "2022-12-10",
      status: "active",
      totalDeals: 234,
      revenue: 420000,
      rating: 4.9
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha@example.com",
      role: "employee",
      location: "Nashik, Maharashtra",
      joinDate: "2024-01-15",
      status: "active",
      totalDeals: 0,
      revenue: 0,
      rating: 4.7
    }
  ]

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = filterRole === 'all' || user.role === filterRole
    return matchesSearch && matchesRole
  })

  const getRoleColor = (role) => {
    switch (role) {
      case 'farmer': return 'bg-green-100 text-green-800'
      case 'buyer': return 'bg-blue-100 text-blue-800'
      case 'employee': return 'bg-purple-100 text-purple-800'
      case 'admin': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'inactive': return 'bg-yellow-100 text-yellow-800'
      case 'banned': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Monitor platform analytics and manage users</p>
        </div>
        <div className="flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <UserPlus className="w-4 h-4 mr-2" />
            Add User
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', label: 'Overview', icon: <TrendingUp className="w-4 h-4" /> },
            { id: 'users', label: 'Users', icon: <Users className="w-4 h-4" /> },
            { id: 'analytics', label: 'Analytics', icon: <Package className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatsCard
              title="Total Users"
              value="2,153"
              change="+12% this month"
              icon={<Users className="w-6 h-6" />}
              color="blue"
            />
            <StatsCard
              title="Active Deals"
              value="1,247"
              change="+8% this week"
              icon={<Package className="w-6 h-6" />}
              color="green"
            />
            <StatsCard
              title="Revenue"
              value="₹78.5L"
              change="+15% this month"
              icon={<DollarSign className="w-6 h-6" />}
              color="purple"
            />
            <StatsCard
              title="Success Rate"
              value="94.2%"
              change="+2.1% this month"
              icon={<TrendingUp className="w-6 h-6" />}
              color="green"
            />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PieChart data={userDistribution} title="User Distribution" />
            <BarChart data={locationData} title="Users by Location" />
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {user.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PieChart data={userDistribution} title="User Distribution" />
            <BarChart data={locationData} title="Geographical Distribution" />
          </div>
        </div>
      )}
    </div>
  )
}
