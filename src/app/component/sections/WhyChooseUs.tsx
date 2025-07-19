"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "../../serviceSinglePage/components/ui/card"
import { Brain, Cpu, Layers, Zap, Shield, Users } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-8 w-8 text-accent-pink" />,
    title: "Advanced AI",
    description: "Cutting-edge artificial intelligence that adapts and learns from your business needs.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-accent-blue" />,
    title: "Quantum Technology",
    description: "Leveraging quantum computing principles for unprecedented processing capabilities.",
  },
  {
    icon: <Layers className="h-8 w-8 text-accent-pink" />,
    title: "Immersive Platform",
    description: "Create and experience fully immersive digital environments with our platform.",
  },
  {
    icon: <Zap className="h-8 w-8 text-accent-blue" />,
    title: "Instant Scaling",
    description: "Scale your metaverse presence instantly with our cloud infrastructure.",
  },
  {
    icon: <Shield className="h-8 w-8 text-accent-pink" />,
    title: "Bulletproof Security",
    description: "Enterprise-grade security protocols protecting your digital assets and data.",
  },
  {
    icon: <Users className="h-8 w-8 text-accent-blue" />,
    title: "Collaboration",
    description: "Seamless collaboration tools for teams working across physical and virtual spaces.",
  },
]

export default function WhyChooseUs() {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" id="about" ref={sectionRef}>
      <motion.div
        className="absolute -top-40 -right-40 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-gradient-to-br from-accent-pink/10 to-accent-blue/10 rounded-full filter blur-[100px] opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">Why Choose The Najah?</h2>
          </motion.div>
          <motion.p
            className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We combine cutting-edge technology with creative vision to deliver solutions that transform
            businesses.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:border-accent-pink/50 transition-all duration-500">
                <CardHeader className="p-4 sm:p-6">
                  <motion.div
                    className="mb-3 sm:mb-4"
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-base sm:text-lg font-semibold">{feature.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm mt-1">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
