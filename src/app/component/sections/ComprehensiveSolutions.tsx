"use client";

import { motion } from "framer-motion";

export default function ComprehensiveSolutions() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Comprehensive Metaverse Solutions
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            End-to-end solutions for businesses looking to establish their
            presence in the metaverse.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Where Innovation Meets Imagination
              </h3>
              <p className="text-white/70 mb-6">
                At Najah, our vision transcends borders. We harness global
                innovation to solve local challenges. From AI-driven strategies
                to immersive XR experiences, we bring world-class solutions to
                your doorstep. Join us in shaping the future of digital
                interaction.
              </p>
              <p className="text-white/70 mb-6">
                Our team of experts combines technical prowess with creative
                vision to deliver solutions that not only meet your current
                needs but position you for future growth in this rapidly
                evolving digital landscape.
              </p>
              <button className="bg-gradient-to-r from-accent-pink to-accent-blue text-white px-6 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(253,94,255,0.5)] transition-all">
                Explore Solutions
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/20 to-accent-blue/20 rounded-2xl transform rotate-3 scale-[0.97]"></div>
              <img
                src="/woman.jpg"
                alt="Metaverse Solutions"
                className="rounded-2xl w-full h-auto relative z-10 border border-white/10"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
