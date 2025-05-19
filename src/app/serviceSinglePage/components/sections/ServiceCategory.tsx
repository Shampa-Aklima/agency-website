import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ServiceFeature {
  name: string
}

interface ServiceCategoryProps {
  title: string
  description: string
  features: ServiceFeature[]
  learnMoreLink: string
}

export function ServiceCategory({ 
  title, 
  description, 
  features = [], // Default empty array
  learnMoreLink = "#" // Default to "#" if undefined
}: ServiceCategoryProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <ul className="space-y-2">
        {features && features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-purple-500">+</span>
            {feature.name}
          </li>
        ))}
      </ul>
      <Link href={learnMoreLink || "#"} className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300">
        Learn more <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  )
}
