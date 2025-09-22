import Image from "next/image"

interface ServiceValueCreationProps {
  valueCreation: {
    title: string
    description: string
    points: { title: string; description: string }[]
  }
  heroImage: string
  ctaText: string
}

export default function ServiceValueCreation({ valueCreation, heroImage, ctaText }: ServiceValueCreationProps) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
          {valueCreation.title}
        </h2>
        <p className="text-lg text-center text-gray-600 mb-10">
          {valueCreation.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valueCreation.points.map((point, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Image
            src={heroImage || "/placeholder.svg?height=400&width=600"}
            alt="Hero Image"
            height={400}
            width={600}
            className="w-full md:w-1/2 mx-auto mb-6 rounded-lg"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  )
}
