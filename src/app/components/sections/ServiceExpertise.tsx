interface ServiceExpertiseProps {
  title: string
  description: string
  items: {
    icon: string
    title: string
    description: string
  }[]
}

export function ServiceExpertise({ title, description, items }: ServiceExpertiseProps) {
  // Icon mapping for different service types
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: string } = {
      code: "💻",
      server: "🖥️",
      smartphone: "📱",
      android: "🤖",
      layers: "📱",
      brain: "🧠",
      bot: "🤖",
      eye: "👁️",
      design: "🎨",
      seo: "🔍",
      speed: "⚡",
      security: "🔒",
      cloud: "☁️",
      database: "🗄️",
      api: "🔌",
      analytics: "📊",
    }
    return icons[iconName] || "⭐"
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="text-4xl mb-4">{getIcon(item.icon)}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
