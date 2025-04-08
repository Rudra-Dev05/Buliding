"use client"

import Header from "@/components/header"
import SectionHeading from "@/components/section-heading"
import { motion } from "framer-motion"
import Image from "next/image"
import ParallaxSection from "@/components/parallax-section"

export default function AboutPage() {
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "150+", label: "Team Members" },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            title="About Sri Sivani Services"
            subtitle="At Sri Sivani Services, we believe in building more than just structures; we build communities, relationships, and a better future."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-700 mb-6">
                With decades of experience in the construction industry, we have established ourselves as a trusted
                partner for projects of all sizes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team of skilled professionals brings expertise, innovation, and dedication to every project. We
                pride ourselves on delivering high-quality work that exceeds expectations and stands the test of time.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're looking to build a new home, renovate an existing space, or undertake a large commercial
                project, Sri Sivani Services is here to turn your vision into reality.
              </p>
            </motion.div>

            <ParallaxSection>
              <motion.div
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              >
                <Image src="/placeholder.svg?height=400&width=600" alt="Sri Sivani Services team" fill className="object-cover" />
              </motion.div>
            </ParallaxSection>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <motion.div
                  className="text-4xl font-bold text-orange-500 mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: 0.2 + index * 0.1,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-700">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
