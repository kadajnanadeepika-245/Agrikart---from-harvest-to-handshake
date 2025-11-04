import { useState } from 'react'

export default function BuyerChat() {
  const [messages, setMessages] = useState([
    { id: 1, from: 'farmer', text: 'Hello! Fresh tomatoes available.' },
    { id: 2, from: 'buyer', text: 'Great! Can we do ₹24/kg for 120kg?' },
  ])
  const [text, setText] = useState('')

  const send = () => {
    if (!text.trim()) return
    setMessages(m => [...m, { id: Date.now(), from: 'buyer', text }])
    setText('')
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Live Chat</h2>
      <div className="card p-4 h-64 overflow-y-auto space-y-2">
        {messages.map(m => (
          <div key={m.id} className={`max-w-[70%] px-3 py-2 rounded-lg ${m.from==='buyer'?'ml-auto bg-brand-600 text-white':'bg-gray-100 dark:bg-neutral-900'}`}>{m.text}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Type a message..." className="flex-1 border rounded-lg px-3 py-2 bg-transparent"/>
        <button className="btn-primary" onClick={send}>Send</button>
      </div>
    </div>
  )
}
