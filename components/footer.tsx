"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Instagram, MessageCircle, MapPin } from "lucide-react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer 
      ref={ref}
      id="contato" 
      className="relative pt-20 pb-8 px-4 scroll-mt-20 overflow-hidden"
    >
      {/* Background blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Glass container */}
        <div className={`glass-strong rounded-2xl p-8 md:p-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm"
        }`}>
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
            {/* Column 1 - Logo & Tagline */}
            <div 
              className={`flex flex-col items-center md:items-start transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="/Logo.jpg"
                  alt="Pizzaria Dona Rosa"
                  width={100}
                  height={100}
                  loading="lazy"
                  className="relative rounded-full transition-transform duration-300 group-hover:scale-105"
                  style={{ clipPath: "circle(50% at 50% 50%)" }}
                />
              </div>
              <p className="font-serif text-xl text-foreground/80 italic mt-4">
                A pizza que você respeita, o recheio que você merece.
              </p>
            </div>

            {/* Column 2 - Contact */}
            <div 
              className={`text-center md:text-left transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <h3 className="text-sm uppercase tracking-[0.2em] text-secondary mb-6">
                Contato
              </h3>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/donarosapizzas__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center md:justify-start gap-3 text-foreground/70 hover:text-primary transition-all duration-300"
                >
                  <Instagram size={20} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <span>@donarosapizzas__</span>
                </a>
                <a
                  href="https://wa.me/5598884288598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center md:justify-start gap-3 text-foreground/70 hover:text-primary transition-all duration-300"
                >
                  <MessageCircle size={20} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <span>(98) 98842-8598</span>
                </a>
              </div>
            </div>

            {/* Column 3 - Location */}
            <div 
              className={`text-center md:text-left transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              <h3 className="text-sm uppercase tracking-[0.2em] text-secondary mb-6">
                Localizacao
              </h3>
              <div className="space-y-2 text-foreground/70">
                <p>Rua do Estadio, 60</p>
                <p>Brejo — MA, 65520-000</p>
                <a
                  href="https://www.google.com/maps/place/R.+do+Est%C3%A1dio,+60,+Brejo+-+MA,+65520-000/@-3.6891757,-42.7517841,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 mt-3 px-4 py-2 glass rounded-lg text-primary hover:text-secondary transition-all duration-300 hover:scale-105"
                >
                  <MapPin size={16} className="transition-transform duration-300 group-hover:bounce" />
                  Ver no mapa
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div 
            className={`border-t border-white/5 pt-8 text-center transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <p className="text-sm text-muted-foreground">
              © 2026 Pizzaria Dona Rosa. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
