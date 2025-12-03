"use client"

import { ScrollTextEffect } from "@/components/ui/text-effect"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { HoverPreviewText } from "@/components/ui/hover-preview"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-4 sm:py-6 md:py-8 relative bg-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 sm:mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <AnimatedShinyText className="text-xs sm:text-sm text-muted-foreground" shimmerWidth={80}>
              Our Mission
            </AnimatedShinyText>
          </div>

          <ScrollTextEffect
            preset="blur"
            per="word"
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-balance text-white"
          >
            Unlock the full potential of your digital identity
          </ScrollTextEffect>

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HoverPreviewText className="mb-0 text-left" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
