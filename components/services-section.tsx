"use client"

import type React from "react"
import { GitMerge, Container, CodeXml, Database, Bot, PenTool } from "lucide-react"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

const VSCodiumLogo = () => <CodeXml className="size-9 text-white" />
const GitLogo = () => <GitMerge className="size-9 text-white" />
const DockerLogo = () => <Container className="size-9 text-white" />
const PostgresLogo = () => <Database className="size-9 text-white" />
const OllamaLogo = () => <Bot className="size-9 text-white" />
const PenpotLogo = () => <PenTool className="size-9 text-white" />

const Integration = ({ icon, name, description }: { icon: React.ReactNode; name: string; description: string }) => {
  return (
    <div className="hover:bg-white/5 space-y-4 rounded-lg border border-white/10 p-4 transition-colors bg-black/50">
      <div className="flex size-fit items-center justify-center">{icon}</div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-white">{name}</h3>
        <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
      </div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-black">
      <div className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="mx-auto flex flex-col px-4 sm:px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
          <div className="order-last mt-12 flex flex-col gap-8 sm:gap-12 md:order-first md:mt-0">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <AnimatedShinyText className="text-xs sm:text-sm text-muted-foreground" shimmerWidth={80}>
                  What We Do
                </AnimatedShinyText>
              </div>
              <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
                Integrate with your favorite tools
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Connect seamlessly with popular open-source platforms and services to enhance your workflow.
              </p>
            </div>
          </div>

          <div className="-mx-4 px-4 sm:-mx-6 sm:px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] md:mx-0 md:ml-auto md:mr-0 md:max-w-md">
            <div className="bg-black/50 rounded-2xl border border-white/10 p-3 shadow-lg md:pb-12">
              <div className="grid grid-cols-2 gap-2">
                <Integration icon={<OllamaLogo />} name="Ollama" description="Run large language models locally." />
                <Integration
                  icon={<DockerLogo />}
                  name="Docker"
                  description="An open platform for developing and running applications."
                />
                <Integration
                  icon={<PostgresLogo />}
                  name="PostgreSQL"
                  description="A powerful, open source object-relational database."
                />
                <Integration
                  icon={<PenpotLogo />}
                  name="Penpot"
                  description="The open-source design and prototyping platform."
                />
                <Integration
                  icon={<VSCodiumLogo />}
                  name="VSCodium"
                  description="A community-driven, freely-licensed binary distribution."
                />
                <Integration
                  icon={<GitLogo />}
                  name="Git"
                  description="A free and open source version control system."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
