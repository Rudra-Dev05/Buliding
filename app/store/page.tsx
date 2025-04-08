"use client"

import { useState } from "react"
import Header from "@/components/header"
import SectionTitle from "@/components/ui-elements/section-title"
import ProductCard from "@/components/ui-elements/product-card"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [cartItems, setCartItems] = useState<string[]>([])

  const products = [
    {
      id: "1",
      title: "Premium Safety Helmet",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Safety",
      rating: 4.8,
    },
    {
      id: "2",
      title: "Heavy Duty Work Gloves",
      price: 24.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Safety",
      rating: 4.5,
    },
    {
      id: "3",
      title: "Professional Measuring Tape",
      price: 15.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Tools",
      rating: 4.7,
    },
    {
      id: "4",
      title: "Cordless Power Drill",
      price: 129.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Tools",
      rating: 4.9,
    },
    {
      id: "5",
      title: "Construction Site Lighting",
      price: 89.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Equipment",
      rating: 4.6,
    },
    {
      id: "6",
      title: "Concrete Mixing Bucket",
      price: 34.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Materials",
      rating: 4.3,
    },
    {
      id: "7",
      title: "Steel Toe Work Boots",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Safety",
      rating: 4.7,
    },
    {
      id: "8",
      title: "Laser Level Tool",
      price: 59.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Tools",
      rating: 4.8,
    },
    {
      id: "9",
      title: "Premium Paint Roller Set",
      price: 19.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Materials",
      rating: 4.5,
    },
  ]

  const categories = [
    { label: "All Products", value: "all" },
    { label: "Safety", value: "safety" },
    { label: "Tools", value: "tools" },
    { label: "Equipment", value: "equipment" },
    { label: "Materials", value: "materials" },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category.toLowerCase() === activeCategory.toLowerCase()

    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const handleAddToCart = (id: string) => {
    setCartItems((prev) => [...prev, id])
  }

  return (
    <main className="min-h-screen">
      <Header cartItemsCount={cartItems.length} />

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-orange-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionTitle
              title="Construction Store"
              subtitle="Quality tools, equipment, and materials for your construction projects."
              centered
            />
          </motion.div>

          <div className="mt-12 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.value
                      ? "bg-orange-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>

            <motion.div
              className="relative w-full md:w-64"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-6xl">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  rating={product.rating}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

