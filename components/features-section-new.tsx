import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Calendar, type LucideIcon, MapIcon } from "lucide-react"
import type { ReactNode } from "react"

export function Features() {
  return (
    null
  )
}

interface FeatureCardProps {
  children: ReactNode
  className?: string
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card className={cn("group relative rounded-lg bg-black/50 border-white/10", className)}>
    <CardDecorator />
    {children}
  </Card>
)

const CardDecorator = () => (
  <>
    <span className="border-white absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
    <span className="border-white absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
    <span className="border-white absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
    <span className="border-white absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
  </>
)

interface CardHeadingProps {
  icon: LucideIcon
  title: string
  description: string
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="p-6">
    <span className="text-muted-foreground flex items-center gap-2">
      <Icon className="size-4" />
      {title}
    </span>
    <p className="mt-8 text-2xl font-semibold text-white">{description}</p>
  </div>
)
