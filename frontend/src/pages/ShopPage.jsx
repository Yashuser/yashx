import React, { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { ContentBox } from '@/components/ContentBox';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

export default function ShopPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: 'Priority Queue',
      price: '$20',
      period: '/month',
      description: 'Skip the queue and join instantly',
      features: [
        'Instant server access',
        'Skip queue wait times',
        'Support server development',
        'Priority customer support'
      ],
      popular: true
    },
    {
      name: 'Priority Queue+',
      price: '$40',
      period: '/month',
      description: 'Premium priority with extras',
      features: [
        'All Priority Queue benefits',
        'Reserved slot guarantee',
        'Exclusive Discord role',
        'Server statistics access',
        'Early access to updates'
      ],
      popular: false
    }
  ];

  const handlePurchase = (plan) => {
    setSelectedPlan(plan.name);
    
    // Mock purchase - store in localStorage
    const purchases = JSON.parse(localStorage.getItem('purchases') || '[]');
    purchases.push({
      plan: plan.name,
      price: plan.price,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('purchases', JSON.stringify(purchases));
    
    toast.success('Purchase initiated!', {
      description: `${plan.name} - Payment processing would happen here.`
    });
  };

  return (
    <PageLayout>
      <ContentBox>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center">
          Support the Server
        </h1>
        
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Help keep 2b2t running and get priority access to the server.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 bg-card/85 backdrop-blur-md border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-primary shadow-gaming-glow' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <Badge className="mb-4 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>
              
              <p className="text-muted-foreground mb-6">
                {plan.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-gaming-green flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 shadow-gaming-glow'
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
                size="lg"
                onClick={() => handlePurchase(plan)}
              >
                Purchase Now
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-foreground mb-3">Payment Information</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
            <li>All payments are processed securely</li>
            <li>Subscriptions renew automatically monthly</li>
            <li>Cancel anytime from your account settings</li>
            <li>No refunds for partial months</li>
            <li>Priority access activates within 5 minutes of payment</li>
          </ul>
        </div>
      </ContentBox>
      <Toaster />
    </PageLayout>
  );
}