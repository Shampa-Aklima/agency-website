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
    id: "virtual-reality",
    type: "virtual-reality",
    title: "Virtual Reality (VR) Solutions",
    description: "Immersive virtual reality applications for training, marketing, and customer experiences.",
    services: [
      { name: "Corporate Training" },
      { name: "Marketing Campaigns" },
      { name: "Virtual Showrooms" },
      { name: "Product Demonstrations" },
    ],
    learnMoreLink: "/services/virtual-reality",
  },
  {
    id: "augmented-reality",
    type: "augmented-reality",
    title: "Augmented Reality (AR) Experiences",
    description: "Engaging AR apps with seamless UX solutions for retail, marketing, and industry applications.",
    services: [{ name: "Retail AR" }, { name: "Industrial AR" }, { name: "WebAR" }, { name: "Brand Promotion" }],
    learnMoreLink: "/services/augmented-reality",
  },
  {
    id: "mixed-reality",
    type: "mixed-reality",
    title: "Mixed Reality (MR) Integration",
    description:
      "Blending physical and digital worlds with innovative solutions for education, training, and entertainment.",
    services: [
      { name: "Educational Tools" },
      { name: "Training MR" },
      { name: "Entertainment" },
      { name: "Collaborative Spaces" },
    ],
    learnMoreLink: "/services/mixed-reality",
  },
  {
    id: "immersive-commerce",
    type: "immersive-commerce",
    title: "Immersive Commerce",
    description: "Next-generation shopping experiences and customer engagement.",
    services: [
      { name: "Virtual Showrooms" },
      { name: "3D Product Visualization" },
      { name: "VR Shopping" },
      { name: "Interactive Catalogs" },
    ],
    learnMoreLink: "/services/immersive-commerce",
  },
  
]
