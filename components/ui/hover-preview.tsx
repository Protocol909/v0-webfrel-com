"use client"

import type React from "react"
import { useState, useCallback, useRef, useEffect, memo } from "react"

interface PreviewData {
  image: string
  title: string
  subtitle: string
}

const previewData: Record<string, PreviewData> = {
  growth: {
    image: "/placeholder.svg?height=160&width=280",
    title: "Growth",
    subtitle: "Scale your business to new heights",
  },
  mission: {
    image: "/placeholder.svg?height=160&width=280",
    title: "Our Mission",
    subtitle: "Empowering digital success",
  },
  modern: {
    image: "/placeholder.svg?height=160&width=280",
    title: "Modern Solutions",
    subtitle: "Cutting-edge technology",
  },
}

interface HoverLinkProps {
  previewKey: string
  children: React.ReactNode
  onHoverStart: (key: string, e: React.MouseEvent) => void
  onHoverMove: (e: React.MouseEvent) => void
  onHoverEnd: () => void
}

const HoverLink = memo(function HoverLink({
  previewKey,
  children,
  onHoverStart,
  onHoverMove,
  onHoverEnd,
}: HoverLinkProps) {
  return (
    <span
      className="text-white font-bold cursor-pointer relative inline-block transition-colors hover:text-white/90 group"
      onMouseEnter={(e) => onHoverStart(previewKey, e)}
      onMouseMove={onHoverMove}
      onMouseLeave={onHoverEnd}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white via-white/80 to-white/60 transition-all duration-400 ease-out group-hover:w-full" />
    </span>
  )
})

interface PreviewCardProps {
  data: PreviewData | null
  position: { x: number; y: number }
  isVisible: boolean
  cardRef: React.RefObject<HTMLDivElement | null>
}

const PreviewCard = memo(function PreviewCard({ data, position, isVisible, cardRef }: PreviewCardProps) {
  if (!data) return null

  return (
    <div
      ref={cardRef}
      className={`fixed pointer-events-none z-[1000] transition-all duration-250 will-change-transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2.5 scale-95"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate3d(0, 0, 0)`,
      }}
    >
      <div className="bg-zinc-900 rounded-2xl p-2 shadow-2xl border border-white/10 backdrop-blur-xl">
        <img
          src={data.image || "/placeholder.svg?height=160&width=280&query=abstract digital concept"}
          alt={data.title || ""}
          crossOrigin="anonymous"
          className="w-[280px] h-auto rounded-xl block"
          loading="lazy"
        />
        <div className="px-2 pt-3 pb-2 text-sm text-white font-semibold">{data.title}</div>
        <div className="px-2 pb-2 text-xs text-zinc-400">{data.subtitle}</div>
      </div>
    </div>
  )
})

interface HoverPreviewTextProps {
  className?: string
}

export function HoverPreviewText({ className }: HoverPreviewTextProps) {
  const [activePreview, setActivePreview] = useState<PreviewData | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    Object.entries(previewData).forEach(([, data]) => {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = data.image
    })
  }, [])

  const updatePosition = useCallback((e: React.MouseEvent | MouseEvent) => {
    const cardWidth = 300
    const cardHeight = 250
    const offsetY = 20

    let x = e.clientX - cardWidth / 2
    let y = e.clientY - cardHeight - offsetY

    if (x + cardWidth > window.innerWidth - 20) {
      x = window.innerWidth - cardWidth - 20
    }
    if (x < 20) {
      x = 20
    }

    if (y < 20) {
      y = e.clientY + offsetY
    }

    setPosition({ x, y })
  }, [])

  const handleHoverStart = useCallback(
    (key: string, e: React.MouseEvent) => {
      setActivePreview(previewData[key])
      setIsVisible(true)
      updatePosition(e)
    },
    [updatePosition],
  )

  const handleHoverMove = useCallback(
    (e: React.MouseEvent) => {
      if (isVisible) {
        updatePosition(e)
      }
    },
    [isVisible, updatePosition],
  )

  const handleHoverEnd = useCallback(() => {
    setIsVisible(false)
  }, [])

  return (
    <div className={className}>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
        Webfrel is a full-service digital agency platform designed to help individuals, startups, and businesses build,
        scale, and optimize their online presence. We provide cutting-edge web solutions, branding strategies, and
        performance-driven{" "}
        <HoverLink
          previewKey="growth"
          onHoverStart={handleHoverStart}
          onHoverMove={handleHoverMove}
          onHoverEnd={handleHoverEnd}
        >
          growth
        </HoverLink>{" "}
        — all in one seamless platform. Our{" "}
        <HoverLink
          previewKey="mission"
          onHoverStart={handleHoverStart}
          onHoverMove={handleHoverMove}
          onHoverEnd={handleHoverEnd}
        >
          mission
        </HoverLink>{" "}
        is to empower clients to not just exist online, but to thrive, engage, and grow with scalable,{" "}
        <HoverLink
          previewKey="modern"
          onHoverStart={handleHoverStart}
          onHoverMove={handleHoverMove}
          onHoverEnd={handleHoverEnd}
        >
          modern
        </HoverLink>{" "}
        solutions.
      </p>

      <PreviewCard data={activePreview} position={position} isVisible={isVisible} cardRef={cardRef} />
    </div>
  )
}
