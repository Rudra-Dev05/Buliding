"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { ReactNode } from "react"

interface AnimatedButtonProps {
  href: string
  variant?: "primary" | "secondary" | "outline"
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function AnimatedButton({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
}: AnimatedButtonProps) {
  const baseStyles =
    "relative overflow-hidden rounded-full font-medium transition-all duration-300 flex items-center justify-center"

  const variantStyles = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 px-8 py-4",
    secondary: "bg-white text-gray-800 hover:bg-gray-50 px-8 py-4 border border-gray-200",
    outline: "border border-orange-300 text-gray-700 hover:bg-orange-50 px-8 py-4",
  }

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
      <Link href={href} className={combinedStyles} onClick={onClick}>
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
      </Link>
    </motion.div>
  )
}
