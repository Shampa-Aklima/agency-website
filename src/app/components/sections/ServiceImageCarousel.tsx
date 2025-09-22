"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'

type galleryImageProps = {
  images: string[]
  title?: string
}

export function ServiceImageCarousel({ images, title = "Our Work in Action" }: galleryImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const visibleImagesCount = 3 // Number of images to show at once

  // Convert string array to image objects and clone for infinite loop
  // We clone the first `visibleImagesCount` images to the end for a seamless loop
  const imageObjects = images.map((src, index) => ({
    src,
    alt: `Gallery image ${index + 1}`
  }))
  
  // Add a few cloned images at the end to allow for smooth transition before jumping back
  const clonedImages = [...imageObjects, ...imageObjects.slice(0, visibleImagesCount)];

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, []); // No dependencies, this function is stable

  const startAutoScroll = useCallback(() => {
    // Clear any existing interval to prevent multiple intervals running
    stopAutoScroll(); 
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // If we're about to go past the original images (i.e., showing a cloned image)
        if (nextIndex > images.length) {
          setIsTransitioning(false); // Disable transition for the instant jump
          // Use a small timeout to allow React to apply 'none' transition before the transform
          setTimeout(() => {
            setCurrentIndex(0); // Jump to the start of the original set
            setIsTransitioning(true); // Re-enable transition for next smooth scroll
          }, 50); // A small delay (e.g., 50ms) is safer than 0ms for browser rendering
          return prevIndex; // Return prevIndex for this render cycle, actual jump happens in timeout
        }
        setIsTransitioning(true); // Ensure transition is enabled for smooth scrolls
        return nextIndex;
      });
    }, 4000); // Scroll every 4 seconds
  }, [images.length, stopAutoScroll]); // Dependencies: images.length and stopAutoScroll

  useEffect(() => {
    if (!images || images.length === 0 || images.length < visibleImagesCount) {
      // If there are no images or not enough for the carousel, stop auto-scroll and return
      stopAutoScroll();
      return;
    }

    startAutoScroll();

    return () => {
      stopAutoScroll();
    };
  }, [images, visibleImagesCount, startAutoScroll, stopAutoScroll]); // Added startAutoScroll and stopAutoScroll

  const goToNext = useCallback(() => {
    stopAutoScroll();
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex > images.length) {
        setIsTransitioning(false);
        setTimeout(() => {
          setCurrentIndex(0);
          setIsTransitioning(true);
        }, 50);
        return prevIndex;
      }
      setIsTransitioning(true);
      return nextIndex;
    });
    setTimeout(startAutoScroll, 1000); // Restart auto-scroll after manual navigation
  }, [images.length, startAutoScroll, stopAutoScroll]);

  const goToPrevious = useCallback(() => {
    stopAutoScroll();
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      if (nextIndex < 0) {
        setIsTransitioning(false);
        setTimeout(() => {
          setCurrentIndex(images.length - 1); // Jump to the last original image
          setIsTransitioning(true);
        }, 50);
        return prevIndex;
      }
      setIsTransitioning(true);
      return nextIndex;
    });
    setTimeout(startAutoScroll, 1000);
  }, [images.length, startAutoScroll, stopAutoScroll]);

  const goToSlide = useCallback((index: number) => {
    stopAutoScroll();
    setIsTransitioning(true); // Ensure transition is enabled for direct jumps
    setCurrentIndex(index);
    setTimeout(startAutoScroll, 1000);
  }, [startAutoScroll, stopAutoScroll]);

  if (!images || images.length === 0) {
    return null
  }

  // Calculate translateX value based on current index
  const translateXValue = -currentIndex * (100 / visibleImagesCount)

  return (
    <section className="py-16 md:py-24 ">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          {title}
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Main carousel container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div
              className="flex"
              style={{
                transform: `translateX(${translateXValue}%)`,
                transition: isTransitioning ? "transform 0.8s ease-in-out" : "none",
                width: `${(clonedImages.length / visibleImagesCount) * 100}%`,
              }}
            >
              {clonedImages.map((image, index) => (
                <div
                  key={image.src + '-' + index} // More robust key for stability
                  className="flex-shrink-0 aspect-video relative"
                  style={{ width: `${100 / visibleImagesCount}%` }}
                >
                  <div className="p-2">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image 
                        src={image.src || "/placeholder.svg"} 
                        alt={image.alt} 
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized // Added this prop to ensure placeholder images load
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  (currentIndex % images.length) === index // Corrected logic for dots
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile view - single image */}
        <div className="md:hidden mt-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src={images[currentIndex % images.length] || "/placeholder.svg"}
              alt={`Gallery image ${(currentIndex % images.length) + 1}`}
              fill
              className=""
              
              unoptimized // Added this prop for mobile view as well
            />
          </div>
          
          {/* Mobile dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  (currentIndex % images.length) === index // Corrected logic for mobile dots
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
