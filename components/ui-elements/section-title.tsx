"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  light = false,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <motion.h2
        className={`text-3xl md:text-4xl font-bold relative inline-block ${light ? "text-white" : "text-gray-900"}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {title}
        <motion.span
          className={`absolute -bottom-2 left-0 h-1 ${light ? "bg-orange-400" : "bg-orange-500"}`}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.h2>

      {subtitle && (
        <motion.p
          className={`text-lg mt-4 max-w-2xl ${light ? "text-gray-200" : "text-gray-700"} ${centered ? "mx-auto" : ""}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
