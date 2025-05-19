import Link from "next/link"
import { Button } from "../ui/button"

interface CTASectionProps {
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
  className?: string
}

export function CTASection({ title, description, primaryCta, secondaryCta, className = "" }: CTASectionProps) {
  return (
    <section className={`py-16 px-4 md:px-6 text-center ${className}`}>
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
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
