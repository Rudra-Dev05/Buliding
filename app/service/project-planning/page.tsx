"use client"

import Header from "@/components/header"
import SectionTitle from "@/components/ui-elements/section-title"
import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedButton from "@/components/ui-elements/animated-button"
import AnimatedText from "@/components/ui-elements/animated-text"

export default function ProjectPlanningPage() {
  const planningSteps = [
    {
      title: "Initial Consultation",
      description:
        "We begin with a thorough consultation to understand your vision, requirements, and budget constraints.",
      icon: "📋",
    },
    {
      title: "Site Analysis",
      description:
        "Our team conducts a comprehensive site analysis to assess conditions, constraints, and opportunities.",
      icon: "🔍",
    },
    {
      title: "Conceptual Design",
      description: "We develop initial design concepts that align with your vision and project requirements.",
      icon: "✏️",
    },
    {
      title: "Detailed Planning",
      description:
        "Our experts create detailed plans, including architectural drawings, structural designs, and material specifications.",
      icon: "📐",
    },
    {
      title: "Budget & Timeline",
      description:
        "We establish a realistic budget and timeline to ensure your project stays on track and within financial parameters.",
      icon: "💰",
    },
    {
      title: "Permits & Approvals",
      description:
        "Our team handles all necessary permits and regulatory approvals to ensure compliance with local building codes.",
      icon: "📑",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Planning</h1>

              <AnimatedText
                text="Comprehensive planning services to ensure your construction project starts on the right foundation and proceeds smoothly from concept to completion."
                className="text-gray-700 text-lg mb-8"
                once={true}
                highlight={true}
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <AnimatedButton href="/contact" variant="primary">
                  Get Started
                </AnimatedButton>

                <AnimatedButton href="/consultation" variant="outline">
                  Free Consultation
                </AnimatedButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image src="/placeholder.svg?height=400&width=600" alt="Project Planning" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle
            title="Our Planning Process"
            subtitle="We follow a structured approach to project planning to ensure every detail is considered and addressed."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {planningSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Project Planning Matters</h2>

              <p className="text-gray-300 mb-6">
                Proper project planning is the foundation of any successful construction project. It helps identify
                potential issues before they arise, ensures efficient resource allocation, and provides a clear roadmap
                for project execution.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Minimizes costly changes and delays during construction</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ensures all stakeholders have a clear understanding of project goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Optimizes resource allocation and budget management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Facilitates better coordination among different teams and contractors</span>
                </li>
              </ul>

              <AnimatedButton href="/contact" variant="primary">
                Discuss Your Project
              </AnimatedButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Project Planning Importance"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

