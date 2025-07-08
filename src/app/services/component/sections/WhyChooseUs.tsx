import { Check, Lightbulb, Users, Globe } from "lucide-react"

const reasons = [
  {
    icon: <Check className="w-8 h-8 text-purple-400" />,
    title: "Customized Solutions",
    description:
      "We create tailored metaverse solutions that perfectly align with your specific business needs and goals.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
    title: "Innovative Technology",
    description:
      "We stay at the forefront of metaverse technology to provide cutting-edge solutions that keep you ahead of the digital frontier.",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-400" />,
    title: "Experienced Team",
    description:
      "Our team of passionate developers, designers, and strategists bring years of expertise to every project and client interaction.",
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-400" />,
    title: "Global Reach",
    description:
      "Our solutions connect businesses with audiences worldwide, breaking down geographical barriers in the digital landscape.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 md:px-6 bg-[#0e0525]/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose The Metaverse Company?</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We are dedicated to creating immersive experiences that push the boundaries of what&apos;s possible in the
            digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[#1a0a3a]/30 border border-purple-900/30 rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-white/70 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
