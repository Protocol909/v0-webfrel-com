"use client"
import type React from "react"
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
    <footer
      id="contact"
      className="relative w-full border-t border-white/10 bg-zinc-950"
      style={{ backgroundColor: "#09090b" }} // Explicit fallback color
    >
      {/* Gradient line at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-[1px]"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 relative flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Webfrel Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold" style={{ color: "#ffffff" }}>
                Webfrel
              </span>
            </div>
            <p className="mt-6 text-sm max-w-xs" style={{ color: "#a1a1aa" }}>
              Empowering businesses with cutting-edge digital solutions. Build, scale, and elevate your online presence
              with Webfrel.
            </p>
            <p className="text-xs mt-8" style={{ color: "#71717a" }}>
              © {new Date().getFullYear()} Webfrel. All rights reserved.
            </p>
          </div>

          {/* Links Grid */}
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
            {footerLinks.map((section) => (
              <div key={section.label} className="mb-10 md:mb-0">
                <h3 className="text-sm font-semibold mb-4" style={{ color: "#ffffff" }}>
                  {section.label}
                </h3>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="inline-flex items-center transition-all duration-300 hover:translate-x-1"
                        style={{ color: "#a1a1aa" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1aa")}
                      >
                        {link.icon && <link.icon className="me-2 size-3" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs" style={{ color: "#71717a" }}>
              Built with passion by the Webfrel team.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-xs transition-colors"
                style={{ color: "#a1a1aa" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1aa")}
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-xs transition-colors"
                style={{ color: "#a1a1aa" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1aa")}
              >
                Terms
              </a>
              <a
                href="#"
                className="text-xs transition-colors"
                style={{ color: "#a1a1aa" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1aa")}
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
