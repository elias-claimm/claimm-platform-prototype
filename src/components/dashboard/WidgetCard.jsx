export default function WidgetCard({ title, icon: Icon, children, className = '' }) {
  return (
    <div className={`bg-white border border-claimm-dark/10 rounded-md flex flex-col ${className}`}>
      <div className="flex items-center gap-2 px-5 py-4 border-b border-claimm-dark/10">
        {Icon && <Icon size={16} className="text-claimm-red" strokeWidth={2} />}
        <h2 className="text-sm font-semibold text-claimm-dark">{title}</h2>
      </div>
      <div className="p-5 flex-1 flex flex-col gap-3">{children}</div>
    </div>
  )
}
