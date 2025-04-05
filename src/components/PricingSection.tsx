
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for getting started',
    features: [
      '3 threads per month',
      'Basic thread formatting',
      'Copy to clipboard',
      'YouTube video support',
    ],
    buttonText: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '19',
    description: 'For content creators and marketers',
    features: [
      'Unlimited threads',
      'Advanced thread formatting',
      'One-click scheduling',
      'Thread analytics',
      'Custom branding',
    ],
    buttonText: 'Try Pro',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '49',
    description: 'For agencies and teams',
    features: [
      'Everything in Pro',
      'Team workspace',
      'Collaborative editing',
      'Approval workflow',
      'Priority support',
    ],
    buttonText: 'Contact Sales',
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Simple, Transparent <span className="gradient-text">Pricing</span>
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose the plan that best fits your needs. All plans include access to our core thread generation technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-6 flex flex-col ${
                plan.highlighted 
                  ? 'border-primary border-2 shadow-lg relative' 
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              
              <ul className="mb-6 space-y-3 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlighted ? "default" : "outline"}
                className="w-full"
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
