"use client"

import Image from "next/image"

interface ServiceImageGalleryProps {
  images: string[]
}

export function ServiceImageGallery({ images }: ServiceImageGalleryProps) {
  return (
    <section className="py-4 bg-white/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <Image 
                src={image || "/placeholder.svg"} 
                alt={`Gallery image ${index + 1}`}
                width={800}
                height={800}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
