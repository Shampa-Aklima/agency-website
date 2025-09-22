import Link from "next/link"

export default function ServicesPage() {
  const services = [
    { slug: "service1", title: "Test Service 1" },
    { slug: "service2", title: "Test Service 2" },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/service/${service.slug}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600">Click to view service details</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600">Test these URLs:</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/service/service1" className="text-blue-600 hover:underline">
                /service/service1
              </Link>
            </li>
            <li>
              <Link href="/service/service2" className="text-blue-600 hover:underline">
                /service/service2
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
