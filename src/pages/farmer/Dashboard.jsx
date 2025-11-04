import { TrendingUp, Package, DollarSign, Clock, Plus, Eye, MessageSquare, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import AIChatbot from '../../components/AIChatbot.jsx'

export default function FarmerDashboard() {
  const stats = [
    {
      title: "Active Listings",
      value: "12",
      change: "+2 this week",
      icon: <Package className="w-6 h-6" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      changeColor: "text-green-600"
    },
    {
      title: "Monthly Earnings",
      value: "₹1,24,500",
      change: "+18% from last month",
      icon: <DollarSign className="w-6 h-6" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      changeColor: "text-blue-600"
    },
    {
      title: "Pending Proposals",
      value: "8",
      change: "3 new today",
      icon: <Clock className="w-6 h-6" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      changeColor: "text-orange-600"
    },
    {
      title: "Total Views",
      value: "2,847",
      change: "+12% this week",
      icon: <Eye className="w-6 h-6" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      changeColor: "text-purple-600"
    }
  ]

  const recentCrops = [
    {
      id: 1,
      name: "Organic Tomatoes",
      quantity: "500 kg",
      price: "₹45/kg",
      status: "Active",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&h=100&fit=crop",
      views: 234,
      proposals: 5
    },
    {
      id: 2,
      name: "Fresh Potatoes",
      quantity: "1000 kg",
      price: "₹25/kg",
      status: "Active",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&h=100&fit=crop",
      views: 189,
      proposals: 3
    },
    {
      id: 3,
      name: "Green Chilies",
      quantity: "200 kg",
      price: "₹80/kg",
      status: "Sold",
      image: "https://images.unsplash.com/photo-1583573607873-74b5d2b3c7b4?w=100&h=100&fit=crop",
      views: 156,
      proposals: 8
    }
  ]

  const recentActivity = [
    {
      id: 1,
      type: "proposal",
      message: "New proposal received for Organic Tomatoes",
      time: "2 hours ago",
      icon: <MessageSquare className="w-4 h-4 text-blue-500" />
    },
    {
      id: 2,
      type: "sale",
      message: "Green Chilies sold successfully",
      time: "1 day ago",
      icon: <TrendingUp className="w-4 h-4 text-green-500" />
    },
    {
      id: 3,
      type: "listing",
      message: "Fresh Potatoes listing viewed 25 times",
      time: "2 days ago",
      icon: <Eye className="w-4 h-4 text-purple-500" />
    }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Farmer! 🌾</h1>
          <p className="text-green-100 mb-4">Here's what's happening with your crops today</p>
          <Link
            to="/farmer/crops/new"
            className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors shadow-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Crop
          </Link>
        </div>
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute -right-5 -bottom-5 w-20 h-20 bg-white/5 rounded-full"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <div className={stat.color}>
                  {stat.icon}
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
              </div>
            </div>
            <div className="flex items-center">
              <TrendingUp className={`w-4 h-4 mr-1 ${stat.changeColor}`} />
              <span className={`text-sm font-medium ${stat.changeColor}`}>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Crops */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Your Crops</h3>
              <Link
                to="/farmer/crops"
                className="text-green-600 hover:text-green-700 font-medium text-sm"
              >
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {recentCrops.map((crop) => (
                <div key={crop.id} className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{crop.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{crop.quantity} • {crop.price}</p>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className="flex items-center text-xs text-gray-500">
                        <Eye className="w-3 h-3 mr-1" />
                        {crop.views}
                      </span>
                      <span className="flex items-center text-xs text-gray-500">
                        <MessageSquare className="w-3 h-3 mr-1" />
                        {crop.proposals}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      crop.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {crop.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 dark:text-white">{activity.message}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                to="/farmer/crops/new"
                className="flex items-center p-3 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/30 rounded-lg transition-colors group"
              >
                <Plus className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-green-700 dark:text-green-400 font-medium">Add New Crop</span>
              </Link>
              <Link
                to="/farmer/proposals"
                className="flex items-center p-3 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 rounded-lg transition-colors group"
              >
                <MessageSquare className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-blue-700 dark:text-blue-400 font-medium">View Proposals</span>
              </Link>
              <Link
                to="/farmer/deals"
                className="flex items-center p-3 bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 rounded-lg transition-colors group"
              >
                <Star className="w-5 h-5 text-purple-600 mr-3" />
                <span className="text-purple-700 dark:text-purple-400 font-medium">Manage Deals</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  )
}
