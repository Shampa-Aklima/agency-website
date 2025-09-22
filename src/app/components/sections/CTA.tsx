"use client"

import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

export default function CTA() {
  const router = useRouter()
  
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your AI Transformation Starts Today</h2>
        <p className="text-white/70 mb-8">
          Let&apos;s create your best digital future. Reach out now with your business problems, and we&apos;ll craft a tailored
          solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-6 h-auto"
            onClick={() => router.push("/contact")}
          >
            Get a Free Consultation →
          </Button>
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 rounded-full px-6 py-6 h-auto"
            onClick={() => router.push("/demo")}
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold mb-2">Empowering Businesses and Individuals in the Digital Frontier</h3>
      </div>
    </section>
  )
}
