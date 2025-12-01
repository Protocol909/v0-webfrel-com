"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollTextEffect } from "@/components/ui/text-effect"

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
}

export default function TimeLine_01({
  title = "Our Work",
  description = "Explore our portfolio of successful digital transformations and creative solutions.",
  entries = [],
  useTextEffect = false,
}: TimeLine_01Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([])

  const setItemRef = (el: HTMLDivElement | null, i: number) => {
    itemRefs.current[i] = el
  }
  const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
    sentinelRefs.current[i] = el
  }

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
    <section className="py-16 sm:py-20 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-muted-foreground">Our Work</span>
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
            <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {title}
            </h1>
          )}
          <p className="mb-6 text-sm sm:text-base text-muted-foreground md:text-lg">{description}</p>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 md:mt-24 max-w-3xl space-y-12 sm:space-y-16 md:space-y-24">
          {entries.map((entry, index) => {
            const isActive = index === activeIndex

            return (
              <div
                key={index}
                className="relative flex flex-col gap-4 md:flex-row md:gap-16"
                ref={(el) => setItemRef(el, index)}
                aria-current={isActive ? "true" : "false"}
              >
                {/* Sticky meta column */}
                <div className="top-8 flex h-min w-full md:w-64 shrink-0 items-center gap-4 md:sticky">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isActive ? "bg-white text-black" : "bg-white/10 text-muted-foreground"
                      }`}
                    >
                      <entry.icon className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">{entry.title}</span>
                      <span className="text-xs text-muted-foreground">{entry.subtitle}</span>
                    </div>
                  </div>
                </div>

                {/* Invisible sentinel */}
                <div
                  ref={(el) => setSentinelRef(el, index)}
                  aria-hidden
                  className="absolute -top-24 left-0 h-12 w-12 opacity-0"
                />

                {/* Content column */}
                <article
                  className={
                    "flex flex-col rounded-2xl border p-3 transition-all duration-300 w-full " +
                    (isActive ? "border-white/20 bg-white/5 shadow-lg" : "border-white/10 bg-black")
                  }
                >
                  {entry.image && (
                    <img
                      src={entry.image || "/placeholder.svg"}
                      alt={`${entry.title} visual`}
                      className="mb-4 w-full h-40 sm:h-48 md:h-72 rounded-lg object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h2
                        className={
                          "text-md font-medium leading-tight tracking-tight md:text-lg transition-colors duration-200 " +
                          (isActive ? "text-white" : "text-white/70")
                        }
                      >
                        {entry.title}
                      </h2>

                      <p
                        className={
                          "text-xs leading-relaxed md:text-sm transition-all duration-300 " +
                          (isActive ? "text-muted-foreground line-clamp-none" : "text-muted-foreground/80 line-clamp-2")
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
                        <div className="space-y-4 pt-2">
                          {entry.items && entry.items.length > 0 && (
                            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                              <ul className="space-y-2">
                                {entry.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
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
                                className="group bg-white text-black hover:bg-white/90 font-normal transition-all duration-200"
                                asChild
                              >
                                <a href={entry.button.url} target="_blank" rel="noreferrer">
                                  {entry.button.text}
                                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
          })}
        </div>
      </div>
    </section>
  )
}
