"use client"

import { motion } from "framer-motion"
import AnimatedText from "./animated-text"
import AnimatedButton from "./ui-elements/animated-button"

export default function Hero() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-blue-50/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-white/30"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm inline-block shadow-sm">
              Development
            </span>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            SOLID FOUNDATIONS
          </motion.h1>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold tracking-tight text-blue-700 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            CONSTRUCTING TRUST
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-2"
          >
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm inline-block shadow-sm">
              Construction
            </span>
          </motion.div>

          <AnimatedText
            text="Construction is more than just bricks and mortar; it's about transforming ideas into reality. It's about creating spaces that inspire, connect, and uplift"
            className="text-gray-700 text-lg md:text-xl max-w-3xl mb-12"
            once={true}
            highlight={true}
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton href="/start-project" variant="primary">
              Start A Project
            </AnimatedButton>

            <AnimatedButton href="/consultation" variant="outline">
              Free Consultation
            </AnimatedButton>
          </div>
          
          <motion.div 
            className="mt-20 flex flex-col md:flex-row justify-center gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Building Tomorrow</h4>
              <p className="text-gray-600">Creating future-ready structures</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Your Vision</h4>
              <p className="text-gray-600">Bringing dreams to reality</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Building with Integrity</h4>
              <p className="text-gray-600">Quality in every detail</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
