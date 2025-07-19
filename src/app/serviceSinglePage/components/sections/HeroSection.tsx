import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

interface HeroSectionProps {
  imageUrl?: string;
  imageAlt?: string;
}

export function HeroSection({ imageUrl, imageAlt }: HeroSectionProps) {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-background text-center relative">
      {imageUrl ? (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={imageUrl}
            alt={imageAlt || ""}
            fill
            className="object-cover rounded-lg"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/40 rounded-lg" />
        </div>
      ) : null}
    </section>
  );
}


