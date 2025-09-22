"use client"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Button } from "../ui/button"
import ParticleBackground from "../ui/particle-background"
import Slider from "../ui/slider"
import { useEffect, useRef } from "react"

const heroSlides = [
  {
    image: "/team1.jpg",
    imageSize: "cover",
    imagePosition: "center",
    width: 1200,
    height: 600,
    className: "bg-gradient-to-r from-accent-pink to-accent-blue",
    // Store title and subtitle for use in customContent
    slideTitle: "Where Bold Minds Shape a Boundless Tomorrow",
    slideSubtitle:
      "At Najah, we don't follow trends — we create them. Dive into a realm where visionary minds craft the future with AI, XR, and boundless imagination.",
  },
  {
    image: "/hero.jpg",
    imageSize: "cover",
    imagePosition: "center",
    width: 1200,
    height: 600,
    className: "bg-gradient-to-r from-accent-pink to-accent-blue",
    slideTitle: "Empowering Dreams with Cutting Edge Technology",
    slideSubtitle:
      "Join us in a journey where innovation meets creativity, and every idea has the potential to transform the world.",
  },
  {
    image: "/hero4.jpg",
    imageSize: "cover",
    imagePosition: "center",
    width: 1200,
    height: 600,
    className: "bg-gradient-to-r from-accent-pink to-accent-blue",
    slideTitle: "Pioneering the Edge of Innovation and Imagination",
    slideSubtitle:
      "At Najah, we go beyond the ordinary. Our groundbreaking solutions in AI, XR, and immersive experiences pave the way for a future where anything is possible.",
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
        <div className="relative w-full max-h-[600px] h-[600px] bg-cover bg-center overflow-hidden">
          {/* Custom Slider with Enhanced Content */}
          <Slider
            slides={heroSlides.map((slide) => ({
              ...slide,
              // Add custom content to each slide with overlay and text shadows
              customContent: (
                <div className="absolute inset-0 z-10">
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />

                  {/* Content Container */}
                  <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
                    {/* Title with Text Shadow */}
                    <motion.h1
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 max-w-4xl leading-tight"
                      style={{
                        textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
                        y: smoothY,
                        opacity: smoothOpacity,
                        scale: smoothScale,
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      {slide.slideTitle}
                    </motion.h1>

                    {/* Subtitle with Text Shadow */}
                    <motion.p
                      className="text-xl sm:text-xl md:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl leading-relaxed"
                      style={{
                        textShadow: "1px 1px 3px rgba(0,0,0,0.7), 0 0 15px rgba(0,0,0,0.4)",
                        y: smoothY,
                        opacity: smoothOpacity,
                        scale: smoothScale,
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      {slide.slideSubtitle}
                    </motion.p>

                    {/* Button */}
                    <motion.div
                      style={{ y: smoothY, opacity: smoothOpacity, scale: smoothScale }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white h-12 px-8 rounded-full text-sm sm:text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          Get Started Now
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
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
