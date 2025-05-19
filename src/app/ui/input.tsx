import * as React from "react"
import { cn } from "../component/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white shadow-sm transition-colors",
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
Input.displayName = "Input"

export { Input }
