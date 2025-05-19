"use client"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Button } from "../../ui/button"
import Navbar from "../layout/Navbar"
import ParticleBackground from "../../ui/particle-background"
import Slider from "../../ui/slider"
import { useEffect, useRef } from "react"
const heroSlides = [
  {
    title: "Where Bold Minds Shape a Boundless Tomorrow",
  subtitle:
    "At Najah, we don't follow trends — we create them. Dive into a realm where visionary minds craft the future with AI, XR, and boundless imagination.",
    image: "",
    gradient: "bg-gradient-to-r from-deep-purple/90 via-deep-purple/70 to-deep-purple/30",
  },
  {
    title: "Pioneering the Edge of Innovation and Imagination",
    subtitle:
      "At Najah, we go beyond the ordinary. Our groundbreaking solutions in AI, XR, and immersive experiences pave the way for a future where anything is possible.",
    image: "",
    gradient: "bg-gradient-to-r from-deep-purple/90 via-accent-pink/30 to-deep-purple/70",
  },
  {
    title: "Nurturing the Dreamers Who Redefine the Future",
    subtitle:
      "Join a revolution where creativity knows no bounds. Najah harnesses the power of technology to turn visionary ideas into transformative realities.",
    image: "",
    gradient: "bg-gradient-to-r from-deep-purple/90 via-accent-blue/30 to-deep-purple/70",
  },
]

export default function Hero() {
  const videoRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!videoRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const moveX = (clientX - innerWidth / 2) / 50
      const moveY = (clientY - innerHeight / 2) / 50

      videoRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <Navbar />
      <ParticleBackground />

      {/* Gradient Blobs */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent-pink/30 to-accent-blue/30 rounded-full filter blur-[80px] opacity-30 animate-blob"
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
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent-blue/30 to-accent-pink/30 rounded-full filter blur-[80px] opacity-30 animate-blob animation-delay-2000"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="w-full h-screen">
        <Slider slides={heroSlides} className="h-full" />
      </div>

      <motion.div
        className="container mx-auto px-6 absolute bottom-32 left-0 right-0 z-20"
        style={{ y: smoothY, opacity: smoothOpacity, scale: smoothScale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex justify-center">
            <Button size="lg" className="rounded-full text-base bg-gradient-to-r from-accent-pink to-accent-blue">
              Get Started Now
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
