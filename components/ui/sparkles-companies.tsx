"use client"

import { useEffect, useId, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

interface SparklesProps {
  className?: string
  size?: number
  minSize?: number | null
  density?: number
  speed?: number
  minSpeed?: number | null
  opacity?: number
  opacitySpeed?: number
  minOpacity?: number | null
  color?: string
  background?: string
  options?: Record<string, unknown>
}

export function SparklesCompanies({
  className,
  size = 1,
  minSize = null,
  density = 400, // Reduced default density for better performance
  speed = 0.1, // Slowed down default speed
  minSpeed = null,
  opacity = 1,
  opacitySpeed = 0.3, // Slowed down opacity animation
  minOpacity = null,
  color = "#FFFFFF",
  background = "transparent",
  options = {},
}: SparklesProps) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setIsReady(true)
    })
  }, [])

  const id = useId()

  const defaultOptions = {
    background: {
      color: {
        value: background,
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: 30, // Reduced FPS for better mobile performance
    particles: {
      color: {
        value: color,
      },
      move: {
        enable: true,
        direction: "none" as const,
        speed: {
          min: minSpeed || speed / 10,
          max: speed,
        },
        straight: false,
      },
      number: {
        value: density,
      },
      opacity: {
        value: {
          min: minOpacity || opacity / 10,
          max: opacity,
        },
        animation: {
          enable: true,
          sync: false,
          speed: opacitySpeed,
        },
      },
      size: {
        value: {
          min: minSize || size / 2.5,
          max: size,
        },
      },
    },
    detectRetina: true,
  }

  return isReady ? <Particles id={id} options={{ ...defaultOptions, ...options }} className={className} /> : null
}
