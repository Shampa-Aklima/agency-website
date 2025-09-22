import { HeroSection } from "../component/sections/HeroSection";
import ContactForm from "../component/sections/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-deep-purple text-white relative overflow-hidden">
      <HeroSection
              imageUrl="/woman2.jpg" // Placeholder for service page
              imageAlt="contact"
              variant="contact"
            />
            

          <ContactForm variant="about" />
        </div>

      
  

  );
}
