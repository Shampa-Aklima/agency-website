"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
}

interface ServicePageHeroProps {
  title: string;
  description: string;
  imageUrl: string;
  features: (Feature | string)[];
}

export default function ServicePageHero({ 
  title, 
  description, 
  imageUrl, 
  features 
}: ServicePageHeroProps) {
  // Convert string features to proper feature objects
  const normalizedFeatures: Feature[] = features.map((feature, index) => {
    if (typeof feature === 'string') {
      return {
        title: feature,
        description: `Professional ${feature.toLowerCase()} services tailored to your needs.`
      };
    }
    return feature;
  });

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
            {title}
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video bg-black/50 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(142,124,255,0.2)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={imageUrl || "/placeholder.svg"}
                  alt={`${title} Demo`}
                  height={750}
                  width={1200}
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-gradient-to-br from-pink-500 to-blue-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white text-sm sm:text-base font-medium">
              Premium Service
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {normalizedFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 sm:mr-4 bg-white/10 p-2 rounded-lg">
                    <div className="h-6 w-6 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm sm:text-base font-medium">
                      {feature.title}
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm mt-0.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="rounded-full text-sm sm:text-base w-full sm:w-auto bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600"
            >
              Get Started with {title}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
