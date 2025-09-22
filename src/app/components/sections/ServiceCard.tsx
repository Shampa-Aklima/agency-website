import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { cn } from "../lib/utils" // Assuming cn is in lib/utils.ts
import { Button } from "../ui/button" // Assuming you want a button for learn more
import Link from "next/link" // For the learn more link

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode // Changed from LucideIcon to React.ReactNode
  title: string
  description: string
  features?: string[] // An array of strings for features/sub-services
  learnMoreLink: string
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  learnMoreLink,
  className,
  ...props
}: ServiceCardProps) {
  // Use ServiceCardProps here
  return (
    <Card className={cn("flex flex-col p-6 text-center h-full", className)} {...props}>
      <CardHeader className="pb-4 flex flex-col items-center">
        <div className="mb-4 text-primary">{icon}</div> {/* Render the icon */}
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        {features && features.length > 0 && (
          <ul className="list-disc list-inside text-left space-y-1 mb-4">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
        <div className="mt-auto">
          {" "}
          {/* Pushes the button to the bottom */}
          {learnMoreLink && (
            <Link href={learnMoreLink} passHref>
              <Button variant="outline" className="w-full bg-transparent">
                Learn More
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export type ServiceItemType = {
  icon: React.ReactNode
  title: string
  description: string
}
