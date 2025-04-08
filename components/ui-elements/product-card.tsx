"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"

interface ProductCardProps {
  id: string
  title: string
  price: number
  image: string
  category: string
  rating: number
  onAddToCart: (id: string) => void
}

export default function ProductCard({ id, title, price, image, category, rating, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-lg overflow-hidden h-full border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-orange-200">
        <Link href={`/store/product/${id}`} className="block relative h-64 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded">
            {category}
          </div>

          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-orange-500 rounded-full px-2 py-1 text-xs font-medium flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {rating}
          </div>
        </Link>

        <div className="p-6">
          <Link href={`/store/product/${id}`}>
            <h3 className="text-lg font-bold mb-2 hover:text-orange-500 transition-colors">{title}</h3>
          </Link>

          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors"
              onClick={() => onAddToCart(id)}
            >
              <ShoppingCart className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

