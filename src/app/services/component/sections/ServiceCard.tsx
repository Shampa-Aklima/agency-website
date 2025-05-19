import type { ReactNode } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
  learnMoreLink: string
  iconBgColor?: string
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  learnMoreLink,
  iconBgColor = "bg-purple-900/50",
}: ServiceCardProps) {
  return (
    <div className="bg-[#1a0a3a]/50 rounded-lg p-6 border border-purple-900/30 hover:border-purple-600/50 transition-all duration-300 flex flex-col h-full">
      <div className={`${iconBgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70 text-sm mb-4">{description}</p>
      <ul className="space-y-2 mt-auto mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-purple-400 font-bold mt-1">+</span>
            <span className="text-white/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={learnMoreLink}
        className="text-purple-400 text-sm flex items-center hover:text-purple-300 transition-colors mt-auto"
      >
        Learn more <ChevronRight size={16} className="ml-1" />
      </Link>
    </div>
  )
}
