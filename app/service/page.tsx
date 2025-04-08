"use client"

import Header from "@/components/header"
import SectionTitle from "@/components/ui-elements/section-title"
import ServiceCard from "@/components/ui-elements/service-card"
import { motion } from "framer-motion"
import AnimatedButton from "@/components/ui-elements/animated-button"

export default function ServicesPage() {
  const services = [
    {
      title: "Project Planning",
      description:
        "Comprehensive planning services to ensure your construction project starts on the right foundation with detailed blueprints and timelines.",
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
      description:
        "Creative and functional architectural designs that bring your vision to life with attention to aesthetics and practicality.",
      icon: "/placeholder.svg?height=64&width=64",
      link: "/service/architectural-design",
    },
    {
      title: "Renovation & Remodeling",
      description:
        "Transform your existing space with our renovation and remodeling services for both residential and commercial properties.",
      icon: "/placeholder.svg?height=64&width=64",
      link: "/service/renovation-remodeling",
    },
    {
      title: "Interior Design",
      description:
        "Professional interior design services to create beautiful and functional spaces that reflect your style and needs.",
      icon: "/placeholder.svg?height=64&width=64",
      link: "/service/interior-design",
    },
    {
      title: "Structural Engineering",
      description:
        "Expert structural engineering services to ensure the safety and stability of your construction project.",
      icon: "/placeholder.svg?height=64&width=64",
      link: "/service/structural-engineering",
    },
    {
      title: "Green Building",
      description: "Sustainable construction practices and materials to create environmentally friendly buildings.",
      icon: "/placeholder.svg?height=64&width=64",
      link: "/service/green-building",
    },
    {
      title: "Commercial Construction",
      description:
        "Specialized construction services for commercial properties, including offices, retail spaces, and industrial buildings.",
      icon: "/placeholder.svg?height=64&width=64",
      link: "/service/commercial-construction",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-orange-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionTitle
              title="Our Services"
              subtitle="We offer a comprehensive range of construction services to meet all your building needs, from initial planning to final completion."
              centered
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                title="Why Choose Our Services"
                subtitle="At Conzone, we pride ourselves on delivering exceptional construction services with a focus on quality, reliability, and customer satisfaction."
              />

              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-500 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
                    <p className="text-gray-700">
                      Our team of professionals brings years of experience and expertise to every project.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-500 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Materials</h3>
                    <p className="text-gray-700">
                      We use only the highest quality materials to ensure durability and longevity of your construction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-500 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
                    <p className="text-gray-700">
                      We understand the importance of deadlines and strive to complete all projects on time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <AnimatedButton href="/contact" variant="primary">
                  Get In Touch
                </AnimatedButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Construction services"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

