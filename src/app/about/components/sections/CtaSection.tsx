"use client"

import { Button } from "../../../component/ui/button"

interface CtaSectionProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
}

export function CtaSection({ title, description, buttonText, buttonHref }: CtaSectionProps) {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-8">{description}</p>
      <Button
        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg shadow-purple-500/20 rounded-full px-8 py-6 text-lg"
        onClick={() => window.location.href = buttonHref}
      >
        {buttonText}
      </Button>
    </section>
  )
}
