"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card" // Corrected import path
import { Brain, Cpu, Layers, Zap, Shield, Users } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    title: "Advanced AI",
    description: "Leverage cutting-edge AI models for intelligent solutions.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-primary" />,
    title: "High Performance",
    description: "Experience lightning-fast processing and real-time results.",
  },
  {
    icon: <Layers className="h-6 w-6 text-primary" />,
    title: "Scalable Architecture",
    description: "Our platform scales effortlessly to meet your growing demands.",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Rapid Deployment",
    description: "Get your applications up and running in no time.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Robust Security",
    description: "Your data is protected with industry-leading security measures.",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Dedicated Support",
    description: "Our team is here to assist you every step of the way.",
  },
]

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the key advantages that make our AI solutions stand out from the rest.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col items-center p-6 text-center">
                <CardHeader className="pb-4">
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardDescription>{feature.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
