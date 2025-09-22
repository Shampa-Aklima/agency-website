// components/HeroSection.tsx

"use client"

import Image from "next/image"
import type React from "react"

interface HeroSectionProps {
  imageUrl: string
  imageAlt?: string
  className?: string

  
}

export const HeroSection = ({ imageUrl, imageAlt, className = "" }: HeroSectionProps) => {
  

  return (
    <section className={`relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden ${className}`}>
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={imageAlt || "Hero section image"}
        fill // Use fill to make the image cover the parent container
        className="object-cover object-center" // Ensure the image covers and is centered
        priority // Prioritize loading for above-the-fold images
      />
      
    </section>
  )
}
