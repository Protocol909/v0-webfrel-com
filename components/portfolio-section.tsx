"use client"
import Image from "next/image"
import { EvervaultCard, Icon } from "@/components/ui/evervault-card"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Mobile App Design",
    category: "App Design",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 relative bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-muted-foreground">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-white">Featured Projects</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Explore our portfolio of successful digital transformations and creative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-white/[0.2] flex flex-col items-start w-full mx-auto relative h-[25rem] md:h-[30rem]"
            >
              <div className="absolute inset-0 bg-black/50 z-0">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover opacity-30"
                />
              </div>

              <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white z-10" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white z-10" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white z-10" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white z-10" />

              <EvervaultCard className="z-10" text={project.title} />

              <div className="absolute bottom-4 left-4 z-20">
                <h2 className="text-white mt-4 text-sm font-light">{project.category}</h2>
                <p className="text-sm border font-light border-white/[0.2] rounded-full mt-2 text-white px-2 py-0.5 w-fit">
                  View Project
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
