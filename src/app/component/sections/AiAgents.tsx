"use client"

import { motion } from "framer-motion"
import { Play, Bot, Brain, Zap } from "lucide-react"
import { Button } from "../../ui/button"
import Image from "next/image"

const agentFeatures = [
  {
    icon: <Bot className="h-6 w-6 text-accent-pink" />,
    title: "Custom AI Agents",
    description: "Tailored AI agents designed specifically for your business needs and workflows.",
  },
  {
    icon: <Brain className="h-6 w-6 text-accent-blue" />,
    title: "Continuous Learning",
    description: "Our agents learn and improve over time, adapting to your evolving requirements.",
  },
  {
    icon: <Zap className="h-6 w-6 text-accent-pink" />,
    title: "Seamless Integration",
    description: "Easily integrate our AI agents with your existing systems and platforms.",
  },
  {
    icon: <Bot className="h-6 w-6 text-accent-pink" />,
    title: "Custom AI Agents",
    description: "Tailored AI agents designed specifically for your business needs and workflows.",
  }
]

export default function AiAgents() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Empower Your Business with Intelligent AI Agents
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our AI agents work tirelessly to automate tasks, provide insights, and enhance productivity.
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
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                  <Play className="h-6 w-6 text-white" />
                </div>
              </div>
              <Image
                src="/about-img.jpg"
                alt="AI Agents Demo"
                width={1200}
                height={675}
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-accent-pink to-accent-blue px-6 py-3 rounded-xl text-white font-medium">
           
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            
            

            <div className="space-y-4 mb-8">
              {agentFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 bg-white/10 p-2 rounded-lg">{feature.icon}</div>
                  <div>
                    <h4 className="text-white font-medium">{feature.title}</h4>
                    <p className="text-white/70 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="rounded-full">
              Discover AI Agents That Can Transform Your Business
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
