// components/HeroSection.tsx

interface HeroSectionProps {
  imageUrl: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export const HeroSection = ({ imageUrl, imageAlt, children }: HeroSectionProps) => {
  return (
    <section
      className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-label={imageAlt}
    >
      <div className="absolute inset-0  z-0" /> {/* Optional overlay */}
      <div className="relative z-10 max-w-4xl text-start text-4xl text-white font-bold px-4">
        {children}
      </div>
    </section>
  );
};

