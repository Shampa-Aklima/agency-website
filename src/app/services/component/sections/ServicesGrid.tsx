import type { ReactNode } from "react"
import {
    Monitor,
    Workflow,
    Bot,
    GlassesIcon as Glasses3d,
    Layers,
    CuboidIcon as Cube,
    ShoppingCart,
    GamepadIcon,
    Boxes,
    Gamepad2,
    GraduationCap,
    Headphones,
    NfcIcon as Nft,
    CalendarDays,
    Brain,
    Shield,
    BarChart2,
    Globe,
  } from "lucide-react"
  import ServiceCategory from "../sections/ServiceCategory"
  import type { ServiceType } from "../../types/service"
  
  interface ServicesGridProps {
    services: ServiceType[]
  }
  
  export default function ServicesGrid({ services }: ServicesGridProps) {
    // Map service types to their respective icons
    const getIconForService = (serviceType: string) => {
      const iconMap: Record<string, ReactNode> = {
        "ai-development": <Monitor className="w-6 h-6 text-purple-400" />,
        automation: <Workflow className="w-6 h-6 text-purple-400" />,
        "ai-agents": <Bot className="w-6 h-6 text-purple-400" />,
        "virtual-reality": <Glasses3d className="w-6 h-6 text-purple-400" />,
        "augmented-reality": <Layers className="w-6 h-6 text-purple-400" />,
        "mixed-reality": <Cube className="w-6 h-6 text-purple-400" />,
        "immersive-commerce": <ShoppingCart className="w-6 h-6 text-purple-400" />,
        roblox: <GamepadIcon className="w-6 h-6 text-purple-400" />,
        "digital-twins": <Boxes className="w-6 h-6 text-purple-400" />,
        games: <Gamepad2 className="w-6 h-6 text-purple-400" />,
        education: <GraduationCap className="w-6 h-6 text-purple-400" />,
        consulting: <Headphones className="w-6 h-6 text-purple-400" />,
        nft: <Nft className="w-6 h-6 text-purple-400" />,
        "virtual-events": <CalendarDays className="w-6 h-6 text-purple-400" />,
        "ai-experiences": <Brain className="w-6 h-6 text-purple-400" />,
        security: <Shield className="w-6 h-6 text-purple-400" />,
        analytics: <BarChart2 className="w-6 h-6 text-purple-400" />,
        integration: <Globe className="w-6 h-6 text-purple-400" />,
      }
  
      return iconMap[serviceType] || <Monitor className="w-6 h-6 text-purple-400" />
    }
  
    return (
      <section id="services" className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Najah Services</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover our full range of metaverse solutions designed to help you succeed in the metaverse.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCategory
                key={service.id}
                title={service.title}
                description={service.description}
                services={service.services}
                icon={getIconForService(service.type)}
                learnMoreLink={service.learnMoreLink}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
  
