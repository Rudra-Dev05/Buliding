"use client"

import Header from "@/components/header"
import SectionTitle from "@/components/ui-elements/section-title"
import { motion } from "framer-motion"
import { useState } from "react"
import ProjectCard from "@/components/ui-elements/project-card"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      title: "Horizon View Estates",
      category: "Residential",
      image: "/placeholder.svg?height=400&width=600",
      link: "/project/horizon-view-estates-luxury-residential-development",
    },
    {
      title: "Metro Business Center",
      category: "Commercial",
      image: "/placeholder.svg?height=400&width=600",
      link: "/project/metro-business-center",
    },
    {
      title: "Riverside Park Development",
      category: "Infrastructure",
      image: "/placeholder.svg?height=400&width=600",
      link: "/project/riverside-park-development",
    },
    {
      title: "Green Valley Residences",
      category: "Residential",
      image: "/placeholder.svg?height=400&width=600",
      link: "/project/green-valley-residences",
    },
    {
      title: "City Center Mall",
      category: "Commercial",
      image: "/placeholder.svg?height=400&width=600",
      link: "/project/city-center-mall",
    },
    {
      title: "Harbor Bridge Renovation",
      category: "Infrastructure",
      image: "/placeholder.svg?height=400&width=600",
      link: "/project/harbor-bridge-renovation",
    },
    {
      title: "Lakeside Apartments",
      category: "Residential",
      image: "/placeholder.svg?height=400&width=600",
      link: "/project/lakeside-apartments",
    },
    {
      title: "Tech Innovation Hub",
      category: "Commercial",
      image: "/placeholder.svg?height=400&width=600",
      link: "/project/tech-innovation-hub",
    },
    {
      title: "Central Park Renovation",
      category: "Infrastructure",
      image: "/placeholder.svg?height=400&width=600",
      link: "/project/central-park-renovation",
    },
  ]

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.toLowerCase() === activeFilter.toLowerCase())

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "Residential", value: "residential" },
    { label: "Commercial", value: "commercial" },
    { label: "Infrastructure", value: "infrastructure" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-orange-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionTitle
              title="Our Projects"
              subtitle="Explore our portfolio of completed and ongoing construction projects across residential, commercial, and infrastructure sectors."
              centered
            />
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                image={project.image}
                link={project.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

