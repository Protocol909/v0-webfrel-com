import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { NoiseGradientBackground } from "@/components/ui/noise-gradient-background"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Webfrel - Build. Scale. Elevate. | Full-Service Digital Agency",
  description:
    "Webfrel is a full-service digital agency platform empowering startups, entrepreneurs, and businesses to build, scale, and elevate their online presence with cutting-edge web solutions, branding, and growth strategies.",
  keywords: [
    "digital agency",
    "web development",
    "branding",
    "SEO",
    "website design",
    "startup solutions",
    "digital marketing",
    "AI tools",
    "web solutions",
    "Webfrel",
  ],
  authors: [{ name: "Webfrel" }],
  creator: "Webfrel",
  publisher: "Webfrel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webfrel.com",
    siteName: "Webfrel",
    title: "Webfrel - Build. Scale. Elevate.",
    description:
      "Full-service digital agency platform empowering startups and businesses to build, scale, and elevate their online presence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Webfrel - Build. Scale. Elevate.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webfrel - Build. Scale. Elevate.",
    description:
      "Full-service digital agency platform empowering startups and businesses to build, scale, and elevate their online presence.",
    images: ["/og-image.png"],
    creator: "@webfrel",
  },
  icons: {
    icon: "/empty.jpg",
    shortcut: "/empty.jpg",
    apple: "/empty.jpg",
  },
  alternates: {
    canonical: "https://webfrel.com",
  },
  metadataBase: new URL("https://webfrel.com"),
  manifest: "/manifest.json",
  category: "technology",
  classification: "Digital Agency",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Additional SEO tags */}
        <link rel="canonical" href="https://webfrel.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Webfrel" />
        <meta name="application-name" content="Webfrel" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className={`${inter.className} font-sans antialiased bg-black text-white`}>
        <NoiseGradientBackground theme="zinc" vignetteIntensity="light" noiseOpacity={25} microNoiseOpacity={15} />
        <div className="relative z-10">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
