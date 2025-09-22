export interface Service {
  slug: string
  hero: {
    title: string
    description: string
    imageUrl: string
    features: Array<{
      title: string
      description: string
    }>
  }
  galleryImages: string[]
  expertise: {
    title: string
    description: string
    skills: Array<{
      name: string
      percentage: number
      description: string
    }>
  }
  valueCreation: {
    title: string
    description: string
    values: Array<{
      icon: string
      title: string
      description: string
    }>
  }
  myths: {
    title: string
    description: string
    myths: Array<{
      question: string
      answer: string
    }>
  }
  caseStudies: {
    title: string
    description: string
    studies: Array<{
      title: string
      description: string
      imageUrl: string
       link: string 
      tags?: string[]
    }>
  }
}
