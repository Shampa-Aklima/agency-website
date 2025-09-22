// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "./button"
// import { cn } from "../component/lib/utils"

// interface SliderProps {
//   slides: {
//     title: string
//     subtitle: string
//     image: string
//     gradient?: string
//   }[]
//   autoPlay?: boolean
//   interval?: number
//   className?: string
// }

// export default function Slider({ slides, autoPlay = true, interval = 5000, className }: SliderProps) {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [direction, setDirection] = useState(0)

//   useEffect(() => {
//     if (!autoPlay) return

//     const timer = setInterval(() => {
//       nextSlide()
//     }, interval)

//     return () => clearInterval(timer)
//   }, [currentIndex, autoPlay, interval])

//   const nextSlide = () => {
//     setDirection(1)
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
//   }

//   const prevSlide = () => {
//     setDirection(-1)
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
//   }

//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? "100%" : "-100%",
//       opacity: 0,
//     }),
//   }

//   return (
//     <div className={cn("relative w-full overflow-hidden", className)}>
//       <AnimatePresence initial={false} custom={direction} mode="popLayout">
//         <motion.div
//           key={currentIndex}
//           custom={direction}
//           variants={slideVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.5 },
//           }}
//           className="w-full h-full absolute top-0 left-0"
//         >
//           <div
//             className="w-full h-full bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${slides[currentIndex].image})`,
//             }}
//           >
//             <div
//               className={`absolute inset-0 ${
//                 slides[currentIndex].gradient ||
//                 "bg-gradient-to-r from-deep-purple/90 via-deep-purple/70 to-deep-purple/50"
//               }`}
//             >
//               <div className="flex flex-col items-center justify-center h-full text-center px-6">
//                 <motion.h2
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2, duration: 0.8 }}
//                   className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-accent-pink to-accent-blue bg-clip-text text-transparent max-w-4xl"
//                 >
//                   {slides[currentIndex].title}
//                 </motion.h2>
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4, duration: 0.8 }}
//                   className="text-white/80 max-w-[700px] text-lg mb-8"
//                 >
//                   {slides[currentIndex].subtitle}
//                 </motion.p>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.6, duration: 0.8 }}
//                 >
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/20 transition-colors z-10"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft size={24} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/20 transition-colors z-10"
//         aria-label="Next slide"
//       >
//         <ChevronRight size={24} />
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > currentIndex ? 1 : -1)
//               setCurrentIndex(index)
//             }}
//             className={`w-3 h-3 rounded-full transition-colors ${
//               index === currentIndex ? "bg-accent-pink" : "bg-white/30"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../lib/utils"

interface SliderProps {
  slides: {
    title: string
    subtitle: string
    image: string
    gradient?: string
    customContent?: React.ReactNode
  }[]
  autoPlay?: boolean
  interval?: number
  className?: string
}

export default function Slider({ slides, autoPlay = true, interval = 5000, className }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      nextSlide()
    }, interval)
    return () => clearInterval(timer)
  }, [currentIndex, autoPlay, interval])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  }

  return (
    <div className={cn("relative w-full overflow-hidden h-[600px] max-h-[600px]", className)}>
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="w-full h-full absolute top-0 left-0"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: slides[currentIndex].image ? `url(${slides[currentIndex].image})` : "none",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <div
              className={`absolute inset-0 ${
                slides[currentIndex].gradient ||
                "bg-gradient-to-r from-deep-purple/90 via-deep-purple/70 to-deep-purple/50"
              }`}
            >
              <div className="flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-8 lg:px-6 relative">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-accent-pink to-accent-blue bg-clip-text text-transparent max-w-4xl leading-tight"
                >
                  {slides[currentIndex].title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-white/80 max-w-[90%] sm:max-w-[80%] md:max-w-[600px] text-xs sm:text-sm md:text-base mb-4 sm:mb-6 leading-relaxed"
                >
                  {slides[currentIndex].subtitle}
                </motion.p>
              </div>

              {/* Render custom content if provided */}
              {slides[currentIndex].customContent}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-1.5 sm:p-2 rounded-full text-white hover:bg-white/20 transition-colors z-30 touch-manipulation"
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-1.5 sm:p-2 rounded-full text-white hover:bg-white/20 transition-colors z-30 touch-manipulation"
        aria-label="Next slide"
      >
        <ChevronRight size={18} className="sm:w-5 sm:h-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors touch-manipulation ${
              index === currentIndex ? "bg-accent-pink" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
