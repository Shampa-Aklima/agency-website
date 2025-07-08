import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import Footer from "./component/layout/Footer"
import Navbar from "./component/layout/Navbar"


const dmSans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Najah",
  description: "Where Innovation Meets Imagination",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${dmSans.className} min-h-screen flex flex-col bg-deep-purple`} 
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow w-full max-w-[2000px] mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


