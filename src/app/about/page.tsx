import { HeroSection } from "../components/sections/HeroSection";

import ContactForm from "../components/sections/ContactForm";
import Image from "next/image";
import HowWeWorks from "../components/sections/HowWeWorks";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";

import VisionSection from "./components/sections/VisionSection";
import TeamSection from "./components/sections/TeamSection";
import { CtaSection } from "../components/sections/CtaSection";

export default function Home() {
  const teamData = {
    title: "Meet the Professionals",
    description:
      "Meet the skills and specializations that make our team exceptional.",
    items: [
      {
        name: "Aklima Shampa",
        title: "CEO & Founder, Najah",
        image: "team0.png",
        profileHref: "#",
      },
      {
        name: "Asif Iqbal",
        title: "Project Manager, Najah",
        image: "team2.jpg",
        profileHref: "#",
      },
      {
        name: "Taslima Noor",
        title: "Marketing Manager, Najah",
        image: "contact1.jpg",
        profileHref: "#",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-deep-purple text-white relative overflow-hidden">
      <HeroSection
        imageUrl="/bg-about.jpg" // Placeholder for about page
        imageAlt="About Us"
        
      />
      <VisionSection />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-900/100">
        <TeamSection
          name="team"
          title={teamData.title}
          items={teamData.items}
          colorScheme="purple"
          columns={3}
        />
        <HowWeWorks />
      </div>
      <CtaSection
        title="Ready to Transform Your Business?"
        description="Let's work together to create a smarter, more efficient future. Partner with AI Automation Agency today."
        buttonText="Schedule a Free Consultation"
        buttonHref="/contact"
      />
      <TestimonialsSection
        testimonials={[
          {
            stars: 5,
            quote:
              "AI Automation Agency transformed our business operations. For the first time in decades...",
            name: "Alex Phrindiville",
            title: "CEO, AP Homes",
          },
          {
            stars: 5,
            quote:
              "Their approach to implementation is refreshingly simple yet highly effective for our business.",
            name: "Kenneth Blaber",
            title: "Director, Autoboutique",
          },
          {
            stars: 5,
            quote:
              "The level of collaboration and support we receive is simply outstanding.",
            name: "Sarah Louis",
            title: "CTO, H2H Investments",
          },
        ]}
      />
      <ContactForm variant="about" />
    </div>
  );
}
