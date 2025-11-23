"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-white">WEB</span>
            <span className="text-muted-foreground">FREL</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Process
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-white text-black hover:bg-white/90">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-sm text-muted-foreground hover:text-white transition-colors">
                About
              </a>
              <a href="#services" className="text-sm text-muted-foreground hover:text-white transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-sm text-muted-foreground hover:text-white transition-colors">
                Portfolio
              </a>
              <a href="#process" className="text-sm text-muted-foreground hover:text-white transition-colors">
                Process
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-white transition-colors">
                Contact
              </a>
              <Button className="bg-white text-black hover:bg-white/90 w-full">Get Started</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
