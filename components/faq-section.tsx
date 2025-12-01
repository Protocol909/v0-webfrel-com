"use client"
import { Accordion05 } from "@/components/ui/accordion-05"

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-muted-foreground">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-white">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Find answers to common questions about our services and process.
          </p>
        </div>
        <Accordion05 />
      </div>
    </section>
  )
}
