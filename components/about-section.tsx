"use client"

import { TextFade } from "@/components/ui/text-fade"
import { ScrollTextEffect } from "@/components/ui/text-effect"

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 relative bg-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4 sm:mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs sm:text-sm text-muted-foreground">Our Mission</span>
          </div>

          <ScrollTextEffect
            preset="blur"
            per="word"
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-balance text-white"
          >
            Unlock the full potential of your digital identity
          </ScrollTextEffect>

          <div className="mb-4 sm:mb-6 text-white/80">
            <TextFade
              text="Webfrel is a full-service digital agency platform designed to help individuals, startups, and businesses build, scale, and optimize their online presence."
              wordClassName="text-lg sm:text-xl md:text-2xl lg:text-3xl"
            />
          </div>

          <div className="mb-4 sm:mb-6 text-white/80">
            <TextFade
              text="We provide cutting-edge web solutions, branding strategies, and performance-driven growth — all in one seamless platform. Our mission is to empower clients to not just exist online, but to thrive, engage, and grow with scalable, modern solutions."
              wordClassName="text-lg sm:text-xl md:text-2xl lg:text-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
