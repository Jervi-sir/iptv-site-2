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

export const pricingPlans: PricingPlan[] = [
  {
    title: 'Starter',
    price: '$9 / mo',
    description: 'Stream on 1 device',
    features: [
      '5,000+ Live Events',
      'HD Streaming',
      '24/7 Email Support',
      'On-Demand Replays',
    ],
    variant: 'outline',
    bgClass: 'bg-transparent',
    purchases: 1500,
    priceId: 'price_1O4oDNI8y7N0oWUMJD6wEvBh',
  },
  {
    title: 'Pro',
    price: '$15 / mo',
    description: 'Stream on 3 devices',
    features: [
      '10,000+ Live Events',
      '4K Streaming Available',
      'Exclusive Concerts',
      'Priority Chat Support',
      'Multi-Device Streaming',
    ],
    isPopular: true,
    variant: 'default',
    purchases: 4000,
    priceId: 'price_1O4oCHI8y7N0oWUMfPrLKdd0',
  },
  {
    title: 'Elite',
    price: '$25 / mo',
    description: 'Stream on 5 devices',
    features: [
      '15,000+ Live Events',
      '4K & HDR Streaming',
      'VIP Event Access',
      'Phone Support',
      'Multi-Device Streaming',
    ],
    variant: 'outline',
    bgClass: 'bg-transparent',
    purchases: 1000,
    priceId: 'price_1O4opEI8y7N0oWUMgRSR1Cbu',
  },
];