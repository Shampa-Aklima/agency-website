"use client";
import React from "react";
import AiAgents from "./component/sections/AiAgents";
import AiFeatures from "./component/sections/AiFeatures";
import ContactForm from "./component/sections/ContactForm";
import Hero from "./component/sections/Hero";
import ServiceGrid from "./component/sections/ServiceGrid";
import WhyChooseUs from "./component/sections/WhyChooseUs";
import ScrollDivider from "./component/sections/ScrollDivider";
import { CtaSection } from "./component/sections/CtaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-purple">
      <Hero />
      <WhyChooseUs />
      <AiFeatures />
      {/* <ScrollDivider
        initialHeight={40}
        maxHeight={300}
        width={3}
        color="bg-blue-500"
      /> */}
      <ServiceGrid />
      <CtaSection
              title="Ready to join the future of digital interaction?"
              description="Let's work together to create a smarter, more efficient future. Partner with AI Automation Agency today."
              buttonText="Get Started Now"
              buttonHref="/contact"
            />
      <AiAgents />
     <ContactForm variant="home" /> 
      
    </main>
  );
}
