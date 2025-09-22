import Image from "next/image"

interface PortfolioGridProps {
  title: string
  description: string
  items: {
    image: string
    title: string
    description: string
  }[]
  colorScheme: string
  columns: number
}

export function PortfolioGrid({ title, description, items, colorScheme, columns }: PortfolioGridProps) {
  const gridCols = columns === 3 ? "lg:grid-cols-3" : columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-1"

  // Helper function to ensure proper image path
  const getImagePath = (imagePath: string) => {
    if (!imagePath) return "/placeholder.svg?height=200&width=300"

    // If path already starts with /, don't add another one
    if (imagePath.startsWith("/")) {
      return imagePath
    }

    // If path doesn't start with /, add one
    return `/${imagePath}`
  }

  return (
    <section className="py-16 bg-white/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
        {description && <p className="text-lg text-center text-white/70 mb-10">{description}</p>}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-8`}>
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors"
            >
              <div className="mb-6 rounded-lg overflow-hidden">
                <Image
                  width={300}
                  height={200}                
                  src={getImagePath(item.image) || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
