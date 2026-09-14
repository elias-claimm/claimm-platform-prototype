export default function WidgetCard({ title, icon: Icon, children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-white/5 border border-claimm-dark/10 dark:border-white/10 rounded-md flex flex-col ${className}`}>
      <div className="flex items-center gap-2 px-5 py-4 border-b border-claimm-dark/10 dark:border-white/10">
        {Icon && <Icon size={16} className="text-claimm-red" strokeWidth={2} />}
        <h2 className="text-sm font-semibold text-claimm-dark dark:text-white">{title}</h2>
      </div>
      <div className="p-5 flex-1 flex flex-col gap-3">{children}</div>
    </div>
  )
}
