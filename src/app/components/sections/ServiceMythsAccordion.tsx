"use client"

import { useState } from "react"
import { ChevronDown } from 'lucide-react'

interface ServiceMythsAccordionProps {
  title: string
  description: string
  myths: Array<{
    question: string
    answer: string
  }>
}

export function ServiceMythsAccordion({ title, description, myths }: ServiceMythsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">{description}</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {myths.map((myth, index) => (
            <div key={index} className="bg-white/10 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{myth.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-white/80 leading-relaxed">{myth.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
