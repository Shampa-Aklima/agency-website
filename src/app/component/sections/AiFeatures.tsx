"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "../../ui/card"
import { MessageSquare, Bot, Brain, Database } from "lucide-react"

const features = [
  {
    icon: <MessageSquare className="h-8 w-8 text-white" />,
    title: "Question Answering",
    description: "Advanced AI that understands and responds to complex queries with human-like comprehension.",
    color: "from-[#FD5EFF]/20 to-[#FD5EFF]/5",
  },
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: "Virtual Assistants",
    description: "Intelligent assistants that learn your preferences and automate routine tasks.",
    color: "from-[#8E7CFF]/20 to-[#8E7CFF]/5",
  },
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with our predictive AI models.",
    color: "from-[#FD5EFF]/20 to-[#FD5EFF]/5",
  },
  {
    icon: <Database className="h-8 w-8 text-white" />,
    title: "Knowledge Base",
    description: "Create and maintain a comprehensive knowledge base that grows with your organization.",
    color: "from-[#8E7CFF]/20 to-[#8E7CFF]/5",
  },
]

export default function AiFeatures() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden bg-deep-purple/50" ref={sectionRef}>
      <motion.div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-accent-blue/10 to-accent-pink/10 rounded-full filter blur-[100px] opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How We Revolutionize Your Business with AI
            </h2>
          </motion.div>
          <motion.p
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our AI-powered solutions transform how businesses operate, communicate, and innovate.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 30px rgba(142, 124, 255, 0.2)",
                  transition: { duration: 0.3 },
                }}
              >
                <Card className={`h-full bg-gradient-to-br ${feature.color} transition-all duration-500`}>
                  <CardHeader>
                    <motion.div
                      className="mb-4 bg-white/10 p-3 rounded-xl w-fit"
                      whileHover={{
                        rotate: [0, 10, -10, 0],
                        transition: { duration: 0.5, repeat: Number.POSITIVE_INFINITY },
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-white/70 mb-6">
            Ready to transform your business? Let's build something amazing together.
          </p>
          <motion.button
            className="bg-gradient-to-r from-accent-pink to-accent-blue text-white px-8 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(253,94,255,0.5)] transition-all"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(253,94,255,0.7)",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
