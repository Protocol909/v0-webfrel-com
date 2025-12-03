"use client"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { SparklesCompanies } from "@/components/ui/sparkles-companies"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import Link from "next/link"
import Image from "next/image"

const logos = [
  { id: "logo1", src: "/logo1.jpg", alt: "Partner Logo 1" },
  { id: "logo2", src: "/logo2.jpg", alt: "Partner Logo 2" },
  { id: "logo3", src: "/logo3.jpg", alt: "Partner Logo 3" },
  { id: "logo4", src: "/logo4.jpg", alt: "Partner Logo 4" },
  { id: "logo5", src: "/logo5.jpg", alt: "Partner Logo 5" },
  { id: "logo6", src: "/logo6.jpg", alt: "Partner Logo 6" },
  { id: "logo7", src: "/logo7.jpg", alt: "Partner Logo 7" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-24 pb-0">
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

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        <motion.div
          className="text-center space-y-4 sm:space-y-5 md:space-y-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="https://webfrel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mx-auto hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              <AnimatedShinyText className="text-xs sm:text-sm text-muted-foreground" shimmerWidth={100}>
                Next-level digital solutions
              </AnimatedShinyText>
            </Link>
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

        <motion.div
          className="mt-8 sm:mt-10 md:mt-12 relative w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="w-full">
            <div className="text-center text-lg sm:text-xl md:text-2xl text-foreground mb-6">
              <span className="text-white/60">Trusted by experts.</span>
              <br />
              <span className="text-white font-medium">Used by the leaders.</span>
            </div>

            <div className="relative w-screen -ml-[50vw] left-1/2 h-[60px] sm:h-[80px]">
              <InfiniteSlider
                className="flex h-full w-full items-center"
                duration={50} // Slower duration
                durationOnHover={100} // Even slower on hover
                gap={60}
              >
                {logos.map(({ id, src, alt }) => (
                  <div
                    key={id}
                    className="flex-shrink-0 w-24 sm:w-28 md:w-32 h-10 sm:h-12 relative opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={alt}
                      fill
                      className="object-contain filter brightness-0 invert"
                      sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                    />
                  </div>
                ))}
              </InfiniteSlider>
              <ProgressiveBlur
                className="pointer-events-none absolute top-0 left-0 h-full w-[60px] sm:w-[100px] md:w-[150px]"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute top-0 right-0 h-full w-[60px] sm:w-[100px] md:w-[150px]"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>

          <div className="relative -mt-16 sm:-mt-20 h-48 sm:h-64 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#ffffff,transparent_70%)] before:opacity-20" />
            <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-white/20 bg-black" />
            <SparklesCompanies
              density={800}
              speed={0.2} // Very slow sparkles
              opacitySpeed={0.5} // Slow opacity animation
              className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
              color="#ffffff"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </section>
  )
}
