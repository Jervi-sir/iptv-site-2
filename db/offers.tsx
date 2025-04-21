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
  savings?: string; // New field for savings (e.g., "Save up +$18 💰")
}

export const pricingPlans: PricingPlan[] = [
  {
    title: '1 Month',
    price: '$15.99',
    description: 'Instant streaming access for one month',
    features: [
      'Instant Setup',
      '+30,000 Channels',
      '+141,000 Movies',
      '+26,000 Series',
      '4K & FHD Quality',
      '24/7 Support',
      'Antifreeze',
      'All Devices',
    ],
    variant: 'outline',
    bgClass: 'bg-transparent',
    purchases: 2000, // Arbitrary value, adjust as needed
    priceId: 'price_1O4oDNI8y7N0oWUMJD6wEvBh',
  },
  {
    title: '3 Months',
    price: '$29.99',
    description: 'Stream for three months with savings',
    features: [
      'Instant Setup',
      '+30,000 Channels',
      '+141,000 Movies',
      '+26,000 Series',
      '4K & FHD Quality',
      '24/7 Support',
      'Antifreeze',
      'All Devices',
    ],
    savings: 'Save up +$18 💰',
    variant: 'outline',
    bgClass: 'bg-transparent',
    purchases: 1500, // Arbitrary value
    priceId: 'price_1O4oCHI8y7N0oWUMfPrLKdd0',
  },
  {
    title: '6 Months',
    price: '$49.99',
    description: 'Extended streaming with greater savings',
    features: [
      'Instant Setup',
      '+30,000 Channels',
      '+141,000 Movies',
      '+26,000 Series',
      '4K & FHD Quality',
      '24/7 Support',
      'Antifreeze',
      'All Devices',
    ],
    savings: 'Save up +$40 💰',
    variant: 'outline',
    bgClass: 'bg-transparent',
    purchases: 1000, // Arbitrary value
    priceId: 'price_1O4opEI8y7N0oWUMgRSR1Cbu',
  },
  {
    title: '12 Months',
    price: '$59.99',
    description: 'Best value for a full year of streaming',
    features: [
      'Instant Setup',
      '+30,000 Channels',
      '+141,000 Movies',
      '+26,000 Series',
      '4K & FHD Quality',
      '24/7 Support',
      'Antifreeze',
      'All Devices',
    ],
    savings: 'Save up 50% 💰',
    isPopular: true, // Marking 12 months as popular for emphasis
    variant: 'default',
    bgClass: 'bg-transparent',
    purchases: 800, // Arbitrary value
    priceId: 'price_1O4opEI8y7N0oWUMgRSR1Ccc',
  },
];