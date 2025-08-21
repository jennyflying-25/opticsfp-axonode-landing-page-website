import type React from "react"
import type { Metadata } from "next"
import { Inter, Lato } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Axonode Solution - Your Engineering Partner for Network Hardware",
  description:
    "Discover our comprehensive collection of carrier-grade optical transceivers, rigorously tested for 100% compatibility with Cisco, Aruba, Juniper, and more.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lato.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
