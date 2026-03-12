"use client"

import { useState } from "react"

export function WhatsappButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="https://wa.me/5598884288598?text=Ola%2C%20gostaria%20de%20fazer%20um%20pedido!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fazer pedido pelo WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-row-reverse items-center gap-3 group"
    >
      {/* Circle button */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#F97316] shadow-[0_4px_24px_rgba(249,115,22,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_6px_32px_rgba(249,115,22,0.7)]">
        {/* Ping animation ring */}
        <span className="absolute inset-0 rounded-full bg-[#F97316] opacity-40 animate-ping" />

        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7 relative z-10"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.057 23.486a.5.5 0 0 0 .612.612l5.634-1.475A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 0 1-5.007-1.375l-.36-.214-3.724.976.993-3.625-.234-.372A9.787 9.787 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
        </svg>
      </div>

      {/* Tooltip label — slides in from the right toward the left */}
      <span
        className={`
          whitespace-nowrap text-xs font-semibold uppercase tracking-widest
          bg-[#F97316] text-white px-3 py-1.5 rounded-full shadow-lg
          transition-all duration-300
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}
        `}
      >
        Fazer Pedido
      </span>
    </a>
  )
}
