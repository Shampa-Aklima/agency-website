interface PricingToggleProps {
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
}

export function PricingToggle({ isAnnual, setIsAnnual }: PricingToggleProps) {
  return (
    <div className="flex justify-center items-center gap-4 mb-12">
      <span className={`text-sm ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
        Monthly
      </span>
      <button
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none"
        onClick={() => setIsAnnual(!isAnnual)}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isAnnual ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`text-sm ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
        Annual <span className="text-green-500 font-medium">(Save 20%)</span>
      </span>
    </div>
  );
}