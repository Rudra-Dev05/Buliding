"use client"

import { motion } from "framer-motion"
import AnimatedButton from "../ui-elements/animated-button"

export default function CtaSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-900/70"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-700 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block mr-2">CREATING</span>
          <span className="text-blue-400 inline-block">SOLID FOUNDATIONS</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Contact us today to discuss your project requirements and get a free consultation with our construction
          experts.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AnimatedButton href="/contact" variant="primary">
            Get In Touch
          </AnimatedButton>

          <AnimatedButton href="/consultation" variant="secondary">
            Free Consultation
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  )
}
