import Link from "next/link"
import { Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-deep-purple border-t border-white/10 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg sm:text-xl bg-gradient-to-r from-accent-pink to-accent-blue bg-clip-text text-transparent">
              The Metaverse Company
            </h3>
            <p className="text-white/60 mt-2 text-sm sm:text-base max-w-md">
              Empowering Businesses and Individuals in the Digital Frontier
            </p>
          </div>

          <div className="flex space-x-6">
            <Link 
              href="#" 
              className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </Link>
            <Link 
              href="#" 
              className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link 
              href="#" 
              className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Nazah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
