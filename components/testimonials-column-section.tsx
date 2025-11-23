"use client"

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1"
import { motion } from "framer-motion"

const testimonials = [
  {
    text: "Webfrel completely transformed our digital presence. Their attention to detail and design aesthetic is unmatched in the industry.",
    image: "/placeholder.svg?height=100&width=100",
    name: "Alex Morgan",
    role: "CEO, TechStart",
  },
  {
    text: "The team delivered beyond our expectations. Our conversion rates have doubled since launching the new site.",
    image: "/placeholder.svg?height=100&width=100",
    name: "Sarah Chen",
    role: "Marketing Director",
  },
  {
    text: "Professional, creative, and technically proficient. Webfrel is the partner you need for scaling your business.",
    image: "/placeholder.svg?height=100&width=100",
    name: "Marcus Johnson",
    role: "Founder, ScaleUp",
  },
  {
    text: "Their seamless integration of AI tools has streamlined our operations significantly.",
    image: "/placeholder.svg?height=100&width=100",
    name: "Jessica Wu",
    role: "CTO, FutureTech",
  },
  {
    text: "The best agency we've worked with. They truly understand modern web standards and user experience.",
    image: "/placeholder.svg?height=100&width=100",
    name: "David Miller",
    role: "Product Manager",
  },
  {
    text: "Incredible support and maintenance. They're always there when we need them.",
    image: "/placeholder.svg?height=100&width=100",
    name: "Emily Davis",
    role: "Operations Lead",
  },
  {
    text: "The branding strategy they developed has given us a completely new identity in the market.",
    image: "/placeholder.svg?height=100&width=100",
    name: "James Wilson",
    role: "Brand Manager",
  },
  {
    text: "Fast, efficient, and reliable. Webfrel delivers quality results every time.",
    image: "/placeholder.svg?height=100&width=100",
    name: "Sophie Taylor",
    role: "Project Lead",
  },
  {
    text: "Their innovative approach to web design set us apart from our competitors.",
    image: "/placeholder.svg?height=100&width=100",
    name: "Ryan Cooper",
    role: "Director",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export function TestimonialsColumnSection() {
  return (
    <section className="bg-black py-24 relative overflow-hidden" id="testimonials">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
        >
          <div className="flex justify-center">
            <div className="border border-white/20 py-1 px-4 rounded-full text-xs font-medium text-white/80 backdrop-blur-sm">
              Testimonials
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mt-5 text-center text-white">
            What our clients say
          </h2>
          <p className="text-center mt-5 text-muted-foreground">Trusted by innovative companies worldwide.</p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>
    </section>
  )
}
