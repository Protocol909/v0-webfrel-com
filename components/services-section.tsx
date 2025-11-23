import { Code2, Palette, TrendingUp, Sparkles, Target, Workflow } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Website Design & Development",
    description: "Custom, responsive websites with clean modern themes built for performance and scalability.",
  },
  {
    icon: Palette,
    title: "Branding & Visual Identity",
    description:
      "Logo design, color palettes, style guides, and visual content creation for consistent brand presence.",
  },
  {
    icon: TrendingUp,
    title: "Marketing & SEO Optimization",
    description: "SEO guidance, analytics dashboards, and conversion optimization strategies to drive growth.",
  },
  {
    icon: Sparkles,
    title: "AI Tools & Automation",
    description: "AI-powered suggestions for design, workflow optimization, and intelligent content generation.",
  },
  {
    icon: Target,
    title: "Growth Strategy & Consulting",
    description: "Data-driven strategies to scale your digital presence and maximize ROI across all channels.",
  },
  {
    icon: Workflow,
    title: "Project Management",
    description: "End-to-end project oversight with dedicated support to ensure timely delivery and quality.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 mesh-bg-dense opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-muted-foreground">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Comprehensive Digital Solutions</h2>
          <p className="text-lg text-muted-foreground text-balance">
            From design to deployment, we cover every aspect of your digital journey with expertise and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 border border-white/10 rounded-lg bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                <service.icon className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
