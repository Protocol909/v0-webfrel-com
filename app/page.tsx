"use client"

import { lazy, Suspense } from "react"
import { motion } from "framer-motion"
import { MiniNavbar } from "@/components/mini-navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsColumnSection } from "@/components/testimonials-column-section"
import { ProcessSection } from "@/components/process-section"
import { FooterNew } from "@/components/footer-new"

const Features = lazy(() => import("@/components/features-section-new").then((m) => ({ default: m.Features })))
const PricingSection5 = lazy(() => import("@/components/pricing-section-new"))
const CTASection = lazy(() => import("@/components/cta-section-new").then((m) => ({ default: m.CTASection })))

function LoadingFallback() {
  return (
    <div className="w-full h-64 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <MiniNavbar />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />

        <Suspense fallback={<LoadingFallback />}>
          <Features />
        </Suspense>

        <PortfolioSection />

        <Suspense fallback={<LoadingFallback />}>
          <PricingSection5 />
        </Suspense>

        <ProcessSection />

        <Suspense fallback={<LoadingFallback />}>
          <TestimonialsColumnSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <CTASection
            title="Ready to elevate your digital presence?"
            action={{
              text: "Get Started Today",
              href: "#contact",
              variant: "default",
            }}
          />
        </Suspense>

        <FooterNew />

        {/* Removed SparklesSection from after footer as requested, but keeping import for potential use */}
      </motion.div>
    </main>
  )
}
