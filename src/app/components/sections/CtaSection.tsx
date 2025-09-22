"use client"

import { Button } from "../ui/button"

interface CtaSectionProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
}

export function CtaSection({ title, description, buttonText, buttonHref }: CtaSectionProps) {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">{title}</h2>
      <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8">{description}</p>
      <Button
        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg shadow-purple-500/20 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base w-full sm:w-auto"
        onClick={() => window.location.href = buttonHref}
      >
        {buttonText}
      </Button>
    </section>
  )
}
