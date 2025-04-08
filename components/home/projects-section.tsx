"use client"

import { motion } from "framer-motion"
import SectionTitle from "../ui-elements/section-title"
import ProjectCard from "../ui-elements/project-card"

export default function ProjectsSection() {
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
  ]

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="inline-block mr-2">RECENTLY</span>
            <span className="text-blue-700 inline-block">COMPLETED WORKS</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of completed and ongoing construction projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="/project"
            className="text-blue-700 font-medium hover:text-blue-800 transition-colors inline-flex items-center"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
