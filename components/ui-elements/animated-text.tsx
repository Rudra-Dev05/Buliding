"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  highlight?: boolean
}

export default function AnimatedText({ text, className = "", once = false, highlight = false }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    if (!once) {
      const interval = setInterval(() => {
        setIsVisible(false)
        setTimeout(() => setIsVisible(true), 100)
      }, 7000)

      return () => clearInterval(interval)
    }
  }, [once])

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={`overflow-hidden flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={`mr-1 inline-block ${highlight && index % 3 === 0 ? "text-orange-500 font-medium" : ""}`}
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

