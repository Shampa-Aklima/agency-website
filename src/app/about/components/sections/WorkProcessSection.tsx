import { Users, Settings, Briefcase, BarChart } from "lucide-react"

interface Process {
  icon: string
  title: string
  description: string
}

interface WorkProcessSectionProps {
  title: string
  description: string
  processes: Process[]
}

export function WorkProcessSection({ title, description, processes }: WorkProcessSectionProps) {
  const iconMap = {
    users: <Users className="h-8 w-8 text-purple-400" />,
    settings: <Settings className="h-8 w-8 text-purple-400" />,
    briefcase: <Briefcase className="h-8 w-8 text-purple-400" />,
    "bar-chart": <BarChart className="h-8 w-8 text-purple-400" />,
  }

  return (
    <section className="max-w-6xl container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{title}</h2>
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">{description}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processes.map((process, index) => (
          <div
            key={index}
            className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/30 shadow-lg hover:shadow-purple-500/20 transition-all hover:-translate-y-1"
          >
            <div className="bg-purple-800/50 p-3 rounded-lg inline-block mb-4">
              {iconMap[process.icon as keyof typeof iconMap]}
            </div>
            <h3 className="text-xl font-bold mb-2">{process.title}</h3>
            <p className="text-gray-300">{process.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
