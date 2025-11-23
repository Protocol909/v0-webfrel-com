"use client"
import type React from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { InstagramIcon, LinkedinIcon, YoutubeIcon, Twitter } from "lucide-react"
import Image from "next/image"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Services",
    links: [
      { title: "Web Design", href: "#" },
      { title: "Development", href: "#" },
      { title: "Branding", href: "#" },
      { title: "SEO & Marketing", href: "#" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About Us", href: "#about" },
      { title: "Process", href: "#process" },
      { title: "Careers", href: "#" },
      { title: "Contact", href: "#contact" },
    ],
  },
  {
    label: "Legal",
    links: [
      { title: "Privacy Policy", href: "#" },
      { title: "Terms of Service", href: "#" },
      { title: "Cookie Policy", href: "#" },
    ],
  },
  {
    label: "Social",
    links: [
      { title: "Twitter", href: "#", icon: Twitter },
      { title: "Instagram", href: "#", icon: InstagramIcon },
      { title: "LinkedIn", href: "#", icon: LinkedinIcon },
      { title: "Youtube", href: "#", icon: YoutubeIcon },
    ],
  },
]

export function FooterNew() {
  return (
    <footer className="md:rounded-t-[3rem] relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-[2rem] border-t border-white/10 bg-black px-6 py-12 lg:py-16">
      {/* <div className="bg-white/10 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[2px]" /> */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[1px]" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-12">
        <AnimatedContainer className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 relative flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Webfrel Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white">Webfrel</span>
          </div>
          <p className="text-muted-foreground mt-6 text-sm max-w-xs">
            Empowering businesses with cutting-edge digital solutions. Build, scale, and elevate your online presence
            with Webfrel.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-8">
            © {new Date().getFullYear()} Webfrel. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-sm font-semibold text-white mb-4">{section.label}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-white inline-flex items-center transition-all duration-300 hover:translate-x-1"
                      >
                        {link.icon && <link.icon className="me-2 size-3" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: 10, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
