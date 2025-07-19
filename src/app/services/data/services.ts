
import type { ServiceType } from "../types/service"



export const servicesData: ServiceType[] = [
  {
    id: "web-applications",
    type: "Web applications",
    title: "Web applications",
    description: "We develop complex business applications across multiple platforms and create seamless integrations with both existing and new systems. With expertise in advanced software development, we assist companies in scaling up and managing their digital solutions.",
    services: [
      { name: "Custom Web Development" },
      { name: "UX/UI Design" },
      { name: "Responsive Design" },
      { name: "Performance Optimization" },
    ],
    learnMoreLink: "/services/web-applications",
  },
  {
    id: "saas-applications",
    type: "saas applications",
    title: "Saas Applications",
    description: "We create websites and e-commerce solutions that not only look great – they perform. With WordPress, Strapi, and Next.js, we build fast, responsive, and secure websites tailored to your business.",
    services: [
      { name: "eCommerce" },
      { name: "Telemedicine" },
      { name: "Booking Systems" },
      { name: "Learning Management Systems" },
      
    ],
    learnMoreLink: "/services/saas-applications",
  },
  
  
  {
    id: "app-development",
    type: "app-development",
    title: "App Development",
    description: "Custom mobile and web applications tailored to your business needs.",
    services: [{ name: "iOS Development" }, { name: "Android Development" }, { name: "Web Development" }],
    learnMoreLink: "/services/app-development",
  },

  {
    id: "multi-platform-development",
    type: "multi-platform-development",
    title: "Multi-Platform Development",
    description:
      "Blending physical and digital worlds with innovative solutions for education, training, and entertainment.",
    services: [
      { name: "Educational Tools" },
      { name: "Training MR" },
      { name: "Entertainment" },
      { name: "Collaborative Spaces" },
    ],
    learnMoreLink: "/services/multi-platform-development",
  },
  {
    id: "web-development",
    type: "web-development",
    title: "Web Development",
    description: "Building responsive and high-performance websites.",
    services: [
      { name: "Virtual Showrooms" },
      { name: "3D Product Visualization" },
      { name: "VR Shopping" },
      { name: "Interactive Catalogs" },
    ],
    learnMoreLink: "/services/immersive-commerce",
  },
  
]
