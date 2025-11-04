import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Users, Shield, Star, ChevronDown, Play, CheckCircle } from 'lucide-react'

export default function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "Fresh from Farm",
      description: "Direct connection between farmers and buyers for the freshest produce"
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Community Driven",
      description: "Building a strong agricultural community with transparent dealings"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Quality Assured",
      description: "Professional quality checkers ensure premium standards"
    }
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Farmer from Punjab",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "Agrikart transformed my farming business. Direct sales mean better prices!"
    },
    {
      name: "Priya Sharma",
      role: "Organic Buyer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "I love getting fresh, quality produce directly from farmers. Amazing platform!"
    },
    {
      name: "Amit Patel",
      role: "Quality Checker",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "Working with Agrikart allows me to ensure quality while supporting farmers."
    }
  ]

  const stats = [
    { number: "10,000+", label: "Happy Farmers" },
    { number: "25,000+", label: "Satisfied Buyers" },
    { number: "500+", label: "Quality Checkers" },
    { number: "1M+", label: "Tons Traded" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-bounce delay-1000">
            <div className="w-16 h-16 bg-green-200 rounded-full opacity-60" />
          </div>
          <div className="absolute top-40 right-20 animate-bounce delay-2000">
            <div className="w-12 h-12 bg-yellow-200 rounded-full opacity-60" />
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce delay-3000">
            <div className="w-20 h-20 bg-orange-200 rounded-full opacity-60" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  🌱 From Harvest to Handshake
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="text-green-600">Fresh</span> Produce,
                  <br />
                  <span className="text-orange-500">Fair</span> Prices
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Connect farmers directly with buyers. Ensure quality, transparency, and fair pricing in every transaction.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Play className="mr-2 w-5 h-5 text-green-600" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-green-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop"
                  alt="Happy farmer with fresh vegetables"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-3xl" />
                
                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-pulse">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
                    <span className="text-sm font-medium">Live Orders</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">247</div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">Rating</span>
                  </div>
                  <div className="text-2xl font-bold text-yellow-600">4.9/5</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-green-600" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-green-600">Agrikart</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing agriculture by connecting every stakeholder in the supply chain
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:from-green-100 hover:to-emerald-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Simple steps to connect farmers with buyers
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Farmer Lists Crops", desc: "Farmers upload their produce with details and photos" },
              { step: "2", title: "Buyers Browse", desc: "Buyers discover fresh produce and make proposals" },
              { step: "3", title: "Quality Check", desc: "Professional checkers verify quality standards" },
              { step: "4", title: "Deal Completed", desc: "Secure transactions with transparent pricing" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-green-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-green-600">Community</span> Says
            </h2>
            <p className="text-xl text-gray-600">Real stories from real people</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-green-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Agriculture?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of farmers, buyers, and quality checkers who are already part of the revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Join as Farmer
              <Leaf className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-200"
            >
              Join as Buyer
              <Users className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-green-400">Agrikart</h3>
              <p className="text-gray-400">
                Connecting farmers with buyers for a sustainable agricultural future.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">For Farmers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/register" className="hover:text-green-400 transition-colors">List Your Crops</Link></li>
                <li><Link to="/register" className="hover:text-green-400 transition-colors">Manage Inventory</Link></li>
                <li><Link to="/register" className="hover:text-green-400 transition-colors">Track Deals</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">For Buyers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/register" className="hover:text-green-400 transition-colors">Browse Produce</Link></li>
                <li><Link to="/register" className="hover:text-green-400 transition-colors">Make Proposals</Link></li>
                <li><Link to="/register" className="hover:text-green-400 transition-colors">Quality Assurance</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Agrikart. All rights reserved. Made with ❤️ for farmers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
