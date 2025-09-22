import { notFound } from "next/navigation"
import type { Service } from "../types/service"
import { services } from "../data/services-data"
import { ServiceImageGallery } from "@/app/components/sections/ServiceImageGallery"
import { PortfolioGrid } from "@/app/components/sections/PortfolioGrid"

import { ServiceMythsAccordion } from "@/app/components/sections/ServiceMythsAccordion"
import Image from "next/image"
import { HeroSection } from "@/app/components/sections/HeroSection"
import ServicePageHero from "@/app/components/sections/ServicePageHero"
import { ServiceImageCarousel } from "@/app/components/sections/ServiceImageCarousel"
import { ServiceCaseStudies } from "@/app/components/sections/ServiceCaseStudies"
import ServiceValueCreation from "@/app/components/sections/ServiceValueCreation"


async function getServiceData(slug: string): Promise<Service | null> {
  console.log("Looking for service with slug:", slug)
  console.log(
    "Available services:",
    services.map((s) => s.slug),
  )
  const serviceData = services.find((service: Service) => service.slug === slug)
  console.log("Found service:", serviceData ? serviceData.hero.title : "Not found")
  return serviceData || null
}

type PageProps = {
  params: { slug: string }
}

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = params
  console.log("Service page accessed with slug:", resolvedParams.slug)
  
  const data = await getServiceData(resolvedParams.slug)
  
  if (!data) {
    console.log("Service not found, showing 404")
    notFound()
  }

  return (
    <div className="min-h-screen bg-deep-purple text-white relative overflow-hidden">
      {/* Debug info - remove this later */}
      <HeroSection
        imageUrl="/service1.jpg" // Placeholder for about page
        imageAlt="About Us"
        
      />

      {/* Hero Section */}
      <ServicePageHero
        title={data.hero.title}
        description={data.hero.description}
        imageUrl={data.hero.imageUrl}
        features={data.hero.features}
      />
 {/* <ServiceValueCreation
        valueCreation={{
          title: data.valueCreation.title,
          description: data.valueCreation.description,
          points: data.valueCreation.values.map(value => ({
            title: value.title,
            description: value.description
          }))
        }}
        heroImage={data.hero.imageUrl}
        ctaText={`Discover ${data.hero.title} Solutions`}
      /> */}
<ServiceImageGallery images={data.galleryImages} />
{/* <ServiceImageCarousel images={data.galleryImages} /> */}
     
      <ServiceMythsAccordion {...data.myths} />
      <ServiceValueCreation
        valueCreation={{
          title: data.valueCreation.title,
          description: data.valueCreation.description,
          points: data.valueCreation.values.map(value => ({
            title: value.title,
            description: value.description
          }))
        }}
        heroImage={data.hero.imageUrl}
        ctaText={`Discover ${data.hero.title} Solutions`}
      />
      {/* Portfolio/Case Studies Section */}
      <PortfolioGrid
        title={data.caseStudies.title}
        description={data.caseStudies.description}
        items={data.caseStudies.studies.map((study) => ({
          image: study.imageUrl,
          title: study.title,
          description: study.description,
        }))}
        colorScheme="purple"
        columns={data.caseStudies.studies.length >= 3 ? 3 : 2}
      />

      {/* Call to Action Section */}
      <section className="py-16 bg-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            Lets discuss how our {data.hero.title.toLowerCase()} services can help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Generate static params for all services
export async function generateStaticParams() {
  console.log(
    "Generating static params for services:",
    services.map((s) => s.slug),
  )
  return services.map((service) => ({
    slug: service.slug,
  }))
}

// Generate metadata dynamically for each service
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const resolvedParams = params
  const service = await getServiceData(resolvedParams.slug)
  
  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.hero.title} | Your Company`,
    description: service.hero.description,
    openGraph: {
      title: service.hero.title,
      description: service.hero.description,
      images: [service.hero.imageUrl],
    },
  }
}
