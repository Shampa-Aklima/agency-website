

export interface Service {
  slug: string;
  title: string;
  description: string;
  featuredServices: string[];
  serviceCategories: string[];
  benefits: string[];
  carouselImages: string[];
}

export const services: Service[] = [
  {
    slug: "creator-ai",
    title: "Creator AI Development",
    description: "Empower your content creation with our advanced AI tools tailored for creators. Automate editing, content generation, and much more.",
    featuredServices: [
      "AI Video Editor",
      "Script Generator",
      "Voice Cloning",
    ],
    serviceCategories: [
      "YouTube Automation",
      "Content Repurposing",
      "Social Media Boosting",
    ],
    benefits: [
      "Save hours of manual editing",
      "Get AI-assisted content ideas",
      "Boost your online presence",
    ],
    carouselImages: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
  },
  {
    slug: "automation-workflows",
    title: "Automation Workflows",
    description: "Streamline your repetitive tasks with powerful no-code and low-code automation workflows built to scale your business efficiently.",
    featuredServices: [
      "Zapier & Make Integration",
      "Email Workflow Automation",
      "CRM Integration",
    ],
    serviceCategories: [
      "Business Automation",
      "Lead Management",
      "Task Scheduling",
    ],
    benefits: [
      "Reduce manual effort",
      "Eliminate human error",
      "Scale operations quickly",
    ],
    carouselImages: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    description: "Custom AI agents that automate specific business functions to boost productivity and reduce operational costs.",
    featuredServices: [
      "Customer Support Bots",
      "Sales Automation Agents",
      "Data Processing Assistants",
    ],
    serviceCategories: [
      "Customer Support",
      "Sales Automation",
      "Data Analysis",
    ],
    benefits: [
      "24/7 customer assistance",
      "Automate repetitive tasks",
      "Improve employee productivity",
    ],
    carouselImages: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
  },
  {
    slug: "virtual-reality",
    title: "Virtual Reality (VR) Solutions",
    description: "Immersive virtual reality experiences for training, marketing, and engagement that transform how you interact with customers and employees.",
    featuredServices: [
      "Corporate Training",
      "Virtual Showrooms",
      "Interactive Experiences",
    ],
    serviceCategories: [
      "Training Solutions",
      "Marketing Experiences",
      "Virtual Events",
    ],
    benefits: [
      "Enhanced learning retention",
      "Reduced training costs",
      "Increased customer engagement",
    ],
    carouselImages: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
  },
  {
    slug: "augmented-reality",
    title: "Augmented Reality (AR) Experiences",
    description: "Engaging AR web and mobile solutions for retail, marketing, and industry applications that blend digital content with the real world.",
    featuredServices: [
      "Product Visualization",
      "Interactive Catalogs",
      "AR Marketing Campaigns",
    ],
    serviceCategories: [
      "Retail AR",
      "Marketing Solutions",
      "Industrial Applications",
    ],
    benefits: [
      "Increase product confidence",
      "Reduce return rates",
      "Create memorable brand experiences",
    ],
    carouselImages: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
  },
];

console.log("Services data loaded:", services.length, "services");