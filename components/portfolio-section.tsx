"use client"
import { Package, Sparkles, Zap, Calendar } from "lucide-react"
import TimeLine_01, { type TimeLine_01Entry } from "@/components/ui/release-time-line"

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
    <TimeLine_01
      title="Featured Projects"
      description="Explore our portfolio of successful digital transformations and creative solutions."
      entries={portfolioEntries}
      useTextEffect={true}
    />
  )
}
