import { useState } from 'react'
import { Search, CheckCircle, XCircle, Clock, Eye, User, MapPin, Package, AlertTriangle, Star } from 'lucide-react'

export default function EmpAssignments() {
  const [filterStatus, setFilterStatus] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCrop, setSelectedCrop] = useState(null)

  const assignments = [
    {
      id: 1,
      farmer: {
        name: "Rajesh Kumar",
        location: "Pune, Maharashtra",
        phone: "+91 9876543210",
        email: "rajesh@example.com",
        rating: 4.8,
        totalCrops: 45,
        verifiedCrops: 42,
        joinedDate: "2023-05-15",
        farmSize: "5 acres",
        experience: "10 years"
      },
      crop: {
        name: "Organic Tomatoes",
        variety: "Roma Tomatoes",
        quantity: "500 kg",
        price: 45,
        harvestDate: "2024-10-20",
        expiryDate: "2024-11-15",
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&h=200&fit=crop",
        description: "Fresh organic tomatoes grown without pesticides"
      },
      status: "pending",
      priority: "high",
      assignedDate: "2024-10-16",
      dueDate: "2024-10-18",
      previousVerifications: 3,
      farmerHistory: {
        successRate: 95,
        avgRating: 4.8,
        totalDeals: 156
      }
    },
    {
      id: 2,
      farmer: {
        name: "Priya Sharma",
        location: "Nashik, Maharashtra",
        phone: "+91 9876543211",
        email: "priya@example.com",
        rating: 4.6,
        totalCrops: 23,
        verifiedCrops: 20,
        joinedDate: "2023-08-20",
        farmSize: "3 acres",
        experience: "7 years"
      },
      crop: {
        name: "Fresh Potatoes",
        variety: "Russet Potatoes",
        quantity: "1000 kg",
        price: 25,
        harvestDate: "2024-10-15",
        expiryDate: "2024-12-30",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=200&fit=crop",
        description: "High-quality potatoes perfect for cooking"
      },
      status: "in_review",
      priority: "medium",
      assignedDate: "2024-10-15",
      dueDate: "2024-10-17",
      previousVerifications: 1,
      farmerHistory: {
        successRate: 87,
        avgRating: 4.6,
        totalDeals: 89
      }
    },
    {
      id: 3,
      farmer: {
        name: "Amit Patel",
        location: "Aurangabad, Maharashtra",
        phone: "+91 9876543212",
        email: "amit@example.com",
        rating: 4.9,
        totalCrops: 67,
        verifiedCrops: 65,
        joinedDate: "2022-12-10",
        farmSize: "8 acres",
        experience: "15 years"
      },
      crop: {
        name: "Basmati Rice",
        variety: "Premium Basmati",
        quantity: "2000 kg",
        price: 120,
        harvestDate: "2024-10-25",
        expiryDate: "2025-10-25",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop",
        description: "Premium quality basmati rice with long grains"
      },
      status: "verified",
      priority: "low",
      assignedDate: "2024-10-14",
      dueDate: "2024-10-16",
      previousVerifications: 5,
      farmerHistory: {
        successRate: 97,
        avgRating: 4.9,
        totalDeals: 234
      }
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'in_review': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'verified': return 'bg-green-100 text-green-800 border-green-200'
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />
      case 'in_review': return <Eye className="w-4 h-4" />
      case 'verified': return <CheckCircle className="w-4 h-4" />
      case 'rejected': return <XCircle className="w-4 h-4" />
      default: return <AlertTriangle className="w-4 h-4" />
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600'
      case 'medium': return 'text-yellow-600'
      case 'low': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  const getRiskLevel = (farmer) => {
    const successRate = farmer.farmerHistory.successRate
    if (successRate >= 95) return { level: 'Low Risk', color: 'text-green-600', bg: 'bg-green-50' }
    if (successRate >= 85) return { level: 'Medium Risk', color: 'text-yellow-600', bg: 'bg-yellow-50' }
    return { level: 'High Risk', color: 'text-red-600', bg: 'bg-red-50' }
  }

  const filteredAssignments = assignments.filter(assignment => {
    const matchesStatus = filterStatus === 'all' || assignment.status === filterStatus
    const matchesSearch = assignment.farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assignment.crop.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const handleVerify = (id, decision) => {
    console.log(`${decision} crop with id: ${id}`)
    // Here you would update the crop status
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Quality Check Assignments</h1>
        <p className="text-gray-600 dark:text-gray-400">Review and verify farmer crop listings based on their history and details</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending Reviews</p>
              <p className="text-2xl font-bold text-yellow-600">8</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Verified Today</p>
              <p className="text-2xl font-bold text-green-600">12</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Assignments List */}
      <div className="space-y-6">
        {filteredAssignments.map((assignment) => {
          const risk = getRiskLevel(assignment.farmer)
          return (
            <div key={assignment.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={assignment.crop.image}
                    alt={assignment.crop.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{assignment.crop.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{assignment.crop.variety}</p>
                    <p className="text-sm text-gray-500">{assignment.crop.quantity} • ₹{assignment.crop.price}/kg</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(assignment.status)}`}>
                  {getStatusIcon(assignment.status)}
                  <span className="ml-1 capitalize">{assignment.status}</span>
                </span>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Farmer: {assignment.farmer.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${risk.color} ${risk.bg}`}>
                    {risk.level}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Success Rate: <span className="font-medium text-green-600">{assignment.farmerHistory.successRate}%</span></p>
                    <p className="text-gray-600 dark:text-gray-400">Rating: {assignment.farmer.rating}/5</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Experience: {assignment.farmer.experience}</p>
                    <p className="text-gray-600 dark:text-gray-400">Farm: {assignment.farmer.farmSize}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Verified: {assignment.farmer.verifiedCrops}/{assignment.farmer.totalCrops}</p>
                    <p className="text-gray-600 dark:text-gray-400">Total Deals: {assignment.farmerHistory.totalDeals}</p>
                  </div>
                </div>
              </div>

              {assignment.status === 'pending' && (
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleVerify(assignment.id, 'verify')}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve
                  </button>
                  <button
                    onClick={() => handleVerify(assignment.id, 'reject')}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Reject
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
