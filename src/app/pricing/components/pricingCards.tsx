import { PricingCard } from './PricingCard';

interface PricingCardsProps {
  isAnnual: boolean;
}

export function PricingCards({ isAnnual }: PricingCardsProps) {
  const plans = [
    {
      name: 'Starter',
      price: isAnnual ? 99 : 9,
      description: 'Perfect for getting started',
      features: [
        'Up to 5 team members',
        'Basic analytics',
        '2GB storage',
        'Email support'
      ]
    },
    {
      name: 'Pro',
      price: isAnnual ? 299 : 29,
      description: 'Best for growing teams',
      features: [
        'Up to 20 team members',
        'Advanced analytics',
        '20GB storage',
        'Priority support',
        'Custom integrations'
      ],
      isPopular: true
    },
    {
      name: 'Premium',
      price: isAnnual ? 999 : 99,
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Custom analytics',
        'Unlimited storage',
        '24/7 dedicated support',
        'Advanced security',
        'Custom deployment'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-20">
      {plans.map((plan) => (
        <PricingCard key={plan.name} {...plan} isAnnual={isAnnual} />
      ))}
    </div>
  );
}