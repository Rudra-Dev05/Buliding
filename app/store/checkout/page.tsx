"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import SectionTitle from "@/components/ui-elements/section-title"
import { motion, AnimatePresence } from "framer-motion"
import { Check, CreditCard, Truck, ShieldCheck } from "lucide-react"
import AnimatedButton from "@/components/ui-elements/animated-button"

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState(1)
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",

    // Payment Information
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  const [orderComplete, setOrderComplete] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    setActiveStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setActiveStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would process the payment and create the order here
    setOrderComplete(true)
  }

  // Sample order summary data
  const orderSummary = {
    items: [
      { name: "Premium Safety Helmet", quantity: 1, price: 49.99 },
      { name: "Cordless Power Drill", quantity: 2, price: 129.99 },
    ],
    subtotal: 309.97,
    shipping: 15.0,
    tax: 24.8,
    total: 349.77,
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle title="Checkout" subtitle="Complete your purchase securely" />

          {orderComplete ? (
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 text-center mt-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>

              <h2 className="text-2xl font-bold mb-4">Order Placed Successfully!</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Thank you for your purchase. Your order has been received and is being processed. You will receive a
                confirmation email shortly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton href="/store" variant="outline">
                  Continue Shopping
                </AnimatedButton>

                <AnimatedButton href="/account/orders" variant="primary">
                  View Order
                </AnimatedButton>
              </div>
            </motion.div>
          ) : (
            <div className="mt-12">
              <div className="mb-12">
                <div className="flex items-center justify-between">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activeStep >= step ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {step}
                      </div>
                      <span className="text-sm mt-2 font-medium">
                        {step === 1 ? "Shipping" : step === 2 ? "Payment" : "Review"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative mt-4 h-1 bg-gray-200">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-orange-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(activeStep - 1) * 50}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                      {activeStep === 1 && (
                        <motion.div
                          key="shipping"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3 }}
                          className="bg-white rounded-lg shadow-md p-6"
                        >
                          <h3 className="text-xl font-bold mb-6">Shipping Information</h3>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="firstName" className="block text-gray-700 mb-2">
                                First Name
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="lastName" className="block text-gray-700 mb-2">
                                Last Name
                              </label>
                              <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="email" className="block text-gray-700 mb-2">
                                Email Address
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="phone" className="block text-gray-700 mb-2">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                              />
                            </div>

                            <div className="md:col-span-2">
                              <label htmlFor="address" className="block text-gray-700 mb-2">
                                Address
                              </label>
                              <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="city" className="block text-gray-700 mb-2">
                                City
                              </label>
                              <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="state" className="block text-gray-700 mb-2">
                                State/Province
                              </label>
                              <input
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="zipCode" className="block text-gray-700 mb-2">
                                ZIP/Postal Code
                              </label>
                              <input
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="country" className="block text-gray-700 mb-2">
                                Country
                              </label>
                              <select
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                              >
                                <option value="United States">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Australia">Australia</option>
                              </select>
                            </div>
                          </div>

                          <div className="mt-8 flex justify-end">
                            <motion.button
                              type="button"
                              onClick={nextStep}
                              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Continue to Payment
                            </motion.button>
                          </div>
                        </motion.div>
                      )}

                      {activeStep === 2 && (
                        <motion.div
                          key="payment"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3 }}
                          className="bg-white rounded-lg shadow-md p-6"
                        >
                          <h3 className="text-xl font-bold mb-6">Payment Information</h3>

                          <div className="mb-6">
                            <div className="flex items-center gap-4 mb-4">
                              <CreditCard className="text-orange-500" />
                              <span className="font-medium">Credit Card</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="md:col-span-2">
                                <label htmlFor="cardName" className="block text-gray-700 mb-2">
                                  Name on Card
                                </label>
                                <input
                                  type="text"
                                  id="cardName"
                                  name="cardName"
                                  value={formData.cardName}
                                  onChange={handleChange}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                  required
                                />
                              </div>

                              <div className="md:col-span-2">
                                <label htmlFor="cardNumber" className="block text-gray-700 mb-2">
                                  Card Number
                                </label>
                                <input
                                  type="text"
                                  id="cardNumber"
                                  name="cardNumber"
                                  value={formData.cardNumber}
                                  onChange={handleChange}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                  required
                                  placeholder="XXXX XXXX XXXX XXXX"
                                />
                              </div>

                              <div>
                                <label htmlFor="expiryDate" className="block text-gray-700 mb-2">
                                  Expiry Date
                                </label>
                                <input
                                  type="text"
                                  id="expiryDate"
                                  name="expiryDate"
                                  value={formData.expiryDate}
                                  onChange={handleChange}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                  required
                                  placeholder="MM/YY"
                                />
                              </div>

                              <div>
                                <label htmlFor="cvv" className="block text-gray-700 mb-2">
                                  CVV
                                </label>
                                <input
                                  type="text"
                                  id="cvv"
                                  name="cvv"
                                  value={formData.cvv}
                                  onChange={handleChange}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                  required
                                  placeholder="XXX"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="mt-8 flex justify-between">
                            <motion.button
                              type="button"
                              onClick={prevStep}
                              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Back to Shipping
                            </motion.button>

                            <motion.button
                              type="button"
                              onClick={nextStep}
                              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Review Order
                            </motion.button>
                          </div>
                        </motion.div>
                      )}

                      {activeStep === 3 && (
                        <motion.div
                          key="review"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3 }}
                          className="bg-white rounded-lg shadow-md p-6"
                        >
                          <h3 className="text-xl font-bold mb-6">Review Your Order</h3>

                          <div className="space-y-8">
                            <div>
                              <h4 className="font-medium text-gray-700 mb-3">Shipping Information</h4>
                              <div className="bg-gray-50 p-4 rounded-md">
                                <p className="font-medium">
                                  {formData.firstName} {formData.lastName}
                                </p>
                                <p>{formData.address}</p>
                                <p>
                                  {formData.city}, {formData.state} {formData.zipCode}
                                </p>
                                <p>{formData.country}</p>
                                <p className="mt-2">{formData.email}</p>
                                <p>{formData.phone}</p>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-medium text-gray-700 mb-3">Payment Method</h4>
                              <div className="bg-gray-50 p-4 rounded-md flex items-center gap-3">
                                <CreditCard className="text-orange-500" />
                                <div>
                                  <p className="font-medium">Credit Card</p>
                                  <p className="text-gray-600">**** **** **** {formData.cardNumber.slice(-4)}</p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-medium text-gray-700 mb-3">Order Items</h4>
                              <div className="bg-gray-50 p-4 rounded-md divide-y divide-gray-200">
                                {orderSummary.items.map((item, index) => (
                                  <div key={index} className="py-3 flex justify-between items-center">
                                    <div>
                                      <p className="font-medium">{item.name}</p>
                                      <p className="text-gray-600">Qty: {item.quantity}</p>
                                    </div>
                                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="mt-8 flex justify-between">
                            <motion.button
                              type="button"
                              onClick={prevStep}
                              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Back to Payment
                            </motion.button>

                            <motion.button
                              type="submit"
                              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Place Order
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>

                <div>
                  <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                    <h3 className="text-lg font-bold mb-6">Order Summary</h3>

                    <div className="space-y-4 mb-6">
                      {orderSummary.items.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-600">
                            {item.name} x{item.quantity}
                          </span>
                          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4 space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">${orderSummary.subtotal.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-medium">${orderSummary.shipping.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax</span>
                        <span className="font-medium">${orderSummary.tax.toFixed(2)}</span>
                      </div>

                      <div className="border-t border-gray-200 pt-4 flex justify-between font-bold">
                        <span>Total</span>
                        <span>${orderSummary.total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Truck className="w-5 h-5 text-orange-500" />
                        <span>Free shipping on orders over $100</span>
                      </div>

                      <div className="flex items-center gap-3 text-gray-600">
                        <ShieldCheck className="w-5 h-5 text-orange-500" />
                        <span>Secure payment processing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

