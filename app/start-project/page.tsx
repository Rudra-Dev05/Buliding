"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import SectionHeading from "@/components/section-heading"
import { motion, AnimatePresence } from "framer-motion"

export default function StartProjectPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would submit the form data to your backend
    alert("Project request submitted successfully! We'll contact you soon.")
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading
            title="Start Your Project"
            subtitle="Tell us about your construction project and we'll help bring your vision to life."
            centered
          />

          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step >= i ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    animate={
                      step >= i
                        ? {
                            scale: [1, 1.2, 1],
                            transition: { duration: 0.5, times: [0, 0.5, 1] },
                          }
                        : {}
                    }
                  >
                    {i}
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm font-medium">Basic Info</span>
                <span className="text-sm font-medium">Project Details</span>
                <span className="text-sm font-medium">Confirmation</span>
              </div>
              <div className="relative mt-2 h-1 bg-gray-200 rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-orange-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(step - 1) * 50}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                      />
                    </div>

                    <div className="flex justify-end">
                      <motion.button
                        type="button"
                        onClick={nextStep}
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10">Next Step</span>
                        <span className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4">
                      <label htmlFor="projectType" className="block text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                        required
                      >
                        <option value="">Select a project type</option>
                        <option value="residential">Residential Construction</option>
                        <option value="commercial">Commercial Construction</option>
                        <option value="renovation">Renovation</option>
                        <option value="interior">Interior Design</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="budget" className="block text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                        required
                      >
                        <option value="">Select a budget range</option>
                        <option value="under50k">Under $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="500k-1m">$500,000 - $1 million</option>
                        <option value="over1m">Over $1 million</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="timeline" className="block text-gray-700 mb-2">
                        Expected Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                        required
                      >
                        <option value="">Select a timeline</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-3months">1-3 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6-12months">6-12 months</option>
                        <option value="over12months">Over 12 months</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="description" className="block text-gray-700 mb-2">
                        Project Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                        required
                      ></textarea>
                    </div>

                    <div className="flex justify-between">
                      <motion.button
                        type="button"
                        onClick={prevStep}
                        className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Previous
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={nextStep}
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10">Next Step</span>
                        <span className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-4">Review Your Information</h3>

                    <motion.div
                      className="bg-gray-50 p-6 rounded-lg mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Name</p>
                          <p className="font-medium">{formData.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">{formData.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="font-medium">{formData.phone || "Not provided"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Project Type</p>
                          <p className="font-medium">{formData.projectType}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Budget</p>
                          <p className="font-medium">{formData.budget}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Timeline</p>
                          <p className="font-medium">{formData.timeline}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-gray-500">Project Description</p>
                        <p className="font-medium">{formData.description}</p>
                      </div>
                    </motion.div>

                    <div className="flex justify-between">
                      <motion.button
                        type="button"
                        onClick={prevStep}
                        className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Previous
                      </motion.button>
                      <motion.button
                        type="submit"
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10">Submit Project</span>
                        <span className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

