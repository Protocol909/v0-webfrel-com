"use client"

import { Zap, Shield, Rocket, Users } from "lucide-react"
import { GridPatternCard, GridPatternCardBody } from "@/components/ui/grid-pattern-card"
import { LearnMoreButton } from "@/components/ui/learn-more-button"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with cutting-edge technology for blazing-fast load times.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime guarantee for peace of mind.",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Built to grow with your business, from startup to enterprise scale.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with years of experience in digital excellence.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-muted-foreground">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Why Choose Webfrel?</h2>
          <p className="text-lg text-muted-foreground text-balance">
            We deliver exceptional results through proven methodologies and cutting-edge technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <GridPatternCard key={index} className="h-full">
              <GridPatternCardBody className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{feature.description}</p>
                <div className="mt-auto">
                  <LearnMoreButton href="#contact" text="Learn More" />
                </div>
              </GridPatternCardBody>
            </GridPatternCard>
          ))}
        </div>
      </div>
    </section>
  )
}
