"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  link: string
  index: number
}

export default function ServiceCard({ title, description, icon, link, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Link href={link} className="block h-full">
        <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:border-orange-200 group">
          <div className="mb-6 relative w-16 h-16">
            <Image src={icon || "/placeholder.svg"} alt={title} fill className="object-contain" />
          </div>

          <h3 className="text-xl font-bold mb-4 group-hover:text-orange-500 transition-colors">{title}</h3>

          <p className="text-gray-700 mb-6">{description}</p>

          <div className="flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
            <span>Learn More</span>
            <motion.div initial={{ x: 0 }} whileHover={{ x: 5 }} className="ml-2">
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
