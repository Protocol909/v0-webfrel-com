"use client"

import type React from "react"

import { motion, useMotionValue, animate } from "framer-motion"
import useMeasure from "react-use-measure"
import { useState, useEffect } from "react"
import { GitMerge, Container, CodeXml, Database, Bot, PenTool, Shapes } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const VscodeLogo = () => <CodeXml className="size-full" />
const GitLogo = () => <GitMerge className="size-full" />
const DockerLogo = () => <Container className="size-full" />
const PostgresLogo = () => <Database className="size-full" />
const NpmLogo = () => <Bot className="size-full" />
const PenpotLogo = () => <PenTool className="size-full" />
const MainLogoIcon = () => <Shapes className="size-full" />

// Infinite Slider for the integration cards
type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  direction?: "horizontal" | "vertical"
  reverse?: boolean
  className?: string
}

function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed)
  const [ref, { width, height }] = useMeasure()
  const translation = useMotionValue(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    let controls: ReturnType<typeof animate> | undefined
    const size = direction === "horizontal" ? width : height
    if (size === 0) return

    const contentSize = size + gap
    const from = reverse ? -contentSize / 2 : 0
    const to = reverse ? 0 : -contentSize / 2

    const distanceToTravel = Math.abs(to - from)
    const duration = distanceToTravel / currentSpeed

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to)
      const transitionDuration = remainingDistance / currentSpeed

      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false)
          setKey((prevKey) => prevKey + 1)
        },
      })
    } else {
      translation.set(from)
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        repeatDelay: 0,
      })
    }

    return () => controls?.stop()
  }, [key, translation, currentSpeed, width, height, gap, isTransitioning, direction, reverse])

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true)
          setCurrentSpeed(speedOnHover)
        },
        onHoverEnd: () => {
          setIsTransitioning(true)
          setCurrentSpeed(speed)
        },
      }
    : {}

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal" ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

const IntegrationCard = ({
  children,
  className,
  isCenter = false,
}: {
  children: React.ReactNode
  className?: string
  isCenter?: boolean
}) => {
  return (
    <div
      className={cn(
        "bg-black relative z-20 flex size-12 items-center justify-center rounded-full border border-white/20",
        className,
      )}
    >
      <div className={cn("m-auto size-fit text-muted-foreground *:size-5", isCenter && "*:size-8")}>{children}</div>
    </div>
  )
}

export function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="bg-black/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md">
          <div
            role="presentation"
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"
          />

          {/* Slider Row 1 */}
          <div>
            <InfiniteSlider gap={24} speed={20} speedOnHover={10}>
              <IntegrationCard>
                <VscodeLogo />
              </IntegrationCard>
              <IntegrationCard>
                <GitLogo />
              </IntegrationCard>
              <IntegrationCard>
                <DockerLogo />
              </IntegrationCard>
              <IntegrationCard>
                <PostgresLogo />
              </IntegrationCard>
              <IntegrationCard>
                <NpmLogo />
              </IntegrationCard>
              <IntegrationCard>
                <PenpotLogo />
              </IntegrationCard>
            </InfiniteSlider>
          </div>

          {/* Slider Row 2 */}
          <div>
            <InfiniteSlider gap={24} speed={20} speedOnHover={10} reverse>
              <IntegrationCard>
                <PostgresLogo />
              </IntegrationCard>
              <IntegrationCard>
                <DockerLogo />
              </IntegrationCard>
              <IntegrationCard>
                <PenpotLogo />
              </IntegrationCard>
              <IntegrationCard>
                <VscodeLogo />
              </IntegrationCard>
              <IntegrationCard>
                <NpmLogo />
              </IntegrationCard>
              <IntegrationCard>
                <GitLogo />
              </IntegrationCard>
            </InfiniteSlider>
          </div>

          {/* Slider Row 3 */}
          <div>
            <InfiniteSlider gap={24} speed={20} speedOnHover={10}>
              <IntegrationCard>
                <NpmLogo />
              </IntegrationCard>
              <IntegrationCard>
                <PenpotLogo />
              </IntegrationCard>
              <IntegrationCard>
                <GitLogo />
              </IntegrationCard>
              <IntegrationCard>
                <DockerLogo />
              </IntegrationCard>
              <IntegrationCard>
                <VscodeLogo />
              </IntegrationCard>
              <IntegrationCard>
                <PostgresLogo />
              </IntegrationCard>
            </InfiniteSlider>
          </div>

          {/* Center Logo */}
          <div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
            <IntegrationCard
              className="shadow-black-950/10 size-16 bg-white/10 shadow-xl backdrop-blur-md border-white/20"
              isCenter={true}
            >
              <MainLogoIcon />
            </IntegrationCard>
          </div>
        </div>

        {/* Text Content */}
        <div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl text-white">AI Tools Integration</h2>
          <p className="text-muted-foreground">
            Connect seamlessly with popular AI platforms and services to enhance your workflow and productivity.
          </p>

          
        </div>
      </div>
    </section>
  )
}
