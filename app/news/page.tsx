"use client"

import Header from "@/components/header"
import SectionHeading from "@/components/section-heading"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Conzone Completes Landmark Office Building",
      excerpt:
        "Our team has successfully delivered the new headquarters for Tech Innovations Inc., a 12-story building...",
      date: "April 2, 2025",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Sustainable Building Practices: Our Commitment",
      excerpt: "Conzone is proud to announce our new sustainability initiative aimed at reducing carbon footprint...",
      date: "March 28, 2025",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "New Residential Development Breaking Ground",
      excerpt: "Construction begins next month on our newest residential project, featuring 50 luxury apartments...",
      date: "March 15, 2025",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Latest News" centered />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                variants={item}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-orange-500 font-medium">{item.date}</span>
                  <h2 className="text-xl font-bold mt-2 mb-3 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{item.excerpt}</p>
                  <Link
                    href={`/news/${item.id}`}
                    className="text-orange-500 font-medium group-hover:text-orange-600 transition-colors inline-flex items-center"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

