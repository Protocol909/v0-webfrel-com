import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center p-12 md:p-16 border border-white/20 rounded-2xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Let's build something extraordinary together. Start your journey to digital excellence today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 group">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 bg-transparent">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
