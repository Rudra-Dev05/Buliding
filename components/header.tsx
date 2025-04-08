"use client"

import Link from "next/link"
import { Construction, Menu, X, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import AnimatedButton from "./ui-elements/animated-button"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"

interface HeaderProps {
  cartItemsCount?: number
}

export default function Header({ cartItemsCount = 0 }: HeaderProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Projects", href: "/project" },
    { name: "Store", href: "/store" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <motion.header
      className={`py-4 px-6 md:px-12 lg:px-24 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image 
                src="/sri-sivani-logo.png"
                alt="Sri Sivani Services Logo"
                width={180}
                height={80}
                className="h-auto w-auto max-h-16"
                priority
              />
            </motion.div>
            <span className="hidden text-2xl font-bold relative overflow-hidden">
              <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-100%]">
                Sri Sivani Services
              </span>
              <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-[100%] group-hover:translate-y-0 text-blue-700">
                Sri Sivani Services
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link
                  href={link.href}
                  className={`py-2 transition-colors ${
                    pathname.startsWith(link.href)
                      ? "text-blue-700 font-medium"
                      : "text-gray-700 hover:text-blue-700"
                  }`}
                >
                  {link.name}
                </Link>
                {(hoveredLink === link.name || pathname.startsWith(link.href)) && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700"
                    layoutId="navUnderline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4 z-10">
            {/* Cart Icon */}
            <Link href="/store/cart" className="relative p-2">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-700 transition-colors" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Get In Touch Button */}
            <div className="hidden md:block">
              <AnimatedButton href="/contact" variant="primary">
                Get In Touch
              </AnimatedButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 pt-24 px-6"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl font-medium ${
                      pathname.startsWith(link.href) ? "text-blue-700" : "text-gray-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-6"
              >
                <AnimatedButton href="/contact" variant="primary" className="w-full justify-center">
                  Get In Touch
                </AnimatedButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
