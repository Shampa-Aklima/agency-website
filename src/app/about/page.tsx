import { HeroSection } from "../component/sections/HeroSection";
import { WorkProcessSection } from "./component/sections/WorkProcessSection";
import { TestimonialsSection } from "./component/sections/TestimonialsSection";
import { CtaSection } from "./component/sections/CtaSection";
import VisionSection from "./component/sections/VisionSection";
import TeamSection from "./component/sections/TeamSection";
import ContactForm from "../component/sections/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-deep-purple text-white relative overflow-hidden">
      <HeroSection
        imageUrl="/bg-about.jpg" // Placeholder for about page
        imageAlt="About Us"
        variant="about"
      />

      <VisionSection />
      <WorkProcessSection
        title="How We Work: A Partnership for Growth"
        description="We don't just build AI solutions—we become an extension of your team. Our approach focuses on understanding your unique challenges, identifying opportunities for automation, and delivering solutions that align perfectly with your business goals."
        processes={[
          {
            icon: "users",
            title: "Deep Collaboration",
            description:
              "We don't just deliver solutions — we co-create them. By working closely with you from day one, we ensure that every product, feature, and function aligns with your business goals and user needs.",
          },
          {
            icon: "settings",
            title: "Agile & Transparent Process",
            description:
              "Our development approach is agile, iterative, and completely transparent. You’ll always know what we’re building, why we’re building it, and how it's progressing — with the flexibility to pivot as your needs evolve.",
          },
          {
            icon: "briefcase",
            title: "Innovation-First Mindset",
            description:
              "We bring cutting-edge technology and forward-thinking strategies to every project. Whether it's AI-powered automation or seamless user experiences, we prioritize innovation to keep you ahead of the curve.",
          },
          {
            icon: "bar-chart",
            title: "Long-Term Success",
            description:
              "Our work doesn’t stop at launch. We stay with you post-delivery to optimize, scale, and support your growth. At Najah, we measure our success by your long-term results.",
          },
        ]}
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
      <TeamSection />
      <CtaSection
        title="Ready to Transform Your Business?"
        description="Let's work together to create a smarter, more efficient future. Partner with AI Automation Agency today."
        buttonText="Schedule a Free Consultation"
        buttonHref="/contact"
      />
      <ContactForm variant="about" />
    </div>
  );
}
