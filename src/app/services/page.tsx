import Image from "next/image";
import { services } from "../services/data/services-data";
import { HeroSection } from "../serviceSinglePage/components/sections/HeroSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


 export default function ServicesPage() {

    const serviceGroups = [];
    for (let i = 0; i < services.length; i += 3) {
      serviceGroups.push(services.slice(i, i + 3));
    }
  
    return (
      <div className="min-h-screen bg-deep-purple text-white relative overflow-hidden">
        <HeroSection 
          title="Our Services"
          description="Comprehensive solutions tailored to transform your business in the digital age"
          primaryCta={{ text: "Get Started", href: "/contact" }}
          secondaryCta={{ text: "Learn More", href: "#services" }}
        />
        
  
        <div className="flex-grow">
          <div id="services" className="container mx-auto py-16 px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Explore Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions tailored to transform your business in the digital age
              </p>
            </div>
  
            {serviceGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {group.map((service, index) => (
                  <Card
                    key={index}
                    className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-purple-500"
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl text-purple-800">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-base text-gray-700 mb-6">
                        {service.description}
                      </CardDescription>
                      <div className="space-y-4">
                        {service.featuredServices.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <span className="mr-2 text-purple-500">•</span>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                      >
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
