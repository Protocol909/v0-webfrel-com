"use client"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { LogoCloud } from "@/components/ui/logo-cloud"

const logos = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-24 pb-12 lg:pb-0">
      <div className="absolute inset-0">
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[
            [255, 255, 255],
            [200, 200, 200],
          ]}
          dotSize={3}
          showGradient={true}
          reverse={false}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        {/* Main Content */}
        <motion.div
          className="text-center space-y-4 sm:space-y-6 md:space-y-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            <span className="text-xs sm:text-sm text-muted-foreground">Next-level digital solutions</span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-balance leading-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Build. Scale.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-muted-foreground">
              Elevate.
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-balance px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Full-service digital agency empowering startups, creators, and businesses to build professional,
            high-performing online experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-black text-white flex items-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base"
            >
              <ArrowRight className="w-4 h-4" />
              <span>Book a Meeting</span>
            </HoverBorderGradient>
          </motion.div>
        </motion.div>

        {/* Trusted by companies section */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-24 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="mb-4 sm:mb-5 text-center font-medium text-white text-base sm:text-lg md:text-xl tracking-tight">
              <span className="text-muted-foreground">Trusted by experts.</span>
              <br />
              <span className="font-semibold">Used by the leaders.</span>
            </h2>
            <div className="mx-auto my-4 sm:my-5 h-px max-w-sm bg-white/20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

            <LogoCloud logos={logos} />

            <div className="mt-4 sm:mt-5 h-px bg-white/20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </section>
  )
}
