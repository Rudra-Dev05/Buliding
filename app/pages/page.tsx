"use client"

import Header from "@/components/header"
import SectionHeading from "@/components/section-heading"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function PagesPage() {
  const pages = [
    {
      title: "Services",
      description: "Explore our comprehensive range of construction services",
      link: "/services",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Projects",
      description: "View our portfolio of completed and ongoing projects",
      link: "/projects",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Team",
      description: "Meet the experienced professionals behind Conzone",
      link: "/team",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Testimonials",
      description: "Read what our clients say about working with us",
      link: "/testimonials",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "FAQ",
      description: "Find answers to commonly asked questions",
      link: "/faq",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Careers",
      description: "Join our team of construction professionals",
      link: "/careers",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Pages" centered />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {pages.map((page, index) => (
              <motion.div key={index} variants={item} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Link href={page.link} className="block h-full">
                  <div className="border border-gray-200 rounded-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:border-orange-200 group">
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={page.image || "/placeholder.svg"}
                        alt={page.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors relative">
                        {page.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                      </h2>
                      <p className="text-gray-700">{page.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

