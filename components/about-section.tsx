import { TrendingUp } from "lucide-react"
import { MagicText } from "@/components/ui/magic-text"

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Our Mission</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance text-white">
            Unlock the full potential of your digital identity
          </h2>

          <div className="mb-6 text-white/80">
            <MagicText text="Webfrel is a full-service digital agency platform designed to help individuals, startups, and businesses build, scale, and optimize their online presence." />
          </div>

          <div className="mb-6 text-white/80">
            <MagicText text="We provide cutting-edge web solutions, branding strategies, and performance-driven growth — all in one seamless platform. Our mission is to empower clients to not just exist online, but to thrive, engage, and grow with scalable, modern solutions." />
          </div>

          <div className="mt-12 p-8 border border-white/10 rounded-lg bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Why Choose Webfrel?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We combine modern technology, design thinking, and data-driven insights to deliver maximum impact for
                  our clients. From ideation to execution and beyond, we're your strategic partner in digital success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
