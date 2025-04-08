"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import ParallaxSection from "./ui-elements/parallax-section"

export default function ConstructionImage() {
  return (
    <section className="px-6 md:px-12 lg:px-24 pb-16">
      <div className="container mx-auto max-w-6xl">
        <ParallaxSection speed={0.15}>
          <motion.div
            className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="https://sjc.microlink.io/FgLqO2rcrBk9wZXba5WgKiUNmJKzocFrORdBULec0wgtwI_zSs8b4lWXu-Pd68xDzPCbYBXDKI-CqbzJsvITyQ.jpeg"
              alt="Construction site with house frame and crane at sunset"
              fill
              className="object-cover transition-transform duration-10000 hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <motion.div
              className="absolute bottom-0 left-0 w-full p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h3 className="text-2xl font-bold mb-2">Building Tomorrow's Landmarks</h3>
              <p className="text-white/80">Excellence in construction, delivered on time and on budget</p>
            </motion.div>
          </motion.div>
        </ParallaxSection>
      </div>
    </section>
  )
}

