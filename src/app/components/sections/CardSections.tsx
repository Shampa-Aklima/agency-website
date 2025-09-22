import {
  Users,
  Settings,
  Briefcase,
  BarChart,
  Shield,
  Zap,
  Target,
  Rocket,
  Heart,
  Star,
  Globe,
  Code,
  Smartphone,
  Database,
  Cloud,
  Lock,
} from "lucide-react";
import { Button } from "../ui/button";

interface CardItem {
  icon: string;
  title: string;
  description: string;
}

interface CardSectionProps {
  title: string;
  description: string;
  items: CardItem[];
  colorScheme?: "purple";
  columns?: 2 | 3 | 4;
}

export function CardSection({
  title,
  description,
  items,
  colorScheme = "purple",
  columns = 4,
}: CardSectionProps) {
  const iconMap = {
    users: Users,
    settings: Settings,
    briefcase: Briefcase,
    "bar-chart": BarChart,
    shield: Shield,
    zap: Zap,
    target: Target,
    rocket: Rocket,
    heart: Heart,
    star: Star,
    globe: Globe,
    code: Code,
    smartphone: Smartphone,
    database: Database,
    cloud: Cloud,
    lock: Lock,
  };

  const colorSchemes = {
    
    purple: {
      cardBg: "bg-[#281a53]/30",
      cardBorder: "border-purple-500/30",
      cardHover: "hover:shadow-purple-500/20",
      iconBg: "bg-[#271a3d] hover:bg-purple-500/20",
      iconColor: "text-white",
    },
  };

  const colors = colorSchemes[colorScheme];
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="max-w-6xl container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        {title}
      </h2>
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
        {description}
      </p>
      <div className={`grid ${gridCols[columns]} gap-8`}>
        {items.map((item, index) => {
  
          return (
            <>
              <div
                key={index}
                className={`${colors.cardBg} h-full w-full p-8 overflow-hidden rounded-xl border ${colors.cardBorder} shadow-lg ${colors.cardHover} transition-all hover:-translate-y-1`}
              >
                <div
                  className={`${colors.iconBg} p-3 rounded-lg inline-block mb-4`}
                >
                  
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
                <Button
                  size="lg"
                  className="rounded-full mt-4 text-sm sm:text-base w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}
