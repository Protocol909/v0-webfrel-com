"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useMotionValue, animate, motion } from "framer-motion"
import { useState, useEffect } from "react"
import useMeasure from "react-use-measure"

type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  duration?: number
  durationOnHover?: number
  direction?: "horizontal" | "vertical"
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 40, // Changed from speed to duration for slower animation
  durationOnHover = 80, // Slower on hover
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration)
  const [ref, { width, height }] = useMeasure()
  const translation = useMotionValue(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [key, setKey] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let controls: ReturnType<typeof animate> | undefined
    const size = direction === "horizontal" ? width : height
    if (size === 0) return

    const contentSize = size + gap
    const from = reverse ? -contentSize / 2 : 0
    const to = reverse ? 0 : -contentSize / 2

    if (isTransitioning) {
      const currentPos = translation.get()
      const remainingDistance = Math.abs(currentPos - to)
      const totalDistance = Math.abs(to - from)
      const remainingDuration = (remainingDistance / totalDistance) * currentDuration

      controls = animate(translation, [currentPos, to], {
        ease: "linear",
        duration: remainingDuration,
        onComplete: () => {
          setIsTransitioning(false)
          setKey((prevKey) => prevKey + 1)
        },
      })
    } else {
      translation.set(from)
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: currentDuration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        repeatDelay: 0,
      })
    }

    return () => controls?.stop()
  }, [key, translation, currentDuration, width, height, gap, isTransitioning, direction, reverse])

  const handleMouseEnter = () => {
    setIsHovering(true)
    setIsTransitioning(true)
    setCurrentDuration(durationOnHover)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setIsTransitioning(true)
    setCurrentDuration(duration)
  }

  return (
    <div className={cn("overflow-hidden", className)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal" ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
