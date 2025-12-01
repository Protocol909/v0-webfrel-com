"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollTextEffect } from "@/components/ui/text-effect"

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center p-8 sm:p-12 md:p-16 border border-white/20 rounded-2xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md">
          <ScrollTextEffect
            preset="blur"
            per="word"
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance text-white"
          >
            Ready to elevate your digital presence?
          </ScrollTextEffect>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 text-balance">
            Let's build something extraordinary together. Start your journey to digital excellence today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 group w-full sm:w-auto text-sm sm:text-base"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/5 bg-transparent w-full sm:w-auto text-sm sm:text-base"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
