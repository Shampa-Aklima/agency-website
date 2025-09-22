import type React from "react"
import { cn } from "../lib/utils" // Adjust the import path as necessary
import { Button } from "../ui/button" // Assuming you have a shadcn/ui Button component

interface ButtonWithCnProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  isActive?: boolean
  className?: string
  children: React.ReactNode
}

export function ButtonWithCn({
  variant = "default",
  size = "default",
  isActive = false,
  className,
  children,
}: ButtonWithCnProps) {
  return (
    <Button
      
      className={cn(
        "transition-colors duration-200", // Always apply these classes
        isActive && "bg-primary/90 text-primary-foreground shadow-md", // Apply these if isActive is true
        className, // Allow external classes to be passed and merged
      )}
    >
      {children}
    </Button>
  )
}
