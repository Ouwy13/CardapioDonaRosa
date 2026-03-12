import { ScrollProgress } from "@/components/scroll-progress"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <MenuSection />
      <Footer />
    </main>
  )
}
