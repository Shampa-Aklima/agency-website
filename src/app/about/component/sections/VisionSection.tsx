"use client"

import { motion } from "framer-motion"
import { Play, Bot, Brain, Zap } from "lucide-react"
import Image from "next/image"

const visionFeatures = [
  {
    icon: <Bot className="h-6 w-6 text-accent-pink" />,
    title: "Partnerships that Drive Progress",
    description: "Najah envisions a world where collaboration fuels success. We work hand-in-hand with our clients, blending our technical expertise with their unique goals to build long-term partnerships that unlock sustainable growth.",
  },
  {
    icon: <Brain className="h-6 w-6 text-accent-blue" />,
    title: "Building What Tomorrow Needs Today",
    description: "At Najah, we don’t just follow trends — we shape them. Our vision is to develop scalable, adaptive, and forward-thinking solutions that help businesses thrive in a rapidly evolving digital world.",
  },
  {
    icon: <Zap className="h-6 w-6 text-accent-pink" />,
    title: "HumTech that Understands and Empowers People",
    description: "We believe technology should enhance human potential, not replace it. Our vision is to build AI solutions that support creativity, simplify complexity, and deliver meaningful impact to users and businesses.",
  },
]

export default function VisionSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-6xl container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-white">
          Building Better Together with Najah
          </h2>
          <p className="text-white/70 max-w-4xl mx-auto">
          At Najah, we empower businesses with custom web development, scalable SaaS platforms, and AI-powered innovations all under one roof.
          We don’t just build products; we craft digital experiences that are user-focused, future-ready, and performance driven.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(142,124,255,0.2)]">
              <div className="absolute inset-0 flex items-center justify-center">
                
              </div>
              <Image
                src="/woman.jpg"
                alt="AI Agents Demo"
                width={1200}
                height={675}
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
           

            <div className="space-y-4 mb-8">
              {visionFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 bg-white/10 p-2 rounded-lg">{feature.icon}</div>
                  <div>
                    <h4 className="text-white font-medium">{feature.title}</h4>
                    <p className="text-white/70 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
