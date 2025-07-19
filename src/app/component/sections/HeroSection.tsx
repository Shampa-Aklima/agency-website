// components/HeroSection.tsx

"use client"

import Image from "next/image"
import type React from "react"

interface HeroSectionProps {
  imageUrl: string
  imageAlt?: string
  className?: string
  variant: "about" | "service" | "single-service" | "contact"
  children?: React.ReactNode
}

export const HeroSection = ({ imageUrl, imageAlt, variant, children, className = "" }: HeroSectionProps) => {
  let title = ""
  let description = ""

  switch (variant) {
    case "about":
      title = "About Us"
      description = "Learn more about our mission, vision, and the dedicated team behind our success."
      break
    case "service":
      title = "Our Services"
      description = "Discover the comprehensive range of services we offer to meet your needs."
      break
    case "single-service":
      title = "Service Details"
      description = "Dive deeper into the specifics of this particular service offering."
      break
    case "contact":
      title = "Contact Us"
      description = "Get in touch with our team to discuss your needs and how we can help."
      break
    default:
      title = "Welcome"
      description = "Explore our site."
  }

  return (
    <section className={`relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden ${className}`}>
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={imageAlt || "Hero section image"}
        fill // Use fill to make the image cover the parent container
        className="object-cover object-center" // Ensure the image covers and is centered
        priority // Prioritize loading for above-the-fold images
      />
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[#8E7CFF]/60 opacity-50 z-10" />
      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4 md:p-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">{title}</h1>
        <p className="text-lg md:text-xl max-w-2xl drop-shadow-md">{description}</p>
        {children} {/* Render children if provided, for additional custom content */}
      </div>
    </section>
  )
}
