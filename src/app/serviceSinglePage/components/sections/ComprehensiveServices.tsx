import { ServiceCategory as ServiceCategoryComponent } from "./ServiceCategory";

interface Feature {
  name: string;
}

interface ServiceCategory {
  title: string;
  description: string;
  features: Feature[];
  learnMoreLink?: string;
}

interface ComprehensiveServicesProps {
  title: string;
  subtitle: string;
  categories: ServiceCategory[];
}

export function ComprehensiveServices({
  title,
  subtitle,
  categories = [],
}: ComprehensiveServicesProps) {
  return (
    <section className="py-16 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <ServiceCategoryComponent
              key={index}
              title={category.title}
              description={category.description}
              features={category.features || []}
              learnMoreLink={category.learnMoreLink || "#"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
