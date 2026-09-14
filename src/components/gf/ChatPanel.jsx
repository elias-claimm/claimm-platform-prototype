import { useState } from 'react'
import { Send, Sparkles } from 'lucide-react'
import { gfQuickPrompts, gfChatAntworten, gfChatFallback } from '../../data/mockData'

export default function ChatPanel() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Guten Morgen, Michal. Wie kann ich unterstützen?' },
  ])
  const [input, setInput] = useState('')

  function sendMessage(text) {
    if (!text.trim()) return
    const antwort = gfChatAntworten[text] || gfChatFallback
    setMessages((prev) => [...prev, { role: 'user', text }, { role: 'assistant', text: antwort }])
    setInput('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-md flex flex-col h-full">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
        <Sparkles size={16} className="text-claimm-red" />
        <h2 className="text-sm font-semibold text-white">KI-Chat</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3 max-h-80">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`text-sm rounded-md px-3 py-2 max-w-[85%] leading-relaxed ${
              m.role === 'user' ? 'bg-claimm-red text-white self-end' : 'bg-white/10 text-white/90 self-start'
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="px-5 py-3 flex flex-wrap gap-2 border-t border-white/10">
        {gfQuickPrompts.map((p) => (
          <button
            key={p}
            onClick={() => sendMessage(p)}
            className="text-xs text-white/80 border border-white/20 rounded-full px-3 py-1.5 hover:bg-white/10 transition-colors"
          >
            {p}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 px-5 py-4 border-t border-white/10">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Frage an den KI-Assistenten..."
          className="flex-1 bg-white/10 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-claimm-red/40"
        />
        <button
          type="submit"
          className="w-9 h-9 shrink-0 flex items-center justify-center rounded bg-claimm-red text-white hover:bg-claimm-red/90 transition-colors"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  )
}
