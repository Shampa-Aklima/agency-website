import Image from "next/image";
import { services } from "../services/data/services-data";
import { HeroSection } from "../component/sections/HeroSection";


export default function ServicesPage() {
  const serviceGroups = [];
  for (let i = 0; i < services.length; i += 3) {
    serviceGroups.push(services.slice(i, i + 3));
  }

  return (
    <div className="h-screen w-full bg-deep-purple text-white relative overflow-hidden">
      <HeroSection
        imageUrl="/bg8.jpg" 
        imageAlt="service"
        variant="service"
      />
      
      </div>
  );
}
