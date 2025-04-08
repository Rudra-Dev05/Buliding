"use client"

import { motion } from "framer-motion"
import SectionTitle from "../ui-elements/section-title"
import ServiceCard from "../ui-elements/service-card"

export default function ServicesSection() {
  const services = [
    {
      title: "Project Planning",
      description:
        "Comprehensive planning services to ensure your construction project starts on the right foundation.",
      icon: "/placeholder.svg?height=64&width=64",
      link: "/service/project-planning",
    },
    {
      title: "Construction Management",
      description:
        "Expert management of your construction project from start to finish, ensuring quality and timeliness.",
      icon: "/placeholder.svg?height=64&width=64",
      link: "/service/construction-management",
    },
    {
      title: "Architectural Design",
      description: "Creative and functional architectural designs that bring your vision to life.",
      icon: "/placeholder.svg?height=64&width=64",
      link: "/service/architectural-design",
    },
    {
      title: "Renovation & Remodeling",
      description: "Transform your existing space with our renovation and remodeling services.",
      icon: "/placeholder.svg?height=64&width=64",
      link: "/service/renovation-remodeling",
    },
  ]

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="inline-block mr-2">SERVICES</span>
            <span className="text-blue-700 inline-block">WE PROVIDE</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of construction services to meet all your building needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="/service"
            className="text-blue-700 font-medium hover:text-blue-800 transition-colors inline-flex items-center"
          >
            View All Services
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
