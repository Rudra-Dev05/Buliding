import Header from "@/components/header"
import Hero from "@/components/hero"
import ConstructionImage from "@/components/construction-image"
import ServicesSection from "@/components/home/services-section"
import ProjectsSection from "@/components/home/projects-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import CtaSection from "@/components/home/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ConstructionImage />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  )
}

