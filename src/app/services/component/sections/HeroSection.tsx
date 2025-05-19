// components/HeroSection.tsx

import Image from "next/image";

interface HeroSectionProps {
  image: string;
  
}

export const HeroSection = ({ image }: HeroSectionProps) => {
  return (
    <div className="relative h-[500px] w-full">
      <Image
        src={image}
        alt="Hero Image"

        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};
