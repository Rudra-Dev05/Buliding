import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MarqueeBar from "@/components/marquee-bar"
import ScrollToTop from "@/components/ui-elements/scroll-to-top"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Conzone - Your Trusted Partner for Construction Excellence",
  description: "Building Landmarks and Strengthening Communities",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MarqueeBar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}



import './globals.css'