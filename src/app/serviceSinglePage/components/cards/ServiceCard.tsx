import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

export function ServiceCard({ title, description, icon: Icon, className = "" }: ServiceCardProps) {
  return (
    <div
      className={`bg-purple-900/30 p-6 rounded-lg border border-purple-800/50 hover:border-purple-600/50 transition-all ${className}`}
    >
      <div className="w-12 h-12 bg-purple-800/50 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
    </div>
  )
}
