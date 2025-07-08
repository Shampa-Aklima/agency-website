"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "../../ui/card"
import {
  Headset,
  Building2,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Users,

} from "lucide-react"

const services = [
  {
    icon: <Headset className="h-6 w-6 text-accent-pink" />,
    title: "Web applications",
    description: "Immersive VR experiences for training, entertainment, and collaboration.",
  },
  {
    icon: <Building2 className="h-6 w-6 text-accent-blue" />,
    title: "Saas Application",
    description: "Develop and manage virtual properties in the metaverse.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-accent-pink" />,
    title: "AI-driven applications",
    description: "Custom metaverse solutions tailored to your business needs.",
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-accent-blue" />,
    title: "Websites and E-commerce",
    description: "Revolutionary learning environments in virtual spaces.",
  },
  {
    icon: <ShoppingBag className="h-6 w-6 text-accent-pink" />,
    title: "Custom Development",
    description: "Set up and manage virtual storefronts and marketplaces.",
  },
  {
    icon: <Users className="h-6 w-6 text-accent-blue" />,
    title: "Cloud Services & Infrastructure",
    description: "Build communities and social experiences in the metaverse.",
  },
  
  ]

export default function ServiceGrid() {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-deep-purple/50" id="services">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">Our Comprehensive Services</h2>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our full range of metaverse and AI-powered solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            >
              <Card className="h-full hover:bg-white/5 transition-colors duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <div className="mb-3 bg-white/10 p-2 rounded-lg w-fit">{service.icon}</div>
                  <CardTitle className="text-base sm:text-lg font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm mt-1">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        </motion.div>
      </div>
    </section>
  )
}
