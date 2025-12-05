"use client"
import type React from "react"
import { memo } from "react"
import { InstagramIcon, LinkedinIcon, YoutubeIcon, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  external?: boolean
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Services",
    links: [
      { title: "Web Design", href: "#services" },
      { title: "Development", href: "#services" },
      { title: "Branding", href: "#services" },
      { title: "SEO & Marketing", href: "#services" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About Us", href: "#about" },
      { title: "Process", href: "#process" },
      { title: "Contact", href: "https://wa.link/w01uso", external: true },
      { title: "Book Meeting", href: "https://cal.com/webfrel/secret", external: true },
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

const FooterLinkItem = memo(function FooterLinkItem({ link }: { link: FooterLink }) {
  const linkProps = link.external ? { target: "_blank", rel: "noopener noreferrer" } : {}

  return (
    <li>
      <Link
        href={link.href}
        className="inline-flex items-center transition-all duration-300 hover:translate-x-1 text-[#a1a1aa] hover:text-white"
        {...linkProps}
      >
        {link.icon && <link.icon className="me-2 size-3" />}
        {link.title}
      </Link>
    </li>
  )
})

export function FooterNew() {
  return (
    <footer id="contact" className="relative w-full border-t border-white/10" style={{ backgroundColor: "#09090b" }}>
      {/* Gradient line at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-[1px]"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)" }}
        aria-hidden="true"
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
              <span className="text-xl font-bold text-white">Webfrel</span>
            </div>
            <p className="mt-6 text-sm max-w-xs text-[#a1a1aa]">
              Empowering businesses with cutting-edge digital solutions. Build, scale, and elevate your online presence
              with Webfrel.
            </p>
            <p className="text-xs mt-8 text-[#a1a1aa]">© {new Date().getFullYear()} Webfrel. All rights reserved.</p>
          </div>

          {/* Links Grid */}
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
            {footerLinks.map((section) => (
              <div key={section.label} className="mb-10 md:mb-0">
                <h3 className="text-sm font-semibold mb-4 text-white">{section.label}</h3>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link) => (
                    <FooterLinkItem key={link.title} link={link} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#a1a1aa]">Built with passion by the Webfrel team.</p>
            <div className="flex gap-4">
              <a href="#" className="text-xs text-[#a1a1aa] hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-xs text-[#a1a1aa] hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-xs text-[#a1a1aa] hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
