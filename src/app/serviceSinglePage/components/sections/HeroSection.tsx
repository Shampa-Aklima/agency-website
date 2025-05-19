import Link from "next/link"
import { Button } from "../ui/button"

interface HeroSectionProps {
  title: string
  description: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
}

export function HeroSection({ title, description, primaryCta, secondaryCta }: HeroSectionProps) {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-background text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">{title}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link href={primaryCta.href}>
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700"
            >
              {primaryCta.text}
            </Button>
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href}>
              <Button 
                variant="outline" 
                size="lg"
              >
                {secondaryCta.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
