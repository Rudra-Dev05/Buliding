"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const marqueeTexts = [
  "Your Trusted Partner for Construction Excellence",
  "Building Landmarks and Strengthening Communities",
  "Transforming Lives with Excellence in Construction",
]

export default function MarqueeBar() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % marqueeTexts.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-white border-b border-gray-100 py-1 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center text-sm text-gray-600 overflow-hidden h-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTextIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center w-full"
            >
              {currentTextIndex === 1 ? (
                <span className="text-orange-500">{marqueeTexts[currentTextIndex]}</span>
              ) : (
                <span className="text-gray-700">{marqueeTexts[currentTextIndex]}</span>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

