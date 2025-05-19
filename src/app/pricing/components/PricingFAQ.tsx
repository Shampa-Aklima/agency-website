export function PricingFAQ() {
    const faqs = [
      {
        question: 'Can I change my plan later?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.'
      },
      {
        question: 'Is there a free trial available?',
        answer: 'Yes, all paid plans come with a 14-day free trial. No credit card required.'
      },
      {
        question: 'What happens when I upgrade or downgrade?',
        answer: 'When you upgrade, youll get immediate access to new features. When downgrading, youll retain access until your current billing period ends.'
      }
    ];
  
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }