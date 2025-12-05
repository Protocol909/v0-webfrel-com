"use client"

import type React from "react"
import { memo } from "react"
import { Globe, Smartphone, Search, Server, FolderKanban, MoreHorizontal } from "lucide-react"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { ScrollTextEffect } from "@/components/ui/text-effect"

const WebLogo = () => <Globe className="size-9 text-white" />
const AppLogo = () => <Smartphone className="size-9 text-white" />
const SEOLogo = () => <Search className="size-9 text-white" />
const BackendLogo = () => <Server className="size-9 text-white" />
const ProjectLogo = () => <FolderKanban className="size-9 text-white" />
const OthersLogo = () => <MoreHorizontal className="size-9 text-white" />

const Integration = memo(function Integration({
  icon,
  name,
  description,
}: { icon: React.ReactNode; name: string; description: string }) {
  return (
    <div className="hover:bg-white/5 space-y-4 rounded-lg border border-white/10 p-4 transition-colors bg-black/50">
      <div className="flex size-fit items-center justify-center">{icon}</div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-white">{name}</h3>
        <p className="text-white/60 line-clamp-2 text-sm">{description}</p>
      </div>
    </div>
  )
})

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-black">
      <div className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="mx-auto flex flex-col px-4 sm:px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
          <div className="order-last mt-12 flex flex-col gap-8 sm:gap-12 md:order-first md:mt-0">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <AnimatedShinyText className="text-xs sm:text-sm text-muted-foreground" shimmerWidth={80}>
                  What We Do
                </AnimatedShinyText>
              </div>
              <ScrollTextEffect
                preset="blur"
                per="word"
                as="h2"
                className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white"
              >
                All the services we provide
              </ScrollTextEffect>
              <p className="text-white/70 text-sm sm:text-base">
                Connect seamlessly with popular open-source platforms and services to enhance your workflow.
              </p>
            </div>
          </div>

          <div className="-mx-4 px-4 sm:-mx-6 sm:px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] md:mx-0 md:ml-auto md:mr-0 md:max-w-md">
            <div className="bg-black/50 rounded-2xl border border-white/10 p-3 shadow-lg md:pb-12">
              <div className="grid grid-cols-2 gap-2">
                <Integration icon={<WebLogo />} name="Web" description="Web development and web designing." />
                <Integration icon={<AppLogo />} name="App" description="App development and app designing." />
                <Integration icon={<SEOLogo />} name="SEO" description="SEO optimization and more." />
                <Integration icon={<BackendLogo />} name="Backend" description="Backend management." />
                <Integration icon={<ProjectLogo />} name="Project" description="Control and moderation." />
                <Integration icon={<OthersLogo />} name="Others" description="Additional services and support." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
