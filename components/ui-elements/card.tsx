"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface CardProps {
  title: string
  description: string
  image: string
  link: string
  category?: string
  date?: string
}

export default function Card({ title, description, image, link, category, date }: CardProps) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }} className="h-full">
      <Link href={link} className="block h-full">
        <div className="border border-gray-200 rounded-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:border-orange-200 group">
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {category && (
              <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded">
                {category}
              </div>
            )}
          </div>
          <div className="p-6">
            {date && <span className="text-sm text-orange-500 font-medium block mb-2">{date}</span>}
            <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors relative">
              {title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

