import type { ServiceItemType } from "../../services/types/service" // Correct path to your type definition
import type { ReactNode } from "react"
import { ServiceCard } from "./ServiceCard" // Correct path to your ServiceCard component

interface ServiceCategoryProps {
  title: string
  description: string
  services: ServiceItemType[] // Array of individual service items
  icon: ReactNode // The icon for the category card
  learnMoreLink: string
}

export default function ServiceCategory({ title, description, services, icon, learnMoreLink }: ServiceCategoryProps) {
  return (
    <ServiceCard
      icon={icon}
      title={title}
      description={description}
      features={services.map((service) => service.name)} // Map service items to their names for features
      learnMoreLink={learnMoreLink}
    />
  )
}

