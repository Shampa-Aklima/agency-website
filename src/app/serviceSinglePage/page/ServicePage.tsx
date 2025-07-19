"use client"



import ServiceGrid from "@/app/component/sections/ServiceGrid";
import type { Service } from "../../services/types/service" // wherever your Service type lives
import { HeroSection } from "../components/sections/HeroSection"


interface Props {
  service: Service;
}

export default function SingleServicePage({ service }: Props) {
 

  return (
    <div className="min-h-screen bg-deep-purple text-white relative overflow-hidden">
      <HeroSection
        imageUrl="/bg8.jpg" // Placeholder for service page
        imageAlt="Service Details"
        variant="single-service"
      />
    <div className="container mx-auto px-4 py-8">

    </div>
    </div>
  )
}