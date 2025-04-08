"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  link: string
  index: number
}

export default function ProjectCard({ title, category, image, link, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={link} className="block h-full">
        <div className="relative overflow-hidden rounded-lg group h-[400px]">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

          <div className="absolute bottom-0 left-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-orange-400 text-sm font-medium block mb-2">{category}</span>
            <h3 className="text-white text-xl font-bold">{title}</h3>
          </div>

          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-orange-500 rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-45 group-hover:rotate-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
