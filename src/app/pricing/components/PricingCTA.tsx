import { Button } from '../../serviceSinglePage/components/ui/button';
import Link from 'next/link';

export function PricingCTA() {
  return (
    <div className="bg-accent py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Start your 14-day free trial today. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Start Free Trial</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">Contact Sales</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}