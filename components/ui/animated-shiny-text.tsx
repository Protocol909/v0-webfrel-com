import type { CSSProperties, FC, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedShinyTextProps {
  children: ReactNode
  className?: string
  shimmerWidth?: number
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({ children, className, shimmerWidth = 100 }) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "relative inline-block will-change-transform",
        "bg-clip-text bg-no-repeat [background-size:var(--shiny-width)_100%]",
        "bg-gradient-to-r from-transparent via-white/80 via-50% to-transparent",
        "animate-shiny-text",
        className,
      )}
    >
      {children}
    </span>
  )
}

export { AnimatedShinyText }
