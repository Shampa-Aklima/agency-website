import * as React from "react"
import { cn } from "../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-pink disabled:opacity-50",
          "shadow-[0_0_15px_rgba(253,94,255,0.3)] hover:shadow-[0_0_20px_rgba(253,94,255,0.5)]",
          {
            "bg-gradient-to-r from-accent-pink to-accent-blue text-white": variant === "default",
            "border border-white/20 bg-transparent hover:bg-white/5 text-white": variant === "outline",
            "bg-transparent hover:bg-white/5 text-white": variant === "ghost",
            "h-10 px-6": size === "default",
            "h-8 px-4 text-xs": size === "sm",
            "h-12 px-8 text-base": size === "lg",
          },
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button }
