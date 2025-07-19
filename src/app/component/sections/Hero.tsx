"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Button } from "../../serviceSinglePage/components/ui/button"
import { Navbar } from "../layout/Navbar"
import Image from "next/image"
import ParticleBackground from "../../serviceSinglePage/components/ui/particle-background"
import Slider from "../../serviceSinglePage/components/ui/slider"
import { useEffect, useRef } from "react"

const heroSlides = [
  {
    title: "Where Bold Minds Shape a Boundless Tomorrow",
    subtitle:
      "At Najah, we don't follow trends — we create them. Dive into a realm where visionary minds craft the future with AI, XR, and boundless imagination.",
    image: "/bg5.jpg",
  },
  {
    title: "Pioneering the Edge of Innovation and Imagination",
    subtitle:
      "At Najah, we go beyond the ordinary. Our groundbreaking solutions in AI, XR, and immersive experiences pave the way for a future where anything is possible.",
    image: "/contact.jpg",
  },
  {
    title: "Nurturing the Dreamers Who Redefine the Future",
    subtitle:
      "Join a revolution where creativity knows no bounds. Najah harnesses the power of technology to turn visionary ideas into transformative realities.",
    image: "/bg6.jpg",
  },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const moveX = (clientX - innerWidth / 2) / 100
      const moveY = (clientY - innerHeight / 2) / 100

      // Apply subtle parallax to background elements only
      const blobs = containerRef.current.querySelectorAll(".parallax-blob")
      blobs.forEach((blob, index) => {
        const element = blob as HTMLElement
        const multiplier = index % 2 === 0 ? 1 : -1
        element.style.transform = `translate(${moveX * multiplier}px, ${moveY * multiplier}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Fixed Navbar */}
     

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />

        {/* Gradient Blobs with Parallax */}
        <motion.div
          className="parallax-blob absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-accent-pink/30 to-accent-blue/30 rounded-full filter blur-[80px] opacity-30"
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="parallax-blob absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-tr from-accent-blue/30 to-accent-pink/30 rounded-full filter blur-[80px] opacity-30"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>

      {/* Main Content - Slider with Custom Content */}
      <div className="flex-1 relative z-10 flex items-center justify-center">
        <div className="relative w-full max-h-[600px] h-[600px] overflow-hidden">
          {/* Custom Slider with Enhanced Content */}
          <Slider
            slides={heroSlides.map((slide) => ({
              ...slide,
              // Add custom content to each slide
              customContent: (
                <motion.div
                  className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 right-0 z-20 px-4 sm:px-6"
                  style={{ y: smoothY, opacity: smoothOpacity, scale: smoothScale }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="container mx-auto flex justify-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="lg"
                        className="rounded-full text-sm sm:text-base bg-gradient-to-r from-accent-pink to-accent-blue hover:from-accent-pink/90 hover:to-accent-blue/90 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4"
                      >
                        Get Started Now
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ),
            }))}
            className="h-full w-full"
            autoPlay={true}
            interval={6000}
          />
        </div>
      </div>
    </section>
  )
}
