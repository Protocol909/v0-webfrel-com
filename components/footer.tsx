"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Twitter, Linkedin, Github, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Get In Touch</h3>
            <form className="space-y-3 sm:space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-white/5 border-white/10 focus:border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/5 border-white/10 focus:border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  className="bg-white/5 border-white/10 focus:border-white/20 resize-none text-white placeholder:text-gray-400"
                />
              </div>
              <Button type="submit" className="w-full bg-white text-black hover:bg-white/90 font-medium">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Contact Information</h3>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white/70 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white text-sm sm:text-base">Email</p>
                  <p className="text-gray-400 text-sm">hello@webfrel.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white/70 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white text-sm sm:text-base">Phone</p>
                  <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/70 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white text-sm sm:text-base">Location</p>
                  <p className="text-gray-400 text-sm">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-medium mb-3 sm:mb-4 text-white text-sm sm:text-base">Follow Us</p>
              <div className="flex gap-3">
                {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 flex items-center justify-center transition-all"
                    aria-label={`Social link ${i + 1}`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Webfrel Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-400 text-center">© 2025 Webfrel. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
