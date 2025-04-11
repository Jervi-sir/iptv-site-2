import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import { PricingDrawer } from './pricing-drawer';
import { DrawerTrigger } from '@/components/ui/drawer';

// Define the type for a pricing plan
interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  variant?: 'outline' | 'default';
  bgClass?: string;
  purchases?: number;
  priceId: string;
}

// Define the array of pricing plans with purchase data and Price IDs
const pricingPlans: PricingPlan[] = [
  {
    title: 'Basic',
    price: '$9 / mo',
    description: 'Access on 1 device',
    features: [
      '1,000+ Content Library Items',
      'High-Quality Media',
      'Standard Email Support',
      'Device Compatibility',
    ],
    variant: 'outline',
    bgClass: 'bg-transparent',
    purchases: 1200,
    priceId: 'price_1O4oDNI8y7N0oWUMJD6wEvBh',
  },
  {
    title: 'Premium',
    price: '$15 / mo',
    description: 'Access on up to 3 devices',
    features: [
      'Everything in Basic Plan',
      '5,000+ Content Library Items',
      'Enhanced Media Quality',
      'Curated Collections',
      'Priority Chat Support',
      'Multi-Device Access',
      'Specialized Content Included',
    ],
    isPopular: true,
    variant: 'default',
    purchases: 3500,
    priceId: 'price_1O4oCHI8y7N0oWUMfPrLKdd0',
  },
  {
    title: 'Ultimate',
    price: '$25 / mo',
    description: 'Access on up to 5 devices',
    features: [
      'Everything in Premium Plan',
      '10,000+ Content Library Items',
      'Exclusive Content Access',
      'VIP Phone Support',
      'Global Content Library',
    ],
    variant: 'outline',
    bgClass: 'bg-transparent',
    purchases: 800,
    priceId: 'price_1O4opEI8y7N0oWUMgRSR1Cbu',
  },
];

export default function Pricing1() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Flexible Plans for Content Access
          </h1>
          <p>
            Select a plan tailored to your needs and access a vast library of curated content with no contracts or hidden fees.
          </p>
        </div>

        <div id="#pricing_unlocked" className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col ${plan.bgClass || ''} ${plan.isPopular ? 'relative' : ''}`}
            >
              {plan.isPopular && (
                <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
                  Most Popular
                </span>
              )}

              <CardHeader>
                <CardTitle className="font-medium">{plan.title}</CardTitle>
                <span className="my-3 block text-2xl font-semibold">{plan.price}</span>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />
                <ul className="list-outside space-y-3 text-sm">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto">
                <PricingDrawer
                  triggerDrawerComponent={
                    <DrawerTrigger asChild>
                      <Button variant={plan.variant || 'default'} className="w-full">
                        Get Started
                      </Button>
                    </DrawerTrigger>
                  }
                  plan={plan as any}
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}