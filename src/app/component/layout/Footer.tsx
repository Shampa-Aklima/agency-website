import Link from "next/link"
import { Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-deep-purple border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-white font-bold text-xl bg-gradient-to-r from-accent-pink to-accent-blue bg-clip-text text-transparent">
              The Metaverse Company
            </h3>
            <p className="text-white/60 mt-2">Empowering Businesses and Individuals in the Digital Frontier</p>
          </div>

          <div className="flex space-x-6">
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Nazah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
