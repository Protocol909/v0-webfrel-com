"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Camera, Plug, Braces, ImageIcon, SearchIcon } from "lucide-react"
import { motion } from "framer-motion"
import PixelTransition from "@/components/ui/pixel-transition"
import { ScrollTextEffect } from "@/components/ui/text-effect"

const items = [
  {
    title: "Digital Strategy",
    icon: Brain,
    desc: "Develop comprehensive digital roadmaps that align with your business goals and drive sustainable growth.",
    hasPixelTransition: true,
  },
  {
    title: "Content Planning",
    icon: Camera,
    desc: "Create compelling content strategies that engage your audience and build lasting brand connections.",
    hasPixelTransition: true,
  },
  {
    title: "Tool Integrations",
    icon: Plug,
    desc: "Seamlessly integrate third-party tools and services to enhance your workflow and productivity.",
  },
  {
    title: "Structured Outputs",
    icon: Braces,
    desc: "Deliver clean, organized, and predictable deliverables that meet your exact specifications.",
  },
  {
    title: "Visual Design",
    icon: ImageIcon,
    desc: "Bring your ideas to life with stunning visuals that capture attention and communicate your message.",
  },
  {
    title: "SEO & Analytics",
    icon: SearchIcon,
    badge: "new",
    desc: "Tap into real-time data and insights to optimize your online presence and maximize visibility.",
  },
]

export default function DarkGrid() {
  return (
    <div className="w-full bg-black text-zinc-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <ScrollTextEffect
          preset="blur"
          per="word"
          as="h2"
          className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white"
        >
          What We Do
        </ScrollTextEffect>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, icon: Icon, desc, badge, hasPixelTransition }) => (
            <Card
              key={title}
              className="group relative overflow-visible border-zinc-800 bg-gradient-to-b from-zinc-950/60 to-zinc-950/30 p-0 transition-colors duration-300 hover:border-zinc-700"
            >
              {/* Subtle gradient on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
              </div>

              {/* Faint inner glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-white/0 to-white/0 group-hover:from-white/[0.03] group-hover:to-white/[0.06] transition-colors" />

              {/* White corner squares on hover */}
              <div className="pointer-events-none absolute inset-0 hidden group-hover:block">
                <div className="absolute -left-2 -top-2 h-3 w-3 bg-white" />
                <div className="absolute -right-2 -top-2 h-3 w-3 bg-white" />
                <div className="absolute -left-2 -bottom-2 h-3 w-3 bg-white" />
                <div className="absolute -right-2 -bottom-2 h-3 w-3 bg-white" />
              </div>

              <CardHeader className="relative z-10 flex flex-row items-start gap-3 p-4 sm:p-6">
                {hasPixelTransition ? (
                  <PixelTransition
                    firstContent={
                      <div className="flex h-full w-full items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/70">
                        <Icon className="h-5 w-5 text-zinc-200" />
                      </div>
                    }
                    secondContent={
                      <div className="flex h-full w-full items-center justify-center rounded-xl border border-white bg-white">
                        <Icon className="h-5 w-5 text-black" />
                      </div>
                    }
                    gridSize={5}
                    pixelColor="#ffffff"
                    animationStepDuration={0.2}
                    className="h-10 w-10 flex-shrink-0"
                    aspectRatio="100%"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/70 text-zinc-200">
                    <Icon className="h-5 w-5 text-zinc-200" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-base sm:text-lg font-medium text-zinc-100">{title}</CardTitle>
                    {badge && (
                      <span className="rounded-full border border-zinc-600 px-2 py-0.5 text-[10px] leading-none text-zinc-300 lowercase">
                        {badge}
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 px-4 sm:px-6 pb-4 sm:pb-6 text-sm text-zinc-400">
                {desc}
              </CardContent>

              <motion.div
                className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-white/0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
