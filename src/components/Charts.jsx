import { useState } from 'react'

// Simple chart components using CSS and SVG
export function PieChart({ data, title }) {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  let currentAngle = 0

  const colors = ['#16a34a', '#2563eb', '#7c3aed', '#dc2626', '#ea580c', '#eab308']

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="flex items-center justify-center">
        <div className="relative">
          <svg width="200" height="200" viewBox="0 0 200 200" className="transform -rotate-90">
            {data.map((item, index) => {
              const percentage = (item.value / total) * 100
              const angle = (item.value / total) * 360
              const startAngle = currentAngle
              const endAngle = currentAngle + angle
              
              const x1 = 100 + 80 * Math.cos((startAngle * Math.PI) / 180)
              const y1 = 100 + 80 * Math.sin((startAngle * Math.PI) / 180)
              const x2 = 100 + 80 * Math.cos((endAngle * Math.PI) / 180)
              const y2 = 100 + 80 * Math.sin((endAngle * Math.PI) / 180)
              
              const largeArc = angle > 180 ? 1 : 0
              
              currentAngle += angle
              
              return (
                <path
                  key={index}
                  d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`}
                  fill={colors[index % colors.length]}
                  className="hover:opacity-80 transition-opacity"
                />
              )
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{total}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: colors[index % colors.length] }}
              ></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{item.label}</span>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function BarChart({ data, title }) {
  const maxValue = Math.max(...data.map(item => item.value))
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="space-y-4">
        {data.map((item, index) => {
          const percentage = (item.value / maxValue) * 100
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">{item.value}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function LineChart({ data, title }) {
  const maxValue = Math.max(...data.map(item => item.value))
  const minValue = Math.min(...data.map(item => item.value))
  const range = maxValue - minValue
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="relative h-64">
        <svg width="100%" height="100%" viewBox="0 0 400 200" className="overflow-visible">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={i}
              x1="0"
              y1={i * 50}
              x2="400"
              y2={i * 50}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          ))}
          
          {/* Data line */}
          <polyline
            fill="none"
            stroke="#16a34a"
            strokeWidth="3"
            points={data.map((item, index) => {
              const x = (index / (data.length - 1)) * 400
              const y = 200 - ((item.value - minValue) / range) * 200
              return `${x},${y}`
            }).join(' ')}
          />
          
          {/* Data points */}
          {data.map((item, index) => {
            const x = (index / (data.length - 1)) * 400
            const y = 200 - ((item.value - minValue) / range) * 200
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill="#16a34a"
                className="hover:r-6 transition-all"
              />
            )
          })}
        </svg>
        
        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-2">
          {data.map((item, index) => (
            <span key={index}>{item.label}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function StatsCard({ title, value, change, icon, color = "green" }) {
  const colorClasses = {
    green: "text-green-600 bg-green-50",
    blue: "text-blue-600 bg-blue-50", 
    purple: "text-purple-600 bg-purple-50",
    red: "text-red-600 bg-red-50",
    yellow: "text-yellow-600 bg-yellow-50"
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
          {change && (
            <p className={`text-sm ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {change}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
    </div>
  )
}
