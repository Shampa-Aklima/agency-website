"use client";

import { useState } from 'react';
import { PricingHero } from './components/PricingHero';
import { PricingToggle } from './components/PricingToggle';
import { PricingCards } from './components/pricingCards';
import { PricingFAQ } from './components/PricingFAQ';
import { PricingCTA } from './components/PricingCTA';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <PricingHero />
      <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      <PricingCards isAnnual={isAnnual} />
      <PricingFAQ />
      <PricingCTA />
    </main>
  );
}