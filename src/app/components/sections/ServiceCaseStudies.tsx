"use client"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card" // Adjust the import path as necessary
import { Button } from "../ui/button"

type ServiceCaseStudiesProps = {
  title: string
  description: string
  studies: { title: string; description: string; imageUrl: string; link: string }[]
}

export function ServiceCaseStudies({ title, description, studies }: ServiceCaseStudiesProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={study.imageUrl || "/placeholder.svg"}
                  alt={study.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">{study.title}</CardTitle>
                <CardDescription className="text-gray-600">{study.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link href={study.link} passHref>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Case Study
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
