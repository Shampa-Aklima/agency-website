import Image from "next/image"
import Link from "next/link"

interface TeamItem {
  name: string
  title: string
  image: string
  profileHref?: string
}

interface TeamSectionProps {
  name: string
  title: string
  colorScheme?: "purple"
  columns?: 2 | 3 | 4
  items: TeamItem[]
}

export default function TeamSection({
  name,
  title,
  items,
  colorScheme = "purple",
  columns = 3,
}: TeamSectionProps) {
  const colorSchemes = {
    purple: {
      cardBg: "bg-[#281a53]/30",
      cardBorder: "border-purple-500/30",
      cardHover: "hover:shadow-purple-500/20",
      iconBg: "bg-[#271a3d] hover:bg-purple-500/20",
      iconColor: "text-white",
    },
  }

  const colors = colorSchemes[colorScheme]

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <section className="max-w-6xl container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">{title}</h2>
      <div className={`grid ${gridCols[columns]} gap-8`}>
        {items.map((item, index) => {
          const CardContent = (
            <div
              className={`${colors.cardBg} h-full w-full p-8 overflow-hidden rounded-xl border ${colors.cardBorder} shadow-lg ${colors.cardHover} transition-all hover:-translate-y-1`}
            >
              <div className="mb-6 rounded-lg overflow-hidden">
                <Image
                  src={item.image.startsWith("/") ? item.image : `/${item.image}`}
                  alt={`${item.name} - ${item.title}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-white">{item.name}</h3>
                <p className="text-gray-300 text-sm">{item.title}</p>
              </div>
            </div>
          )

          return (
            <div key={index}>
              {item.profileHref ? (
                <Link href={item.profileHref} className="block">
                  {CardContent}
                </Link>
              ) : (
                CardContent
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
