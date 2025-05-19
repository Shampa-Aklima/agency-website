import type React from "react"
interface BenefitItem {
  title: string
  description: string
  icon: React.ReactNode
}

interface WhyChooseUsProps {
  title: string
  subtitle: string
  benefits: BenefitItem[]
}

export function WhyChooseUs({ title, subtitle, benefits }: WhyChooseUsProps) {
  return (
    <section className="py-16 px-4 md:px-6 bg-purple-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-800/50 rounded-full flex items-center justify-center mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
