import { ServiceCard } from "../cards/ServiceCard"
import { Brain, Workflow, Bot } from "lucide-react"

interface ServiceItem {
  title: string
  description: string
  icon: any
}

interface FeaturedServicesProps {
  services: ServiceItem[]
}

export function FeaturedServices({ services }: FeaturedServicesProps) {
  // Default icons mapping if not provided
  const defaultIcons = {
    "Creator AI Development": Brain,
    "Automation Workflows": Workflow,
    "AI Agents": Bot,
  }

  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon || defaultIcons[service.title as keyof typeof defaultIcons] || Brain}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
