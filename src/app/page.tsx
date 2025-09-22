"use client";
import React from "react";
// import AiAgents from "./component/sections/AiAgents";
// import ContactForm from "./component/sections/ContactForm";
// import Hero from "./component/sections/Hero";
// import { CtaSection } from "./component/sections/CtaSection";
// import { CardSection } from "./component/sections/CardSections";
// import WhyUs from "./component/sections/WhyUs.tsx";
// import ParticleBackground from "./component/ui/particle-background";
import { motion} from "framer-motion"
import Hero from "./components/sections/Hero";
import WhyUs from "./components/sections/WhyUs.tsx";
import ParticleBackground from "./components/ui/particle-background";
import { CardSection } from "./components/sections/CardSections";
import AiAgents from "./components/sections/AiAgents";
import { CtaSection } from "./components/sections/CtaSection";
import ContactForm from "./components/sections/ContactForm";

export default function Home() {
  const servicesData = {
    title: "Our Services",
    description:
      "Comprehensive solutions to help your business thrive in the digital landscape.",
    items: [
      {
        icon: "code",
        title: "Web Development",
        description:
          "Custom websites and web applications built with modern technologies.",
      },
      {
        icon: "smartphone",
        title: "Mobile Apps Development",
        description:
          "Native and cross-platform mobile applications for iOS and Android.",
      },
      {
        icon: "cloud",
        title: "CMS Development",
        description: "Scalable cloud infrastructure and deployment solutions.",
      },
      {
        icon: "target",
        title: "Saas Developement",
        description: "Scalable cloud infrastructure and deployment solutions.",
      },
      {
        icon: "e-commerce",
        title: "Multivendor Platforms",
        description: "Scalable cloud infrastructure and deployment solutions.",
      },
      {
        icon: "ai",
        title: "AI Driven Solutions",
        description: "Scalable AI-driven solutions for your business needs.",
      },
    ],
  };
  
  return (
    <main className="min-h-screen min-w-6xl bg-deep-purple">
      <Hero />
      <WhyUs />
      <div className=" relative z-10">
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
          {/* Gradient Blobs with Parallax */}
          <motion.div
            className="parallax-blob absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-accent-pink/30 to-accent-blue/30 rounded-full filter blur-[80px] opacity-30"
            animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="parallax-blob absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-tr from-accent-blue/30 to-accent-pink/30 rounded-full filter blur-[80px] opacity-30"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>

        <CardSection
        title={servicesData.title}
        description={servicesData.description}
        items={servicesData.items}
        colorScheme="purple"
        columns={3}
      />
      </div>
      
      <AiAgents />
      <div className=" relative z-10">
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
          {/* Gradient Blobs with Parallax */}
          <motion.div
            className="parallax-blob absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-accent-pink/30 to-accent-blue/30 rounded-full filter blur-[80px] opacity-30"
            animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="parallax-blob absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-tr from-accent-blue/30 to-accent-pink/30 rounded-full filter blur-[80px] opacity-30"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>
      
 </div>
      <CtaSection
        title="Ready to join the future of digital interaction?"
        description="Let's work together to create a smarter, more efficient future. Partner with AI Automation Agency today."
        buttonText="Get Started Now"
        buttonHref="/contact"
      />
      <ContactForm variant="about" />
    </main>
  );
}
