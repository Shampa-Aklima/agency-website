export interface Service {
  slug: string;
  title: string;
  description: string;
  featuredServices: string[];
  serviceCategories: string[];
  benefits: string[];
  carouselImages: string[];
}

export interface ServiceItemType {
  name: string;
}

export interface ServiceType {
  id: string;
  type: string;
  title: string;
  description: string;
  services: ServiceItemType[];
  learnMoreLink: string;
}