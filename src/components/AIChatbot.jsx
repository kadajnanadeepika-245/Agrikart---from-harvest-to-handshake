import { useState } from 'react'
import { MessageCircle, Send, Bot, User, Leaf, Cloud, Droplets, Thermometer, X } from 'lucide-react'

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: "Hello! I'm your AI farming assistant. I can help you choose the best crops based on your soil type, climate, and season. What would you like to know?",
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const quickQuestions = [
    "What crops grow best in clay soil?",
    "Best crops for monsoon season?",
    "High-profit crops for small farms?",
    "Drought-resistant crop options?"
  ]

  const cropRecommendations = {
    "clay soil": {
      crops: ["Rice", "Wheat", "Cotton", "Sugarcane"],
      reason: "Clay soil retains water well and is rich in nutrients, perfect for these crops."
    },
    "sandy soil": {
      crops: ["Groundnut", "Watermelon", "Carrot", "Radish"],
      reason: "Sandy soil has good drainage, ideal for root vegetables and drought-tolerant crops."
    },
    "monsoon": {
      crops: ["Rice", "Maize", "Cotton", "Sugarcane", "Jute"],
      reason: "These crops thrive in high moisture and warm temperatures during monsoon."
    },
    "winter": {
      crops: ["Wheat", "Barley", "Peas", "Mustard", "Potato"],
      reason: "Cool season crops that grow well in lower temperatures."
    },
    "summer": {
      crops: ["Watermelon", "Cucumber", "Okra", "Tomato", "Chili"],
      reason: "Heat-tolerant crops that can withstand high temperatures."
    },
    "drought": {
      crops: ["Millets", "Sorghum", "Groundnut", "Castor"],
      reason: "These crops require minimal water and are drought-resistant."
    },
    "high profit": {
      crops: ["Saffron", "Vanilla", "Ginseng", "Mushrooms", "Herbs"],
      reason: "These specialty crops command premium prices in the market."
    }
  }

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase()
    
    // Check for soil type
    if (message.includes('clay') || message.includes('clay soil')) {
      return cropRecommendations["clay soil"]
    }
    if (message.includes('sandy') || message.includes('sandy soil')) {
      return cropRecommendations["sandy soil"]
    }
    
    // Check for season
    if (message.includes('monsoon') || message.includes('rainy')) {
      return cropRecommendations["monsoon"]
    }
    if (message.includes('winter') || message.includes('cold')) {
      return cropRecommendations["winter"]
    }
    if (message.includes('summer') || message.includes('hot')) {
      return cropRecommendations["summer"]
    }
    
    // Check for specific conditions
    if (message.includes('drought') || message.includes('dry') || message.includes('less water')) {
      return cropRecommendations["drought"]
    }
    if (message.includes('profit') || message.includes('money') || message.includes('income')) {
      return cropRecommendations["high profit"]
    }
    
    // Default response
    return {
      crops: ["Rice", "Wheat", "Maize", "Cotton"],
      reason: "These are versatile crops suitable for various conditions. For better recommendations, please tell me about your soil type, climate, or season."
    }
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      message: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const recommendation = generateBotResponse(inputMessage)
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        message: `Based on your query, I recommend these crops: **${recommendation.crops.join(', ')}**\n\n${recommendation.reason}\n\nWould you like more specific information about any of these crops?`,
        timestamp: new Date(),
        crops: recommendation.crops
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickQuestion = (question) => {
    setInputMessage(question)
    setTimeout(() => handleSendMessage(), 100)
  }

  const formatMessage = (message) => {
    return message.split('\n').map((line, index) => (
      <span key={index}>
        {line.includes('**') ? (
          <strong>{line.replace(/\*\*/g, '')}</strong>
        ) : (
          line
        )}
        {index < message.split('\n').length - 1 && <br />}
      </span>
    ))
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-50 animate-pulse"
      >
        <Bot className="w-6 h-6 mx-auto" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">AI Farm Assistant</h3>
                <p className="text-xs text-green-100">Crop recommendations & farming tips</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 ${
                  msg.type === 'user' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}>
                  <div className="flex items-start space-x-2">
                    {msg.type === 'bot' && (
                      <Bot className="w-4 h-4 mt-1 text-green-600" />
                    )}
                    <div className="text-sm">
                      {formatMessage(msg.message)}
                    </div>
                  </div>
                  
                  {msg.crops && (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {msg.crops.map((crop, index) => (
                        <div key={index} className="flex items-center space-x-1 text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2 py-1 rounded-lg">
                          <Leaf className="w-3 h-3" />
                          <span>{crop}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-3 max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-4 h-4 text-green-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick questions:</p>
              <div className="grid grid-cols-1 gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-left text-xs p-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about soil, climate, crops..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
