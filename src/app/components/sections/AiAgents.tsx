"use client";

import { motion } from "framer-motion";
import { Play, Bot, Brain, Zap } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const agentFeatures = [
  {
    icon: <Bot className="h-6 w-6 text-accent-pink" />,
    title: "Custom AI Agents",
    description:
      "Tailored AI agents designed specifically for your business needs and workflows.",
  },
  {
    icon: <Brain className="h-6 w-6 text-accent-blue" />,
    title: "Continuous Learning",
    description:
      "Our agents learn and improve over time, adapting to your evolving requirements.",
  },
  {
    icon: <Zap className="h-6 w-6 text-accent-pink" />,
    title: "Seamless Integration",
    description:
      "Easily integrate our AI agents with your existing systems and platforms.",
  },
  {
    icon: <Bot className="h-6 w-6 text-accent-pink" />,
    title: "Custom AI Agents",
    description:
      "Tailored AI agents designed specifically for your business needs and workflows.",
  },
];

export default function AiAgents() {
  return (
    <section className=" py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
            Empower Your Business with Intelligent AI Agents
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
            Our AI agents work tirelessly to automate tasks, provide insights,
            and enhance productivity.
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
              <div className="absolute inset-0 flex items-start justify-center">
                <Image
                  src="/hero0.jpeg"
                  alt="AI Agents Demo"
                  height={750}
                  width={1200}
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-gradient-to-br from-accent-pink to-accent-blue px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white text-sm sm:text-base font-medium"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {agentFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 sm:mr-4 bg-white/10 p-2 rounded-lg">
                    {feature.icon}
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
              className="rounded-full text-sm sm:text-base w-full sm:w-auto"
            >
              Discover AI Agents That Can Transform Your Business
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
