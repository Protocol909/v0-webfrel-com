"use client"
import { PricingSection } from "@/components/ui/pricing"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    info: "Perfect for small projects",
    price: {
      monthly: 499,
      yearly: Math.round(499 * 12 * (1 - 0.15)),
    },
    features: [
      { text: "Single page website" },
      { text: "Basic SEO optimization" },
      { text: "Mobile responsive design" },
      { text: "1 revision round", tooltip: "One round of feedback and revisions" },
      { text: "Email support", tooltip: "Response within 48 hours" },
    ],
    btn: {
      text: "Get Started",
      href: "https://discord.gg/x67yNjVtPz",
    },
  },
  {
    highlighted: true,
    id: "professional",
    name: "Professional",
    info: "For growing businesses",
    price: {
      monthly: 1499,
      yearly: Math.round(1499 * 12 * (1 - 0.15)),
    },
    features: [
      { text: "Multi-page website (up to 10)" },
      { text: "Advanced SEO & analytics" },
      { text: "Custom animations" },
      { text: "CMS integration", tooltip: "Content management system for easy updates" },
      { text: "3 revision rounds" },
      { text: "Priority support", tooltip: "Response within 24 hours" },
    ],
    btn: {
      text: "Get Started",
      href: "https://discord.gg/x67yNjVtPz",
    },
  },
  {
    name: "Enterprise",
    info: "For large organizations",
    price: {
      monthly: 4999,
      yearly: Math.round(4999 * 12 * (1 - 0.15)),
    },
    features: [
      { text: "Unlimited pages" },
      { text: "Full branding package" },
      { text: "E-commerce integration" },
      { text: "Custom development" },
      { text: "Unlimited revisions" },
      { text: "Dedicated account manager" },
      { text: "24/7 priority support" },
    ],
    btn: {
      text: "Contact Us",
      href: "https://wa.link/w01uso",
    },
  },
]

export default function PricingSectionComponent() {
  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4 sm:mb-6">
            <AnimatedShinyText className="text-xs sm:text-sm text-muted-foreground" shimmerWidth={60}>
              Pricing
            </AnimatedShinyText>
          </div>
        </div>
        <PricingSection
          plans={PLANS}
          heading="Choose Your Plan"
          description="Transparent pricing with no hidden fees. Choose the plan that fits your needs."
          useTextEffect={true}
        />
      </div>
    </section>
  )
}
