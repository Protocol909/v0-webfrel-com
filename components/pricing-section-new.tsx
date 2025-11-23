"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CheckCheck } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects getting started.",
    price: 499,
    yearlyPrice: 4999,
    features: [
      "Website Design & Development",
      "Basic SEO Optimization",
      "Responsive Design",
      "3 Revisions Included",
      "1 Month Support",
    ],
  },
  {
    name: "Professional",
    description: "Best for growing businesses that need advanced features.",
    price: 1499,
    yearlyPrice: 14999,
    popular: true,
    features: [
      "Everything in Starter",
      "Custom Web Application",
      "Advanced SEO & Analytics",
      "E-commerce Integration",
      "Unlimited Revisions",
      "6 Months Support",
    ],
  },
  {
    name: "Enterprise",
    description: "Advanced solutions for large-scale businesses and agencies.",
    price: 2999,
    yearlyPrice: 29999,
    features: [
      "Everything in Professional",
      "Full-Stack Development",
      "AI Integration & Automation",
      "Custom CMS & Dashboard",
      "Priority Support",
      "12 Months Support",
    ],
  },
]

const PricingSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void
  className?: string
}) => {
  const [selected, setSelected] = useState("0")

  const handleSwitch = (value: string) => {
    setSelected(value)
    onSwitch(value)
  }

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-xl bg-white/5 border border-white/10 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-12 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
            selected === "0" ? "text-black" : "text-white/70 hover:text-white",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId="switch"
              className="absolute top-0 left-0 h-12 w-full rounded-xl bg-white"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-12 flex-shrink-0 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
            selected === "1" ? "text-black" : "text-white/70 hover:text-white",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId="switch"
              className="absolute top-0 left-0 h-12 w-full rounded-xl bg-white"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium">Save 20%</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default function PricingSection5() {
  const [isYearly, setIsYearly] = useState(false)

  const togglePricingPeriod = (value: string) => setIsYearly(Number.parseInt(value) === 1)

  return (
    <div className="px-4 py-20 min-h-screen max-w-7xl mx-auto bg-black">
      <article className="text-center mb-12 space-y-4 max-w-2xl mx-auto">
        <h2 className="md:text-6xl text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
        <p className="md:text-base text-sm text-white/70">
          Flexible pricing options for every stage of your digital journey
        </p>
        <PricingSwitch onSwitch={togglePricingPeriod} className="w-fit mx-auto mt-8" />
      </article>

      <div className="grid md:grid-cols-3 gap-6 py-6">
        {plans.map((plan, index) => (
          <Card
            key={plan.name}
            className={cn(
              "relative border bg-black/50 backdrop-blur-sm",
              plan.popular ? "ring-2 ring-white border-white" : "border-white/10",
            )}
          >
            <CardHeader className="text-left">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                {plan.popular && (
                  <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">Popular</span>
                )}
              </div>
              <p className="text-sm text-white/60 mb-4">{plan.description}</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-semibold text-white">${isYearly ? plan.yearlyPrice : plan.price}</span>
                <span className="text-white/60 ml-2">/{isYearly ? "year" : "month"}</span>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <button
                className={cn(
                  "w-full mb-6 p-4 text-base rounded-xl font-medium transition-colors",
                  plan.popular
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20",
                )}
              >
                Get Started
              </button>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white uppercase mb-3">Features</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCheck className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
