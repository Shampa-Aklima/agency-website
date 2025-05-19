interface Testimonial {
    stars: number
    quote: string
    name: string
    title: string
  }
  
  interface TestimonialsSectionProps {
    testimonials: Testimonial[]
  }
  
  export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
    return (
      <section className="max-w-6xl container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/30 shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                {Array(testimonial.stars)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  