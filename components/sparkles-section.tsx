"use client"

import { SparklesCore } from "@/components/ui/sparkles"

export function SparklesSection() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>
      <h1 className="md:text-7xl text-5xl lg:text-9xl font-bold text-center text-white relative z-20">WEBFREL</h1>
      <p className="text-white/50 text-xl mt-4 relative z-20">Build. Scale. Elevate.</p>
    </div>
  )
}
