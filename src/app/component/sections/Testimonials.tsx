"use client"

import { Card, CardContent } from "../../serviceSinglePage/components/ui/card"
import { Avatar } from "../ui/avatar"

interface Testimonial {
  content: string
  author: {
    name: string
    role: string
    company: string
    avatar: string
  }
}

interface TestimonialsProps {
  title: string
  description: string
  testimonials: Testimonial[]
}

export function Testimonials({ title, description, testimonials }: TestimonialsProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">{title}</h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-4 sm:p-6">
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <Avatar 
                    src={testimonial.author.avatar} 
                    alt={testimonial.author.name}
                    fallback={testimonial.author.name[0]}
                    className="h-10 w-10 sm:h-12 sm:w-12"
                  />
                  <div className="ml-3 sm:ml-4">
                    <p className="text-sm sm:text-base font-medium text-white">{testimonial.author.name}</p>
                    <p className="text-xs sm:text-sm text-gray-400">{testimonial.author.role}, {testimonial.author.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 