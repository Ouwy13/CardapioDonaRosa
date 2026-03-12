"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const menuImages = [
  { src: "/p1.jpg", alt: "Cardapio de Pizzas Tradicionais", id: "cardapio" },
  { src: "/p2.jpg", alt: "Cardapio de Pizzas Especiais e Pizza Bolo", id: "especiais" },
  { src: "/p4.jpg", alt: "Cardapio de Pasteis", id: "pasteis" },
  { src: "/p5.jpg", alt: "Cardapio de Porcoes e Tira Gosto", id: "porcoes" },
  { src: "/p3.jpg", alt: "Cardapio de Bebidas e Pizzas Doces", id: "bebidas" },
]

function MenuCard({ src, alt, id, index }: { src: string; alt: string; id: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      id={id}
      className={`scroll-mt-28 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="group relative glass rounded-xl overflow-hidden hover-lift">
        {/* Glow effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
        
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={860}
            height={1200}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
            priority={id === "cardapio"}
          />
          
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  )
}

export function MenuSection() {
  const [titleVisible, setTitleVisible] = useState(false)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-4 relative">
      {/* Background blur effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] animate-float-blob" />
        <div className="absolute bottom-1/4 -left-1/4 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[80px] animate-background-pulse" />
      </div>

      <div className="max-w-[860px] mx-auto relative z-10">
        {/* Section Title */}
        <h2 
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"
          }`}
        >
          <span className="inline-block px-6 py-3 glass rounded-full text-secondary text-sm uppercase tracking-[0.4em] font-sans">
            Cardapio
          </span>
        </h2>

        {/* Menu Cards */}
        <div className="flex flex-col gap-12">
          {menuImages.map((image, index) => (
            <MenuCard key={image.id} {...image} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
