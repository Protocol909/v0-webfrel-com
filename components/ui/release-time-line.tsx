"use client"

import type React from "react"
import { useEffect, useRef, useState, memo, useCallback } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollTextEffect } from "@/components/ui/text-effect"
import { motion, useScroll, useTransform } from "framer-motion"

export type TimeLine_01Entry = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
  description: string
  items?: string[]
  image?: string
  button?: {
    url: string
    text: string
  }
}

export interface TimeLine_01Props {
  title?: string
  description?: string
  entries?: TimeLine_01Entry[]
  className?: string
  useTextEffect?: boolean
  hideHeader?: boolean
}

const TimelineItem = memo(function TimelineItem({
  entry,
  index,
  isActive,
  setItemRef,
  setSentinelRef,
}: {
  entry: TimeLine_01Entry
  index: number
  isActive: boolean
  setItemRef: (el: HTMLDivElement | null, i: number) => void
  setSentinelRef: (el: HTMLDivElement | null, i: number) => void
}) {
  const Icon = entry.icon

  return (
    <div
      key={index}
      className="relative flex flex-col gap-4 md:flex-row md:gap-12 lg:gap-16 pl-0 sm:pl-12 md:pl-16"
      ref={(el) => setItemRef(el, index)}
      aria-current={isActive ? "true" : "false"}
    >
      {/* Timeline icon */}
      <div className="absolute left-0 sm:left-[0.35rem] md:left-[0.85rem] top-0 hidden sm:flex items-center justify-center z-10">
        <div
          className={`h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isActive ? "bg-white" : "bg-black border border-white/20"
          }`}
        >
          <Icon className={`h-3 w-3 md:h-4 md:w-4 transition-colors ${isActive ? "text-black" : "text-white/50"}`} />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex top-8 h-min w-48 lg:w-64 shrink-0 items-center gap-4 sticky">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">{entry.title}</span>
            <span className="text-xs text-white/60">{entry.subtitle}</span>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="flex md:hidden items-center gap-3 mb-2">
        <div
          className={`p-2 rounded-lg transition-colors ${
            isActive ? "bg-white text-black" : "bg-white/10 text-white/60"
          }`}
        >
          <Icon className="h-4 w-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-white">{entry.title}</span>
          <span className="text-xs text-white/60">{entry.subtitle}</span>
        </div>
      </div>

      {/* Sentinel for scroll detection */}
      <div
        ref={(el) => setSentinelRef(el, index)}
        aria-hidden
        className="absolute -top-24 left-0 h-12 w-12 opacity-0"
      />

      {/* Project card */}
      <article
        className={
          "flex flex-col rounded-xl sm:rounded-2xl border p-3 sm:p-4 transition-all duration-300 w-full " +
          (isActive ? "border-white/20 bg-white/5 shadow-lg" : "border-white/10 bg-black/50")
        }
      >
        {entry.image && (
          <img
            src={entry.image || "/placeholder.svg"}
            alt={`${entry.title} visual`}
            className="mb-3 sm:mb-4 w-full h-32 sm:h-40 md:h-48 lg:h-72 rounded-lg object-cover"
            loading="lazy"
          />
        )}
        <div className="space-y-3 sm:space-y-4">
          <div className="space-y-2">
            <h3
              className={
                "text-base sm:text-lg md:text-xl font-medium leading-tight tracking-tight transition-colors duration-200 " +
                (isActive ? "text-white" : "text-white/70")
              }
            >
              {entry.title}
            </h3>

            <p
              className={
                "text-xs sm:text-sm leading-relaxed transition-all duration-300 " +
                (isActive ? "text-white/70 line-clamp-none" : "text-white/50 line-clamp-2")
              }
            >
              {entry.description}
            </p>
          </div>

          <div
            aria-hidden={!isActive}
            className={
              "grid transition-all duration-500 ease-out " +
              (isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
            }
          >
            <div className="overflow-hidden">
              <div className="space-y-3 sm:space-y-4 pt-2">
                {entry.items && entry.items.length > 0 && (
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3 sm:p-4">
                    <ul className="space-y-1.5 sm:space-y-2">
                      {entry.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/60 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {entry.button && (
                  <div className="flex justify-end">
                    <Button
                      variant="default"
                      size="sm"
                      className="group bg-white text-black hover:bg-white/90 font-normal transition-all duration-200 text-xs sm:text-sm"
                      asChild
                    >
                      <a href={entry.button.url} target="_blank" rel="noreferrer">
                        {entry.button.text}
                        <ArrowUpRight className="ml-1 sm:ml-1.5 h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
})

export default function TimeLine_01({
  title = "Our Work",
  description = "Explore our portfolio of successful digital transformations and creative solutions.",
  entries = [],
  useTextEffect = false,
  hideHeader = false,
}: TimeLine_01Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [timelineHeight, setTimelineHeight] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([])

  const setItemRef = useCallback((el: HTMLDivElement | null, i: number) => {
    itemRefs.current[i] = el
  }, [])

  const setSentinelRef = useCallback((el: HTMLDivElement | null, i: number) => {
    sentinelRefs.current[i] = el
  }, [])

  useEffect(() => {
    if (timelineRef.current) {
      setTimelineHeight(timelineRef.current.getBoundingClientRect().height)
    }
  }, [entries])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  })

  const progressHeight = useTransform(scrollYProgress, [0, 0.9], [0, timelineHeight])
  const progressOpacity = useTransform(scrollYProgress, [0, 0.05, 0.85, 1], [0, 1, 1, 0])

  useEffect(() => {
    if (!sentinelRefs.current.length) return

    let frame = 0
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity)
      const centerY = window.innerHeight / 3
      let bestIndex = 0
      let bestDist = Number.POSITIVE_INFINITY
      sentinelRefs.current.forEach((node, i) => {
        if (!node) return
        const rect = node.getBoundingClientRect()
        const mid = rect.top + rect.height / 2
        const dist = Math.abs(mid - centerY)
        if (dist < bestDist) {
          bestDist = dist
          bestIndex = i
        }
      })
      if (bestIndex !== activeIndex) setActiveIndex(bestIndex)
    }

    frame = requestAnimationFrame(updateActiveByProximity)
    return () => cancelAnimationFrame(frame)
  }, [activeIndex])

  useEffect(() => {
    setActiveIndex(0)
  }, [])

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-transparent" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {!hideHeader && (
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm text-white/60">Our Work</span>
            </div>
            {useTextEffect ? (
              <ScrollTextEffect
                preset="blur"
                per="word"
                as="h2"
                className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white"
              >
                {title}
              </ScrollTextEffect>
            ) : (
              <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                {title}
              </h2>
            )}
            <p className="mb-6 text-sm sm:text-base text-white/60 md:text-lg max-w-2xl mx-auto">{description}</p>
          </div>
        )}

        {hideHeader && (
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12 md:mb-16">
            {useTextEffect ? (
              <ScrollTextEffect
                preset="blur"
                per="word"
                as="h2"
                className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white"
              >
                {title}
              </ScrollTextEffect>
            ) : (
              <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                {title}
              </h2>
            )}
            <p className="mb-6 text-sm sm:text-base text-white/60 md:text-lg max-w-2xl mx-auto">{description}</p>
          </div>
        )}

        <div className="mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-24 max-w-3xl relative" ref={timelineRef}>
          <div
            style={{ height: timelineHeight + "px" }}
            className="absolute left-4 sm:left-[1.35rem] md:left-[1.85rem] top-0 w-[2px] bg-gradient-to-b from-white/20 via-white/20 to-transparent hidden sm:block"
          >
            <motion.div
              style={{ height: progressHeight, opacity: progressOpacity }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-white via-white/80 to-white/40 rounded-full will-change-transform"
            />
          </div>

          <div className="space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-24">
            {entries.map((entry, index) => (
              <TimelineItem
                key={index}
                entry={entry}
                index={index}
                isActive={index === activeIndex}
                setItemRef={setItemRef}
                setSentinelRef={setSentinelRef}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
