import type { ReactNode } from "react"
import ServiceCard from "./ServiceCard"
import type { ServiceItemType } from "../../types/service"

interface ServiceCategoryProps {
  title: string
  description: string
  services: ServiceItemType[]
  icon: ReactNode
  learnMoreLink: string
}

export default function ServiceCategory({ title, description, services, icon, learnMoreLink }: ServiceCategoryProps) {
  return (
    <ServiceCard
      icon={icon}
      title={title}
      description={description}
      features={services.map((service) => service.name)}
      learnMoreLink={learnMoreLink}
    />
  )
}
