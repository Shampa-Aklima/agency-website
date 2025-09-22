import * as React from "react"
import { cn } from "../lib/utils" // Corrected import path for cn

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white shadow-sm transition-colors",
        "placeholder:text-white/50",
        "focus:border-accent-pink focus:outline-none focus:ring-1 focus:ring-accent-pink",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
