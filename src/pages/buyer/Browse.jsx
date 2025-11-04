import { useState } from 'react'

import { Search, Filter, MapPin, Calendar, Star, Eye, MessageSquare, Phone, Mail, Package, DollarSign, Leaf, Clock } from 'lucide-react'

export default function BuyerBrowse() {
  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('')
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [sortBy, setSortBy] = useState('newest')
  const [selectedCrop, setSelectedCrop] = useState(null)

  const crops = [
    {
      id: 1,
      name: "Organic Tomatoes",
      variety: "Roma Tomatoes",
      farmer: {
        name: "Rajesh Kumar",
        location: "Pune, Maharashtra",
        phone: "+91 9876543210",
        email: "rajesh@example.com",
        rating: 4.8,
        totalSales: 156
      },
      quantity: "500 kg",
      price: 45,
      totalValue: 22500,
      harvestDate: "2024-10-20",
      expiryDate: "2024-11-15",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=400&h=300&fit=crop"
      ],
      views: 234,
      proposals: 5,
      rating: 4.8,
      qualityCheck: "verified",
      description: "Fresh organic tomatoes grown without pesticides. Perfect for cooking and salads.",
      distance: "12 km",
      coordinates: { lat: 18.5204, lng: 73.8567 }
    },
    {
      id: 2,
      name: "Fresh Potatoes",
      variety: "Russet Potatoes",
      farmer: {
        name: "Priya Sharma",
        location: "Nashik, Maharashtra",
        phone: "+91 9876543211",
        email: "priya@example.com",
        rating: 4.6,
        totalSales: 89
      },
      quantity: "1000 kg",
      price: 25,
      totalValue: 25000,
      harvestDate: "2024-10-15",
      expiryDate: "2024-12-30",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop"
      ],
      views: 189,
      proposals: 3,
      rating: 4.6,
      qualityCheck: "pending",
      description: "High-quality potatoes perfect for cooking. Grown in fertile soil.",
      distance: "45 km",
      coordinates: { lat: 19.9975, lng: 73.7898 }
    },
    {
      id: 3,
      name: "Basmati Rice",
      variety: "Premium Basmati",
      farmer: {
        name: "Amit Patel",
        location: "Aurangabad, Maharashtra",
        phone: "+91 9876543212",
        email: "amit@example.com",
        rating: 4.9,
        totalSales: 234
      },
      quantity: "2000 kg",
      price: 120,
      totalValue: 240000,
      harvestDate: "2024-10-25",
      expiryDate: "2025-10-25",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop"
      ],
      views: 445,
      proposals: 12,
      rating: 4.7,
      qualityCheck: "verified",
      description: "Premium quality basmati rice with long grains and excellent aroma.",
      distance: "78 km",
      coordinates: { lat: 19.8762, lng: 75.3433 }
    }
  ]

  const filteredCrops = crops.filter(crop => {
    const matchesSearch = crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         crop.variety.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = !locationFilter || crop.farmer.location.toLowerCase().includes(locationFilter.toLowerCase())
    const matchesPrice = crop.price >= priceRange[0] && crop.price <= priceRange[1]
    return matchesSearch && matchesLocation && matchesPrice
  })

  const handleSendProposal = (cropId) => {
    // This would open a proposal modal
    console.log('Send proposal for crop:', cropId)
  }

  const handleContactFarmer = (farmer) => {
    setSelectedCrop(farmer)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Browse Fresh Produce</h1>
        <p className="text-gray-600 dark:text-gray-400">Discover quality crops from verified farmers near you</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search crops..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Location..."
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="distance">Nearest First</option>
            <option value="rating">Highest Rated</option>
          </select>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">₹0</span>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="flex-1"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">₹{priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600 dark:text-gray-400">
          Found {filteredCrops.length} crops
        </p>
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600 dark:text-gray-400">Advanced Filters</span>
        </div>
      </div>

      {/* Crops Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCrops.map((crop) => (
          <div key={crop.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="relative">
              <img
                src={crop.image}
                alt={crop.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  crop.qualityCheck === 'verified' 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                }`}>
                  <Package className="w-3 h-3 mr-1" />
                  {crop.qualityCheck}
                </span>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-gray-600" />
                  <span className="text-xs font-medium text-gray-700">{crop.distance}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{crop.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{crop.variety}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{crop.rating}</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{crop.description}</p>

              {/* Farmer Info */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">{crop.farmer.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {crop.farmer.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs font-medium">{crop.farmer.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500">{crop.farmer.totalSales} sales</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Quantity</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{crop.quantity}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Price per kg</p>
                  <p className="font-semibold text-blue-600">₹{crop.price}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleSendProposal(crop.id)}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Proposal
                </button>
                <button
                  onClick={() => handleContactFarmer(crop.farmer)}
                  className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Modal */}
      {selectedCrop && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Farmer</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{selectedCrop.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{selectedCrop.location}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{selectedCrop.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">{selectedCrop.email}</span>
                </div>
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setSelectedCrop(null)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
                <a
                  href={`tel:${selectedCrop.phone}`}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
