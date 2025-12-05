"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollTextEffect } from "@/components/ui/text-effect"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div
          className="max-w-4xl mx-auto text-center p-8 sm:p-12 md:p-16 border border-white/20 rounded-2xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md"
          style={{
            boxShadow:
              "0 0 60px 10px rgba(255, 255, 255, 0.1), 0 0 100px 20px rgba(255, 255, 255, 0.05), inset 0 0 60px 10px rgba(255, 255, 255, 0.03)",
          }}
        >
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
              className="bg-white text-black hover:bg-white/90 hover:text-black group w-full sm:w-auto text-sm sm:text-base"
              asChild
            >
              <Link href="https://discord.gg/x67yNjVtPz" target="_blank" rel="noopener noreferrer">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/5 hover:text-white text-white bg-transparent w-full sm:w-auto text-sm sm:text-base"
              asChild
            >
              <Link href="https://cal.com/webfrel/secret" target="_blank" rel="noopener noreferrer">
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
