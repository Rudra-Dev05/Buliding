"use client"

import Header from "@/components/header"
import { motion } from "framer-motion"
import Image from "next/image"
import SectionTitle from "@/components/ui-elements/section-title"
import AnimatedButton from "@/components/ui-elements/animated-button"
import Link from "next/link"

export default function ProjectDetailPage() {
  const projectDetails = {
    title: "Horizon View Estates",
    subtitle: "Luxury Residential Development",
    location: "Coastal Heights, CA",
    year: "2023",
    client: "Horizon Development Group",
    value: "$25 Million",
    duration: "18 Months",
    description:
      "Horizon View Estates is a premium residential development featuring 24 luxury homes with panoramic ocean views. The project combines modern architectural design with sustainable building practices to create an exclusive community that harmonizes with its natural surroundings.",
    features: [
      "24 luxury single-family homes",
      "Modern architectural design with sustainable elements",
      "Panoramic ocean views from each residence",
      "Community clubhouse and recreational facilities",
      "Energy-efficient construction and smart home technology",
      "Landscaped gardens and walking paths",
    ],
    challenges: [
      "Complex terrain requiring specialized foundation solutions",
      "Strict coastal development regulations",
      "Integration of sustainable technologies while maintaining luxury aesthetics",
      "Coordination of multiple specialized contractors",
    ],
    solutions: [
      "Implemented innovative foundation design to accommodate sloping terrain",
      "Worked closely with regulatory agencies to ensure compliance",
      "Utilized high-end sustainable materials that complemented the luxury design",
      "Established comprehensive project management system for contractor coordination",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    relatedProjects: [
      {
        title: "Green Valley Residences",
        link: "/project/green-valley-residences",
      },
      {
        title: "Lakeside Apartments",
        link: "/project/lakeside-apartments",
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={projectDetails.images[0] || "/placeholder.svg"}
          alt={projectDetails.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-24">
          <div className="container mx-auto max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-orange-400 text-lg font-medium block mb-2">{projectDetails.subtitle}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{projectDetails.title}</h1>
              <p className="text-white/80 text-lg max-w-2xl">{projectDetails.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionTitle
                title="Project Overview"
                subtitle="A luxury residential development that combines modern design with sustainable building practices."
              />

              <div className="mt-8 space-y-6">
                <p className="text-gray-700">
                  Horizon View Estates represents the pinnacle of luxury residential development, offering an exclusive
                  community of 24 custom-designed homes nestled along the picturesque Coastal Heights shoreline. Each
                  residence is strategically positioned to maximize panoramic ocean views while maintaining privacy and
                  harmony with the natural landscape.
                </p>

                <p className="text-gray-700">
                  The architectural design blends contemporary aesthetics with sustainable elements, creating homes that
                  are both visually stunning and environmentally responsible. High-end finishes, open floor plans, and
                  floor-to-ceiling windows are signature features of each residence.
                </p>

                <p className="text-gray-700">
                  Beyond the individual homes, the development includes a community clubhouse, swimming pool, fitness
                  center, and meticulously landscaped gardens with walking paths that wind through the property,
                  connecting residents to shared amenities and natural spaces.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Project Features</h3>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectDetails.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Challenges & Solutions</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-orange-500">Challenges</h4>
                    <ul className="space-y-3">
                      {projectDetails.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4 text-green-600">Solutions</h4>
                    <ul className="space-y-3">
                      {projectDetails.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-8 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-6">Project Details</h3>

                <div className="space-y-4">
                  <div>
                    <span className="text-gray-500 text-sm">Location</span>
                    <p className="font-medium">{projectDetails.location}</p>
                  </div>

                  <div>
                    <span className="text-gray-500 text-sm">Year Completed</span>
                    <p className="font-medium">{projectDetails.year}</p>
                  </div>

                  <div>
                    <span className="text-gray-500 text-sm">Client</span>
                    <p className="font-medium">{projectDetails.client}</p>
                  </div>

                  <div>
                    <span className="text-gray-500 text-sm">Project Value</span>
                    <p className="font-medium">{projectDetails.value}</p>
                  </div>

                  <div>
                    <span className="text-gray-500 text-sm">Duration</span>
                    <p className="font-medium">{projectDetails.duration}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <AnimatedButton href="/contact" variant="primary" className="w-full justify-center">
                    Discuss Your Project
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle title="Project Gallery" centered />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projectDetails.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${projectDetails.title} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle
            title="Related Projects"
            subtitle="Explore more of our residential development projects"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {projectDetails.relatedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={project.link} className="block">
                  <div className="relative h-64 rounded-lg overflow-hidden group">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

