"use client"

import type React from "react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a href={href} className="group relative inline-block overflow-hidden h-5 flex items-center text-sm">
      <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
        <span className="text-gray-300">{children}</span>
        <span className="text-white">{children}</span>
      </div>
    </a>
  )
}

export function MiniNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full")
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current)
    }

    if (isOpen) {
      setHeaderShapeClass("rounded-xl")
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass("rounded-full")
      }, 300)
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current)
      }
    }
  }, [isOpen])

  const logoElement = (
    <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
      <Image
        src="/placeholder.svg?height=32&width=32"
        alt="Webfrel Logo"
        width={32}
        height={32}
        className="object-contain"
      />
    </div>
  )

  const navLinksData = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
  ]

  const loginButtonElement = (
    <button className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200 w-full md:w-auto">
      Contact
    </button>
  )

  const signupButtonElement = (
    <div className="relative group w-full md:w-auto">
      <div className="absolute inset-0 -m-2 rounded-full hidden md:block bg-gray-100 opacity-40 filter blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"></div>
      <button className="relative z-10 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-gray-200 hover:to-gray-400 transition-all duration-200 w-full md:w-auto">
        Meeting
      </button>
    </div>
  )

  return (
    <header
      className={cn(
        "fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center px-4 md:px-6 py-2 md:py-3 backdrop-blur-md border border-[#333] bg-[#1f1f1f80] w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-auto transition-[border-radius] duration-0 ease-in-out",
        headerShapeClass,
      )}
    >
      <div className="flex items-center justify-between w-full gap-x-4 md:gap-x-6 lg:gap-x-8">
        <div className="flex items-center">{logoElement}</div>

        <nav className="hidden md:flex items-center space-x-3 md:space-x-4 lg:space-x-6 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 md:gap-3">
          {loginButtonElement}
          {signupButtonElement}
        </div>

        <button
          className="md:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden",
          isOpen ? "max-h-[1000px] opacity-100 pt-4" : "max-h-0 opacity-0 pt-0 pointer-events-none",
        )}
      >
        <nav className="flex flex-col items-center space-y-4 text-base w-full">
          {navLinksData.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center space-y-4 mt-4 w-full">
          {loginButtonElement}
          {signupButtonElement}
        </div>
      </div>
    </header>
  )
}
