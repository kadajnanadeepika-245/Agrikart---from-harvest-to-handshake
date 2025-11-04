import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, Eye, Edit, Trash2, MapPin, Package, DollarSign, MessageSquare, Star, CheckCircle, Clock, AlertCircle } from 'lucide-react'

export default function FarmerCropList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const crops = [
    {
      id: 1,
      name: "Organic Tomatoes",
      variety: "Roma Tomatoes",
      quantity: "500 kg",
      price: "₹45/kg",
      status: "available",
      location: "Pune, Maharashtra",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&h=200&fit=crop",
      views: 234,
      proposals: 5,
      rating: 4.8,
      qualityCheck: "verified"
    },
    {
      id: 2,
      name: "Fresh Potatoes", 
      variety: "Russet Potatoes",
      quantity: "1000 kg",
      price: "₹25/kg",
      status: "negotiation",
      location: "Nashik, Maharashtra",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=200&fit=crop",
      views: 189,
      proposals: 3,
      rating: 4.6,
      qualityCheck: "pending"
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Crops</h1>
        <Link
          to="/farmer/crops/new"
          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Crop
        </Link>
      </div>

      <div className="grid gap-6">
        {crops.map((crop) => (
          <div key={crop.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex gap-4">
              <img src={crop.image} alt={crop.name} className="w-24 h-24 rounded-lg object-cover" />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{crop.name}</h3>
                <p className="text-gray-600">{crop.variety}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>{crop.quantity}</span>
                  <span>{crop.price}</span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {crop.location}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    crop.status === 'available' ? 'bg-green-100 text-green-800' :
                    crop.status === 'negotiation' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {crop.status}
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <Eye className="w-4 h-4 mr-1" />
                    {crop.views}
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {crop.proposals}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
