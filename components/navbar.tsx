"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#especiais", label: "Especiais" },
  { href: "#pasteis", label: "Pastéis" },
  { href: "#bebidas", label: "Bebidas" },
  { href: "#contato", label: "Contato" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-500 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className={`mx-4 md:mx-8 rounded-xl glass-strong transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}>
        <nav className="max-w-6xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          {/* Logo + Name - Left */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/Logo.jpg"
                alt="Pizzaria Dona Rosa"
                width={52}
                height={52}
                className="rounded-full"
                loading="eager"
                priority
                style={{ 
                  clipPath: "circle(50% at 50% 50%)",
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-sans">
                Pizzaria
              </span>
              <span className="font-serif text-primary text-lg tracking-[0.1em] font-semibold leading-tight">
                Dona Rosa
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li 
                key={link.href}
                className={`transition-all duration-500 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
              >
                <a
                  href={link.href}
                  className="nav-link text-sm uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 glass rounded-lg text-foreground/70 hover:text-primary transition-all duration-200 hover:scale-105"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 transition-all duration-300 ${isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`}>
                <Menu size={24} />
              </span>
              <span className={`absolute inset-0 transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"}`}>
                <X size={24} />
              </span>
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mx-4 mt-2 rounded-xl glass-strong overflow-hidden transition-all duration-400 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col py-4">
          {navLinks.map((link, index) => (
            <li 
              key={link.href}
              className={`transition-all duration-300 ${
                isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 0.05}s` : "0s" }}
            >
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-sm uppercase tracking-wider text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
