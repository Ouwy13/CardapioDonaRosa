"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-background-pulse"
        />
        <div 
          className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[100px] animate-float-blob"
          style={{ animationDelay: "5s" }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[80px] animate-background-pulse"
          style={{ animationDelay: "10s" }}
        />
      </div>

      <div className="text-center relative z-10">
        {/* Headline */}
        <h1 className="font-serif">
          <span
            className={`block text-foreground font-light tracking-[0.3em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            PIZZARIA
          </span>
          <span
            className={`block text-primary font-bold tracking-[0.1em] text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm"
            }`}
            style={{ transitionDelay: "0.25s" }}
          >
            DONA ROSA
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`mt-6 text-muted-foreground text-sm sm:text-base tracking-wider transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          Brejo, Maranhao — Tradição e Sabor desde o Primeiro Forno
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"
          }`}
          style={{ transitionDelay: "0.55s" }}
        >
          <a
            href="#cardapio"
            className="group relative px-8 py-4 glass rounded-lg text-foreground text-sm uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            <span className="relative z-10">Ver Cardapio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="https://wa.me/5598884288598"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 glass rounded-lg text-foreground text-sm uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} className="relative z-10 transition-transform duration-300 group-hover:rotate-12" />
            <span className="relative z-10">Fazer Pedido</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "0.9s" }}
      >
        <span className="text-muted-foreground text-xs uppercase tracking-[0.25em] font-medium">
          Ver Cardapio
        </span>
        {/* Animated chevron stack */}
        <div className="flex flex-col items-center gap-0.5">
          {[0, 1, 2].map((i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-primary animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          ))}
        </div>
      </div>
    </section>
  )
}
