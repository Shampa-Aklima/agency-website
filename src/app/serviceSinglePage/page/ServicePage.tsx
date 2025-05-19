"use client";


import { Service } from "../../services/types/service"; // wherever your Service type lives

interface Props {
  service: Service;
}

import { HeroSection } from "../components/sections/HeroSection";
import { FeaturedServices } from "../components/sections/FeaturedServices";
import { ComprehensiveServices } from "../components/sections/ComprehensiveServices";
import { ImageCarousel } from "../components/ui/image-carousel";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { CTASection } from "../components/sections/CtaSection";
import { Brain, Workflow, Bot, Target, Lightbulb, Users, Globe } from "lucide-react";


interface Props {
  service: Service;
}

const formatFeaturedServices = (services: string[]) =>
  services.map((service) => ({
    title: service,
    description: service,
    icon: "Brain",
  }));

const formatServiceCategories = (categories: string[]) =>
  categories.map((category) => ({
    title: category,
    description: `Learn more about ${category}`,
    features: [{ name: category }],
    learnMoreLink: `/services/${category.toLowerCase().replace(/\s+/g, "-")}`,
  }));

const formatBenefits = (benefits: string[]) => {
  const icons = [Target, Lightbulb, Users, Globe];
  return benefits.map((benefit, index) => {
    const Icon = icons[index % icons.length];
    return {
      title: benefit,
      description: benefit,
      icon: <Icon className="w-6 h-6 text-purple-400" />,
    };
  });
};

export default function SingleServicePage({ service }: Props) {
  const formattedService = {
    ...service,
    featuredServices: formatFeaturedServices(service.featuredServices),
    serviceCategories: formatServiceCategories(service.serviceCategories),
    benefits: formatBenefits(service.benefits),
    carouselImages: service.carouselImages.map((image) => ({
      src: image,
      alt: `${service.title} feature`,
    })),
  };

  return (
    <main>
      <HeroSection
        title={service.title}
        description={service.description}
        primaryCta={{ text: "Get a Free Consultation", href: "/contact" }}
        secondaryCta={{ text: "Explore Our Services", href: "/services" }}
      />

      <FeaturedServices services={formattedService.featuredServices} />

      <section className="py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ImageCarousel images={formattedService.carouselImages} />
        </div>
      </section>

      <ComprehensiveServices
        title={`Our ${service.title} Services`}
        subtitle="Discover our full range of solutions designed to help you succeed."
        categories={formattedService.serviceCategories}
      />

      <WhyChooseUs
        title="Why Choose Us?"
        subtitle="We are dedicated to creating experiences that push the boundaries of what's possible."
        benefits={formattedService.benefits}
      />

      <CTASection
        title="Start Your Journey Today"
        description="Let our experts help transform your business with innovative solutions."
        primaryCta={{ text: "Get a Free Consultation", href: "/contact" }}
        secondaryCta={{ text: "Schedule a Demo", href: "/demo" }}
        className="bg-purple-950/30"
      />
    </main>
  );
}