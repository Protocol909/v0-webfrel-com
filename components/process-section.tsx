"use client"

import type React from "react"
import { Box, Code, Lightbulb, Rocket, Search } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { cn } from "@/lib/utils"
import { ScrollTextEffect } from "@/components/ui/text-effect"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black relative" id="process">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center border border-white/20 py-1 px-3 sm:px-4 rounded-full text-xs font-medium backdrop-blur-sm mb-4">
            <AnimatedShinyText className="text-white/80" shimmerWidth={80}>
              How We Work
            </AnimatedShinyText>
          </div>
          <ScrollTextEffect
            preset="blur"
            per="word"
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-4"
          >
            Our Process
          </ScrollTextEffect>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional results.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-3 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="lg:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Search className="h-4 w-4 text-white" />}
            title="Discovery & Strategy"
            description="We dive deep into your business goals, audience, and market to create a tailored roadmap."
          />
          <GridItem
            area="lg:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Lightbulb className="h-4 w-4 text-white" />}
            title="Design & Concept"
            description="Our creative team crafts stunning visuals and intuitive user experiences that align with your brand."
          />
          <GridItem
            area="lg:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Code className="h-4 w-4 text-white" />}
            title="Development"
            description="We build robust, scalable solutions using cutting-edge technologies and clean code."
          />
          <GridItem
            area="lg:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Box className="h-4 w-4 text-white" />}
            title="Testing & QA"
            description="Rigorous testing ensures performance, security, and a flawless user experience across all devices."
          />
          <GridItem
            area="lg:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Rocket className="h-4 w-4 text-white" />}
            title="Launch & Growth"
            description="We handle the deployment and provide ongoing optimization to help your business scale."
          />
        </ul>
      </div>
    </section>
  )
}

interface GridItemProps {
  area: string
  icon: React.ReactNode
  title: string
  description: React.ReactNode
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[12rem] sm:min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
          variant="default"
        />
        <div className="relative flex h-full flex-col justify-between gap-4 sm:gap-6 overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-black p-4 sm:p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-white/20 bg-white/5 p-2">{icon}</div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="pt-0.5 text-lg sm:text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                {title}
              </h3>
              <p className="font-sans text-xs sm:text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
