import { useRef, useState } from 'react'
import { X, GripVertical } from 'lucide-react'

export default function CustomizeModal({ widgets, onSave, onClose }) {
  const [items, setItems] = useState(widgets)
  const dragIndex = useRef(null)

  function toggle(id) {
    setItems((prev) => prev.map((w) => (w.id === id ? { ...w, enabled: !w.enabled } : w)))
  }

  function handleDragStart(index) {
    dragIndex.current = index
  }

  function handleDragOver(e, index) {
    e.preventDefault()
    if (dragIndex.current === null || dragIndex.current === index) return
    setItems((prev) => {
      const next = [...prev]
      const [moved] = next.splice(dragIndex.current, 1)
      next.splice(index, 0, moved)
      dragIndex.current = index
      return next
    })
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-claimm-dark border border-transparent dark:border-white/10 rounded-md max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-semibold text-claimm-dark dark:text-white">Dashboard anpassen</h3>
          <button onClick={onClose} className="text-claimm-dark/40 dark:text-white/40 hover:text-claimm-dark dark:hover:text-white">
            <X size={18} />
          </button>
        </div>
        <p className="text-xs text-claimm-dark/50 dark:text-white/40 mb-4">
          Widgets ein-/ausblenden und per Drag &amp; Drop neu anordnen.
        </p>

        <ul className="flex flex-col gap-2 mb-6">
          {items.map((w, index) => (
            <li
              key={w.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              className="flex items-center gap-3 border border-claimm-dark/10 dark:border-white/10 rounded px-3 py-2.5 bg-claimm-beige/40 dark:bg-white/5 cursor-grab active:cursor-grabbing"
            >
              <GripVertical size={16} className="text-claimm-dark/30 dark:text-white/30 shrink-0" />
              <span className="text-sm text-claimm-dark dark:text-white flex-1">{w.label}</span>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={w.enabled}
                  onChange={() => toggle(w.id)}
                  className="accent-claimm-red w-4 h-4 cursor-pointer"
                />
              </label>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 text-sm font-medium py-2 rounded border border-claimm-dark/20 dark:border-white/20 text-claimm-dark dark:text-white hover:bg-claimm-dark/5 dark:hover:bg-white/10 transition-colors"
          >
            Abbrechen
          </button>
          <button
            onClick={() => onSave(items)}
            className="flex-1 text-sm font-medium py-2 rounded bg-claimm-red text-white hover:bg-claimm-red/90 transition-colors"
          >
            Speichern
          </button>
        </div>
      </div>
    </div>
  )
}
