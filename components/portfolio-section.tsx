"use client"
import { Package, Sparkles, Zap, Calendar } from "lucide-react"
import TimeLine_01, { type TimeLine_01Entry } from "@/components/ui/release-time-line"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import Link from "next/link"

const portfolioEntries: TimeLine_01Entry[] = [
  {
    icon: Package,
    title: "E-Commerce Platform",
    subtitle: "Web Development • 2024",
    description:
      "A complete e-commerce solution with custom product management, payment integration, and analytics dashboard for a growing retail brand.",
    items: [
      "Custom product catalog with advanced filtering",
      "Integrated payment processing with Stripe",
      "Real-time inventory management",
      "Mobile-first responsive design",
      "SEO optimized for maximum visibility",
    ],
    image: "/placeholder.svg?height=400&width=600",
    button: {
      url: "#",
      text: "View Project",
    },
  },
  {
    icon: Sparkles,
    title: "SaaS Dashboard",
    subtitle: "UI/UX Design • 2024",
    description:
      "A comprehensive analytics dashboard for a B2B SaaS platform, featuring real-time data visualization and intuitive user management.",
    items: [
      "Real-time data visualization with charts",
      "User role management system",
      "Custom report generation",
      "Dark/Light theme support",
    ],
    image: "/placeholder.svg?height=400&width=600",
    button: {
      url: "#",
      text: "View on GitHub",
    },
  },
  {
    icon: Zap,
    title: "Brand Identity",
    subtitle: "Branding • 2024",
    description:
      "Complete brand identity redesign for a tech startup, including logo, color palette, typography, and brand guidelines.",
    items: [
      "Logo design with multiple variations",
      "Comprehensive brand guidelines",
      "Social media asset kit",
      "Marketing collateral templates",
    ],
    image: "/placeholder.svg?height=400&width=600",
    button: {
      url: "#",
      text: "View Project",
    },
  },
  {
    icon: Calendar,
    title: "Mobile App Design",
    subtitle: "App Design • 2023",
    description:
      "A fitness tracking mobile application with seamless user experience, workout planning, and progress tracking features.",
    items: [
      "Intuitive workout tracking interface",
      "Progress visualization charts",
      "Social sharing features",
      "Personalized workout recommendations",
    ],
    image: "/placeholder.svg?height=400&width=600",
    button: {
      url: "#",
      text: "View on GitHub",
    },
  },
]

export function PortfolioSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12 md:mb-16">
          <Link
            href="https://webfrel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4 sm:mb-6 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <AnimatedShinyText className="text-xs sm:text-sm text-muted-foreground" shimmerWidth={60}>
              Our Work
            </AnimatedShinyText>
          </Link>
        </div>
      </div>
      <TimeLine_01
        title="Featured Projects"
        description="Explore our portfolio of successful digital transformations and creative solutions."
        entries={portfolioEntries}
        useTextEffect={true}
        hideHeader={true}
      />
    </section>
  )
}
