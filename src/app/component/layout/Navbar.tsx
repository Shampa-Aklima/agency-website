"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/app/serviceSinglePage/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Navbar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <header className="bg-[#8E7CFF]/20 text-white px-6 py-4 flex items-center justify-between shadow-sm">
           
      <div className="flex gap-4">
        <Image src="/logo.png" alt="Najah Logo" width={200} height={100} /> {/* Updated src to local file */}
      </div>
      <div className="hidden md:flex items-center gap-6">
        <Link href="/services" className="hover:text-gray-300 transition-colors">
          Service
        </Link>
        <Link href="/client-cases" className="hover:text-gray-300 transition-colors">
          Client cases
        </Link>
        <Link href="/" className="hover:text-gray-300 transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300 transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-300 transition-colors">
          Contact
        </Link>
      </div>
      
  
          
          <motion.button
            className="bg-gradient-to-r from-accent-pink to-accent-blue text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:shadow-[0_0_20px_rgba(253,94,255,0.5)] transition-all"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(253,94,255,0.7)",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Get Started Now
          </motion.button>
      
    </header>
  )
}