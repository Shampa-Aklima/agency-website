import * as React from "react"
import { cn } from "../component/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradient?: boolean
  hoverEffect?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, gradient = false, hoverEffect = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl bg-white/5 backdrop-blur-sm p-6 transition-all duration-300",
          {
            "bg-gradient-to-br from-accent-pink/20 to-accent-blue/20 border border-white/10": gradient,
            "hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(142,124,255,0.2)]": hoverEffect,
          },
          className,
        )}
        {...props}
      />
    )
  },
)
Card.displayName = "Card"

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("flex flex-col space-y-1.5", className)} {...props} />
})
CardHeader.displayName = "CardHeader"

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(({ className, ...props }, ref) => {
  return <h3 ref={ref} className={cn("text-xl font-semibold text-white", className)} {...props} />
})
CardTitle.displayName = "CardTitle"

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(({ className, ...props }, ref) => {
  return <p ref={ref} className={cn("text-white/70", className)} {...props} />
})
CardDescription.displayName = "CardDescription"

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("pt-4", className)} {...props} />
})
CardContent.displayName = "CardContent"

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("flex items-center pt-4", className)} {...props} />
})
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
