import type { Service } from "../types/service"

export const services: Service[] = [
  {
    slug: "web-development",
    hero: {
      title: "Web Development",
      description: "Create powerful, scalable web applications that drive business growth and deliver exceptional user experiences.",
      imageUrl: "/woman2.jpg?height=600&width=800&text=Web+Development",
      features: [
        {
          title: "Custom Web Applications",
          description: "Tailored web applications designed specifically for your business needs and workflows."
        },
        {
          title: "Backend Development",
          description: "Robust server-side solutions with secure APIs and database integration."
        },
        {
          title: "Performance Optimization",
          description: "Lightning-fast websites optimized for speed, SEO, and user experience."
        },
        {
          title: "Maintenance & Support",
          description: "Ongoing support and maintenance to keep your website running smoothly."
        }
      ]
    },
    galleryImages: [
      "/gym.jpg?height=400&width=600&text=Web+Project+1",
      "/doctor.jpg?height=400&width=600&text=Web+Project+2",
      "/barber.jpg?height=400&width=600&text=Web+Project+3",
      "/hotel.jpg?height=400&width=600&text=Web+Project+4",
      "/business.jpg?height=400&width=600&text=Web+Project+5",
      "/lawyer.jpg?height=400&width=600&text=Web+Project+6",
      "/education.jpg?height=400&width=600&text=Web+Project+7",
      "/ngo.jpg?height=400&width=600&text=Web+Project+8",
      "/realestate.jpg?height=400&width=600&text=Web+Project+9",
      "/ecommerce.jpg?height=400&width=600&text=Web+Project+10",
      "/business2.jpg?height=400&width=600&text=Web+Project+11",
      "/salon.jpg?height=400&width=600&text=Web+Project+12",
    ],
    expertise: {
      title: "Our Web Development Expertise",
      description: "We combine cutting-edge technologies with proven methodologies to deliver web solutions that exceed expectations.",
      skills: [
        {
          name: "Frontend Development",
          percentage: 95,
          description: "React, Next.js, TypeScript, and modern CSS frameworks"
        },
        {
          name: "Backend Development",
          percentage: 90,
          description: "Node.js, Python, databases, and cloud infrastructure"
        },
        {
          name: "UI/UX Integration",
          percentage: 88,
          description: "Seamless design-to-code implementation"
        },
        {
          name: "Performance Optimization",
          percentage: 92,
          description: "Speed, SEO, and Core Web Vitals optimization"
        }
      ]
    },
    valueCreation: {
      title: "Value We Create",
      description: "Our web development services deliver measurable business impact through innovative solutions.",
      values: [
        {
          icon: "🚀",
          title: "Faster Time to Market",
          description: "Accelerate your product launch with our agile development process"
        },
        {
          icon: "📈",
          title: "Increased Conversions",
          description: "Optimize user experience to boost engagement and sales"
        },
        {
          icon: "💰",
          title: "Cost Efficiency",
          description: "Reduce long-term maintenance costs with clean, scalable code"
        },
        {
          icon: "🔒",
          title: "Enterprise Security",
          description: "Built-in security measures to protect your business and users"
        }
      ]
    },
    myths: {
      title: "Common Web Development Myths",
      description: "Let's debunk some misconceptions about modern web development.",
      myths: [
        {
          question: "Is web development expensive and time-consuming?",
          answer: "Modern development frameworks and our streamlined process make web development more efficient and cost-effective than ever. We focus on MVP approaches and iterative development to deliver value quickly."
        },
        {
          question: "Do I need a separate mobile app if I have a website?",
          answer: "Not necessarily. Progressive Web Apps (PWAs) can provide app-like experiences through web browsers, often eliminating the need for separate native apps while reducing development costs."
        },
        {
          question: "Will my website be secure from cyber attacks?",
          answer: "We implement industry-standard security practices including HTTPS, input validation, authentication systems, and regular security audits to protect your website and user data."
        }
      ]
    },
    caseStudies: {
      title: "Web Development Success Stories",
      description: "See how we've helped businesses transform their digital presence with custom web solutions.",
      studies: [
        {
          title: "E-commerce Platform Redesign",
          description: "Increased conversion rates by 150% with a modern, user-friendly design and optimized checkout process.",
          imageUrl: "/placeholder.svg?height=300&width=400&text=E-commerce+Case+Study",
          tags: ["E-commerce", "React", "Performance"],
          link: "https://example.com/ecommerce-case-study"
        },
        {
          title: "SaaS Dashboard Development",
          description: "Built a comprehensive analytics dashboard that reduced customer support tickets by 40%.",
          imageUrl: "/placeholder.svg?height=300&width=400&text=SaaS+Dashboard",
          tags: ["SaaS", "Dashboard", "Analytics"],
          link: "https://example.com/saas-dashboard"
        },
        {
          title: "Corporate Website Overhaul",
          description: "Modernized corporate presence with improved SEO, resulting in 200% increase in organic traffic.",
          imageUrl: "/placeholder.svg?height=300&width=400&text=Corporate+Website",
          tags: ["Corporate", "SEO", "Branding"],
          link: "https://example.com/corporate-website"
        }
      ]
    }
  },
  {
    slug: "mobile-apps",
    hero: {
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications that engage users and drive business growth.",
      imageUrl: "/placeholder.svg?height=600&width=800&text=Mobile+App+Development",
      features: [
        {
          title: "iOS & Android Apps",
          description: "Native mobile applications for both iOS and Android platforms with optimal performance."
        },
        {
          title: "Cross-Platform Solutions",
          description: "Efficient development using React Native and Flutter for multiple platforms."
        },
        {
          title: "App Store Optimization",
          description: "Strategic optimization to improve visibility and downloads in app stores."
        },
        {
          title: "Push Notifications",
          description: "Engage users with targeted push notifications and real-time updates."
        }
      ]
    },
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=Mobile+App+1",
      "/placeholder.svg?height=400&width=600&text=Mobile+App+2",
      "/placeholder.svg?height=400&width=600&text=Mobile+App+3",
      "/placeholder.svg?height=400&width=600&text=Mobile+App+4"
    ],
    expertise: {
      title: "Mobile Development Mastery",
      description: "From concept to app store, we deliver mobile experiences that users love and businesses depend on.",
      skills: [
        {
          name: "iOS Development",
          percentage: 92,
          description: "Swift, SwiftUI, and native iOS frameworks"
        },
        {
          name: "Android Development",
          percentage: 90,
          description: "Kotlin, Java, and Android SDK expertise"
        },
        {
          name: "Cross-Platform",
          percentage: 88,
          description: "React Native and Flutter development"
        },
        {
          name: "App Store Success",
          percentage: 85,
          description: "ASO, submission, and marketing strategies"
        }
      ]
    },
    valueCreation: {
      title: "Mobile App Value Proposition",
      description: "Transform your business with mobile apps that deliver real results and user engagement.",
      values: [
        {
          icon: "📱",
          title: "Enhanced User Engagement",
          description: "Keep users connected with push notifications and offline capabilities"
        },
        {
          icon: "💎",
          title: "Premium User Experience",
          description: "Native performance and platform-specific design patterns"
        },
        {
          icon: "📊",
          title: "Valuable User Insights",
          description: "Detailed analytics to understand user behavior and preferences"
        },
        {
          icon: "🌍",
          title: "Global Reach",
          description: "Distribute your app worldwide through app stores"
        }
      ]
    },
    myths: {
      title: "Mobile App Development Myths",
      description: "Separating fact from fiction in mobile app development.",
      myths: [
        {
          question: "Do I need separate apps for iOS and Android?",
          answer: "Not always. Cross-platform frameworks like React Native allow us to build apps that work on both platforms with shared codebase, reducing development time and costs by up to 40%."
        },
        {
          question: "Are mobile apps too expensive for small businesses?",
          answer: "Mobile app development has become more accessible. We offer MVP approaches and phased development to fit various budgets, starting with core features and expanding over time."
        },
        {
          question: "Will my app get approved by app stores?",
          answer: "We follow all app store guidelines and best practices. Our experience with app store submissions ensures high approval rates and helps avoid common rejection reasons."
        }
      ]
    },
    caseStudies: {
      title: "Mobile App Success Stories",
      description: "Discover how our mobile apps have transformed businesses and delighted users.",
      studies: [
        {
          title: "Fitness Tracking App",
          description: "Achieved 100K+ downloads in first 6 months with 4.8-star rating and high user retention.",
          imageUrl: "/placeholder.svg?height=300&width=400&text=Fitness+App",
          tags: ["Health", "React Native", "Analytics"],
          link: "https://example.com/fitness-app"
        },
        {
          title: "Food Delivery Platform",
          description: "Built scalable delivery app handling 10K+ daily orders with real-time tracking and payments.",
          imageUrl: "/placeholder.svg?height=300&width=400&text=Food+Delivery",
          tags: ["Delivery", "Real-time", "Payments"],
          link: "https://example.com/ecommerce-case-study"
        },
        {
          title: "E-learning Mobile App",
          description: "Created educational app with 500K+ active users and 95% completion rate for courses.",
          imageUrl: "/placeholder.svg?height=300&width=400&text=E-learning+App",
          tags: ["Education", "Mobile", "User Engagement"],
          link: "https://example.com/e-learning-app"
        }
      ]
    }
  },
  {
    slug: "ui-ux-design",
    hero: {
      title: "UI/UX Design",
      description: "Create intuitive, beautiful user experiences that convert visitors into customers and delight users at every touchpoint.",
      imageUrl: "/placeholder.svg?height=600&width=800&text=UI+UX+Design",
      features: [
        {
          title: "User Research & Testing",
          description: "In-depth user research and usability testing to understand your audience and optimize experiences."
        },
        {
          title: "Wireframing & Prototyping",
          description: "Interactive prototypes and wireframes to visualize and test design concepts before development."
        },
        {
          title: "Visual Design Systems",
          description: "Comprehensive design systems that ensure consistency across all touchpoints and platforms."
        },
        {
          title: "Conversion Optimization",
          description: "Data-driven design decisions that maximize conversions and improve business metrics."
        }
      ]
    },
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=UI+Design+1",
      "/placeholder.svg?height=400&width=600&text=UX+Research+2",
      "/placeholder.svg?height=400&width=600&text=Prototype+3",
      "/placeholder.svg?height=400&width=600&text=Design+System+4"
    ],
    expertise: {
      title: "Design Excellence",
      description: "We combine user psychology, design principles, and business goals to create experiences that work.",
      skills: [
        {
          name: "User Research",
          percentage: 94,
          description: "User interviews, surveys, and behavioral analysis"
        },
        {
          name: "Visual Design",
          percentage: 96,
          description: "Modern aesthetics with purposeful functionality"
        },
        {
          name: "Prototyping",
          percentage: 90,
          description: "Interactive prototypes for testing and validation"
        },
        {
          name: "Conversion Optimization",
          percentage: 88,
          description: "Data-driven design decisions that increase conversions"
        }
      ]
    },
    valueCreation: {
      title: "Design Impact",
      description: "Great design isn't just about looks—it's about creating business value through better user experiences.",
      values: [
        {
          icon: "🎯",
          title: "Higher Conversion Rates",
          description: "Optimized user flows that guide users toward desired actions"
        },
        {
          icon: "❤️",
          title: "Improved User Satisfaction",
          description: "Intuitive interfaces that users love to interact with"
        },
        {
          icon: "🔄",
          title: "Reduced Support Costs",
          description: "Clear, self-explanatory designs minimize user confusion"
        },
        {
          icon: "🏆",
          title: "Competitive Advantage",
          description: "Stand out with superior user experience design"
        }
      ]
    },
    myths: {
      title: "UI/UX Design Myths",
      description: "Common misconceptions about user experience design and the reality behind them.",
      myths: [
        {
          question: "Is good design just about making things look pretty?",
          answer: "Great design is about solving problems and creating intuitive experiences. While aesthetics matter, the primary goal is usability, accessibility, and achieving business objectives through thoughtful user experience."
        },
        {
          question: "Can't developers just handle the design part?",
          answer: "While developers are skilled at implementation, UX design requires specialized knowledge of user psychology, research methods, and design principles. Dedicated designers ensure optimal user experiences."
        },
        {
          question: "Is user testing really necessary for small projects?",
          answer: "User testing is valuable for projects of all sizes. Even simple usability tests can reveal critical issues and opportunities for improvement that significantly impact user satisfaction and business results."
        }
      ]
    },
    caseStudies: {
      title: "Design Transformation Stories",
      description: "See how strategic design improvements have delivered measurable business results.",
      studies: [
        {
          title: "SaaS Platform Redesign",
          description: "Redesigned complex dashboard resulting in 60% reduction in user onboarding time and 45% increase in feature adoption.",
          imageUrl: "/placeholder.svg?height=300&width=400&text=SaaS+Redesign",
          tags: ["SaaS", "Dashboard", "User Onboarding"],
          link: "https://example.com/saas-redesign"
        },
        {
          title: "E-commerce UX Optimization",
          description: "Streamlined checkout process and product discovery, leading to 35% increase in conversion rate and 25% boost in average order value.",
          imageUrl: "/placeholder.svg?height=300&width=400&text=E-commerce+UX",
          tags: ["E-commerce", "Conversion", "UX Research"],
          link: "https://example.com/ecommerce-case-study"
        },
        {
          title: "Mobile App User Experience",
          description: "Complete UX overhaul of fitness app resulted in 4.8-star rating and 80% improvement in user retention rates.",
          imageUrl: "/placeholder.svg?height=300&width=400&text=Mobile+UX",
          tags: ["Mobile", "User Retention", "App Design"],
          link: "https://example.com/fitness-app"
        }
      ]
    }
  },
  {
    slug: "digital-marketing",
    hero: {
      title: "Digital Marketing",
      description: "Drive growth with data-driven marketing strategies that reach your target audience and deliver measurable ROI.",
      imageUrl: "/placeholder.svg?height=600&width=800&text=Digital+Marketing",
      features: [
        {
          title: "Social Media Marketing",
          description: "Strategic social media campaigns that build brand awareness and engage your target audience."
        },
        {
          title: "Content Strategy",
          description: "Compelling content that tells your brand story and drives meaningful engagement with customers."
        },
        {
          title: "PPC Advertising",
          description: "Targeted pay-per-click campaigns that maximize ROI and drive qualified traffic to your website."
        },
        {
          title: "Email Marketing",
          description: "Personalized email campaigns that nurture leads and maintain customer relationships."
        }
      ]
    },
    galleryImages: [
      "/placeholder.svg?height=400&width=600&text=Social+Media+Campaign",
      "/placeholder.svg?height=400&width=600&text=Content+Marketing",
      "/placeholder.svg?height=400&width=600&text=PPC+Dashboard",
      "/placeholder.svg?height=400&width=600&text=Email+Campaign"
    ],
    expertise: {
      title: "Marketing Expertise",
      description: "We leverage the latest digital marketing tools and strategies to maximize your online presence and ROI.",
      skills: [
        {
          name: "Social Media Strategy",
          percentage: 93,
          description: "Platform-specific content and community management"
        },
        {
          name: "Paid Advertising",
          percentage: 91,
          description: "Google Ads, Facebook Ads, and programmatic advertising"
        },
        {
          name: "Content Marketing",
          percentage: 89,
          description: "SEO-optimized content that engages and converts"
        },
        {
          name: "Analytics & Reporting",
          percentage: 95,
          description: "Data-driven insights and performance optimization"
        }
      ]
    },
    valueCreation: {
      title: "Marketing ROI",
      description: "Our digital marketing strategies deliver measurable results that directly impact your bottom line.",
      values: [
        {
          icon: "📈",
          title: "Increased Brand Awareness",
          description: "Expand your reach and build recognition in your target market"
        },
        {
          icon: "🎯",
          title: "Qualified Lead Generation",
          description: "Attract high-quality prospects ready to convert"
        },
        {
          icon: "💰",
          title: "Improved ROI",
          description: "Optimize campaigns for maximum return on marketing investment"
        },
        {
          icon: "🔄",
          title: "Customer Retention",
          description: "Build lasting relationships through strategic engagement"
        }
      ]
    },
    myths: {
      title: "Digital Marketing Myths",
      description: "Debunking common misconceptions about modern digital marketing.",
      myths: [
        {
          question: "Is digital marketing only for big companies?",
          answer: "Digital marketing is highly scalable and can be tailored to any budget. Small businesses often see better ROI due to more targeted, focused campaigns and the ability to compete on creativity rather than just budget."
        },
        {
          question: "Do I need to be on every social media platform?",
          answer: "Quality over quantity is key. It's better to have a strong presence on 2-3 platforms where your audience is active rather than spreading thin across all platforms. We help identify the right channels for your business."
        },
        {
          question: "Can I just set up ads and let them run automatically?",
          answer: "Successful digital marketing requires ongoing optimization, testing, and strategy adjustments. We continuously monitor and refine campaigns to ensure optimal performance and ROI."
        }
      ]
    },
    caseStudies: {
      title: "Marketing Success Stories",
      description: "Real results from our digital marketing campaigns across various industries.",
      studies: [
        {
          title: "B2B Lead Generation Campaign",
          description: "Generated 300% increase in qualified leads for software company through targeted LinkedIn and Google Ads campaigns.",
          imageUrl: "/placeholder.svg?height=300&width=400&text=B2B+Campaign",
          tags: ["B2B", "Lead Generation", "LinkedIn"],
          link: "https://example.com/ecommerce-case-study"
        },
        {
          title: "E-commerce Growth Strategy",
          description: "Achieved 250% increase in online sales through integrated social media, email marketing, and retargeting campaigns.",
          imageUrl: "/placeholder.svg?height=300&width=400&text=E-commerce+Growth",
          tags: ["E-commerce", "Social Media", "Email Marketing"],
          link: "https://example.com/ecommerce-case-study"
        },
        {
          title: "Local Business Marketing",
          description: "Increased local visibility by 400% for restaurant chain through targeted local SEO and social media campaigns.",
          imageUrl: "/placeholder.svg?height=300&width=400&text=Local+Marketing",
          tags: ["Local Business", "SEO", "Social Media"],
          link: "https://example.com/ecommerce-case-study"
        }
      ]
    }
  },
  {
    slug: "seo-services",
    hero: {
      title: "SEO Services",
      description: "Improve your search engine rankings and drive organic traffic with comprehensive SEO strategies that deliver long-term results.",
      imageUrl: "/contact.jpg?height=600&width=800&text=SEO+Services",
      features: [
        {
          title: "Technical SEO Audits",
          description: "Comprehensive technical analysis to identify and fix issues that impact search engine rankings."
        },
        {
          title: "Keyword Research",
          description: "Strategic keyword research to target high-value search terms that drive qualified traffic."
        },
        {
          title: "Content Optimization",
          description: "SEO-optimized content creation and optimization that ranks well and engages users."
        },
        {
          title: "Link Building",
          description: "High-quality backlink acquisition from authoritative websites to boost domain authority."
        }
      ]
    },
    galleryImages: [
      "/barber.jpg?height=400&width=600&text=SEO+Audit+Report",
      "/salon.jpg?height=400&width=600&text=Keyword+Research",
      "/doctor.jpg?height=400&width=600&text=Content+Strategy",
      "/lawyer.jpg?height=400&width=600&text=Ranking+Results"
    ],
    expertise: {
      title: "SEO Mastery",
      description: "We stay ahead of search engine algorithm changes to ensure your website maintains and improves its rankings.",
      skills: [
        {
          name: "Technical SEO",
          percentage: 96,
          description: "Site speed, mobile optimization, and technical audits"
        },
        {
          name: "Content Strategy",
          percentage: 92,
          description: "SEO-optimized content that ranks and converts"
        },
        {
          name: "Link Building",
          percentage: 88,
          description: "High-quality backlinks from authoritative sources"
        },
        {
          name: "Local SEO",
          percentage: 90,
          description: "Google My Business and local search optimization"
        }
      ]
    },
    valueCreation: {
      title: "SEO Value",
      description: "Our SEO services deliver sustainable organic growth that compounds over time.",
      values: [
        {
          icon: "🔍",
          title: "Higher Search Rankings",
          description: "Improve visibility for high-value keywords in your industry"
        },
        {
          icon: "📊",
          title: "Increased Organic Traffic",
          description: "Drive more qualified visitors to your website"
        },
        {
          icon: "💰",
          title: "Cost-Effective Marketing",
          description: "Long-term results with lower cost per acquisition"
        },
        {
          icon: "🏆",
          title: "Competitive Advantage",
          description: "Outrank competitors in search results"
        }
      ]
    },
    myths: {
      title: "SEO Myths Debunked",
      description: "Separating SEO facts from fiction in today's search landscape.",
      myths: [
        {
          question: "Is SEO dead because of paid advertising?",
          answer: "SEO is more important than ever. Organic search drives 53% of all website traffic, and users trust organic results more than ads. SEO provides sustainable, long-term growth that compounds over time."
        },
        {
          question: "Can I just stuff keywords to rank higher?",
          answer: "Keyword stuffing is penalized by search engines. Modern SEO focuses on creating valuable, user-focused content that naturally incorporates relevant keywords while providing genuine value to readers."
        },
        {
          question: "How long does it take to see SEO results?",
          answer: "SEO is a long-term strategy. While some improvements can be seen in 3-6 months, significant results typically take 6-12 months. However, the results are sustainable and continue to compound over time."
        }
      ]
    },
    caseStudies: {
      title: "SEO Success Stories",
      description: "Proven results from our comprehensive SEO strategies across different industries.",
      studies: [
        {
          title: "Local Business SEO",
          description: "Increased local search visibility by 400% for home services company, resulting in 150% more qualified leads.",
          imageUrl: "/placeholder.svg?height=300&width=400&text=Local+SEO",
          tags: ["Local SEO", "Home Services", "Lead Generation"],
          link: "https://example.com/local-business-seo"
        },
        {
          title: "E-commerce SEO Growth",
          description: "Achieved 300% increase in organic traffic and 200% boost in online sales for fashion retailer through comprehensive SEO strategy.",
          imageUrl: "/placeholder.svg?height=300&width=400&text=E-commerce+SEO",
          tags: ["E-commerce", "Organic Traffic", "Fashion"],
          link: "https://example.com/ecommerce-case-study"
        },
        {
          title: "B2B SaaS SEO Success",
          description: "Improved search rankings for 50+ target keywords, resulting in 250% increase in organic leads for software company.",
          imageUrl: "/placeholder.svg?height=300&width=400&text=B2B+SEO",
          tags: ["B2B", "SaaS", "Lead Generation"],
          link: "https://example.com/b2b-saas-seo"
        }
      ]
    }
  }
];
