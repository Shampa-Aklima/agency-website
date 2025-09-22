"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Menu, X } from 'lucide-react'

import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

const services = [
  { title: "Web Development", slug: "web-development" },
  { title: "Mobile Apps", slug: "mobile-apps" },
  { title: "UI/UX Design", slug: "ui-ux-design" },
  { title: "Digital Marketing", slug: "digital-marketing" },
  { title: "SEO Services", slug: "seo-services" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-deep-purple shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center max-h-[80px]">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={300}
              height={80}
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8  text-white hover:text-white/80 transition-colors font-medium">
            <Link
              href="/">Home</Link>
          <Link href="/about"> About</Link>
{/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-white hover:text-white/80 transition-colors font-medium">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {services.map((service) => (
                  <DropdownMenuItem key={service.slug} asChild>
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full cursor-pointer"
                    >
                      {service.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/pricing">Pricing</Link>
<Link href="/contact">Contact</Link>

            <Button>Get a Quote</Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/"
                    className="text-lg font-medium hover:text-gray-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  
                  <Link
                    href="/about"
                    className="text-lg font-medium hover:text-gray-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>

                  <div className="space-y-2">
                    <span className="text-lg font-medium text-gray-900">Services</span>
                    <div className="pl-4 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block text-gray-600 hover:text-gray-900 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/pricing"
                    className="text-lg font-medium hover:text-gray-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </Link>

                  <Link
                    href="/contact"
                    className="text-lg font-medium hover:text-gray-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>

                  <Button className="mt-4" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
