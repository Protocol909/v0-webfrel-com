"use client"

import { lazy, Suspense } from "react"
import { motion } from "framer-motion"
import { MiniNavbar } from "@/components/mini-navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ProcessSection } from "@/components/process-section"
import { FooterNew } from "@/components/footer-new"
import { IntegrationsSection } from "@/components/integrations-section"

const Features = lazy(() => import("@/components/features-section-new").then((m) => ({ default: m.Features })))
const PricingSection = lazy(() => import("@/components/pricing-section"))
const TestimonialsColumnSection = lazy(() =>
  import("@/components/testimonials-column-section").then((m) => ({ default: m.TestimonialsColumnSection })),
)
const FAQSection = lazy(() => import("@/components/faq-section").then((m) => ({ default: m.FAQSection })))
const CTASection = lazy(() => import("@/components/cta-section-new").then((m) => ({ default: m.CTASection })))

function LoadingFallback() {
  return (
    <div className="w-full h-64 flex items-center justify-center" style={{ backgroundColor: "#000000" }}>
      <motion.div
        className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth" style={{ backgroundColor: "#000000" }}>
      <MiniNavbar />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />

        <Suspense fallback={<LoadingFallback />}>
          <Features />
        </Suspense>

        <PortfolioSection />

        <IntegrationsSection />

        <ProcessSection />

        <Suspense fallback={<LoadingFallback />}>
          <PricingSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <TestimonialsColumnSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <FAQSection />
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
      </motion.div>
    </main>
  )
}
