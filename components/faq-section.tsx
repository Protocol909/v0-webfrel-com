"use client"
import { Accordion05 } from "@/components/ui/accordion-05"
import { ScrollTextEffect } from "@/components/ui/text-effect"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

export function FAQSection() {
  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4 sm:mb-6">
            <AnimatedShinyText className="text-xs sm:text-sm text-muted-foreground" shimmerWidth={40}>
              FAQ
            </AnimatedShinyText>
          </div>
          <ScrollTextEffect
            preset="blur"
            per="word"
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance text-white"
          >
            Frequently Asked Questions
          </ScrollTextEffect>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-balance">
            Find answers to common questions about our services and process.
          </p>
        </div>
        <Accordion05 />
      </div>
    </section>
  )
}
