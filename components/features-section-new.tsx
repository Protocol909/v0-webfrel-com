import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Calendar, type LucideIcon, MapIcon } from "lucide-react"
import type { ReactNode } from "react"

export function Features() {
  return (
    <section className="bg-black py-16 md:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
        <div className="mx-auto grid gap-4 lg:grid-cols-2">
          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={MapIcon}
                title="Digital Strategy"
                description="Data-driven strategies to grow your online presence."
              />
            </CardHeader>
            <div className="relative mb-6 border-t border-dashed border-white/10 sm:mb-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
              <div className="aspect-[76/59] p-1 px-6">
                <img
                  src="/placeholder.svg?height=929&width=1207"
                  alt="Digital strategy dashboard"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </FeatureCard>

          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Calendar}
                title="Content Planning"
                description="Strategic content scheduling for maximum impact."
              />
            </CardHeader>
            <CardContent>
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                <div className="aspect-[76/59] border border-white/10 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=929&width=1207"
                    alt="Content calendar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </FeatureCard>
        </div>
      </div>
    </section>
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
