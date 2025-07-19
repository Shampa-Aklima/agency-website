import { Check } from 'lucide-react';
import { Button } from '../../serviceSinglePage/components/ui/button';

interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  isAnnual: boolean;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  isPopular,
  isAnnual
}: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 ${
        isPopular
          ? 'border-2 border-primary relative bg-accent shadow-lg'
          : 'border border-border bg-card'
      }`}
    >
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-muted-foreground">/{isAnnual ? 'year' : 'month'}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${isPopular ? 'bg-primary' : ''}`}
        variant={isPopular ? 'default' : 'outline'}
      >
        Get Started
      </Button>
    </div>
  );
}