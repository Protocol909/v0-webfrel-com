"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { BorderBeam } from "@/components/ui/border-beam"
import { ScrollTextEffect } from "@/components/ui/text-effect"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "Webfrel transformed our online presence completely. Their attention to detail and strategic approach delivered results beyond our expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthLabs",
    content:
      "The team at Webfrel is simply outstanding. They took our vision and turned it into a reality that exceeded all our goals.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Innovate Co",
    content:
      "Professional, creative, and results-driven. Webfrel is the partner every business needs for digital success.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-20 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4 sm:mb-6">
            <AnimatedShinyText className="text-xs sm:text-sm text-muted-foreground" shimmerWidth={80}>
              Testimonials
            </AnimatedShinyText>
          </div>
          <ScrollTextEffect
            preset="blur"
            per="word"
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance text-white"
          >
            What Our Clients Say
          </ScrollTextEffect>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-balance">
            Don't just take our word for it — hear from businesses we've helped transform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-8 border border-white/10 rounded-lg bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && <BorderBeam lightColor="#FAFAFA" lightWidth={250} duration={6} />}
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
