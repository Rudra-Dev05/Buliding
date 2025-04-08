"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import SectionTitle from "@/components/ui-elements/section-title"
import { motion } from "framer-motion"
import Image from "next/image"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import AnimatedButton from "@/components/ui-elements/animated-button"

export default function CartPage() {
  // In a real app, this would come from a global state or context
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      title: "Premium Safety Helmet",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      quantity: 1,
    },
    {
      id: "4",
      title: "Cordless Power Drill",
      price: 129.99,
      image: "/placeholder.svg?height=300&width=300",
      quantity: 2,
    },
  ])

  const [subtotal, setSubtotal] = useState(0)
  const shippingCost = 15.0
  const taxRate = 0.08

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    setSubtotal(total)
  }, [cartItems])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const tax = subtotal * taxRate
  const total = subtotal + shippingCost + tax

  return (
    <main className="min-h-screen">
      <Header cartItemsCount={cartItems.length} />

      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle title="Your Cart" subtitle="Review your items before proceeding to checkout" />

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-bold">Shopping Cart ({cartItems.length} items)</h3>
                  </div>

                  <div className="divide-y divide-gray-200">
                    {cartItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        className="p-6 flex flex-col sm:flex-row items-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-grow">
                          <h4 className="font-medium text-lg">{item.title}</h4>
                          <p className="text-orange-500 font-bold mt-1">${item.price.toFixed(2)}</p>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3 py-1">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h3 className="text-lg font-bold mb-6">Order Summary</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">${shippingCost.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>

                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <AnimatedButton href="/store/checkout" variant="primary" className="w-full justify-center">
                      Proceed to Checkout
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block p-6 bg-orange-100 rounded-full mb-6">
                <ShoppingBag className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Your cart is empty</h3>
              <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
              <AnimatedButton href="/store" variant="primary">
                Continue Shopping
              </AnimatedButton>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}

