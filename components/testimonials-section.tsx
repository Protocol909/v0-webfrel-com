import { Star } from "lucide-react"

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
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-muted-foreground">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Don't just take our word for it — hear from businesses we've helped transform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 border border-white/10 rounded-lg bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="pt-4 border-t border-white/10">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
