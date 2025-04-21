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
  savings?: string; // e.g., "Save $10 📚"
}

export const pricingPlans: PricingPlan[] = [
  {
    title: '1 Month',
    price: '$12.99',
    description: 'Dive into learning with a one-month pass',
    features: [
      '50,000+ E-books, Audiobooks, & Courses',
      'Instant Access',
      'Offline Reading & Listening',
      'Multi-Device Support',
      'Weekly Content Updates',
      '24/7 Support',
      'Curated Learning Paths',
      '7-Day Money-Back Guarantee',
    ],
    variant: 'outline',
    bgClass: 'bg-transparent',
    purchases: 2500, // Increased to reflect interest in short-term plans
    priceId: 'price_1O4oDNI8y7N0oWUMJD6wEvBh',
  },
  {
    title: '3 Months',
    price: '$34.99',
    description: 'Expand your knowledge with a quarterly plan',
    features: [
      '50,000+ E-books, Audiobooks, & Courses',
      'Instant Access',
      'Offline Reading & Listening',
      'Multi-Device Support',
      'Weekly Content Updates',
      '24/7 Support',
      'Curated Learning Paths',
      '7-Day Money-Back Guarantee',
    ],
    savings: 'Save $4 📚',
    variant: 'outline',
    bgClass: 'bg-transparent',
    purchases: 1800, // Adjusted for popularity
    priceId: 'price_1O4oCHI8y7N0oWUMfPrLKdd0',
  },
  {
    title: '6 Months',
    price: '$64.99',
    description: 'Deepen your learning with a half-year plan',
    features: [
      '50,000+ E-books, Audiobooks, & Courses',
      'Instant Access',
      'Offline Reading & Listening',
      'Multi-Device Support',
      'Weekly Content Updates',
      '24/7 Support',
      'Curated Learning Paths',
      '7-Day Money-Back Guarantee',
    ],
    savings: 'Save $12 📚',
    variant: 'outline',
    bgClass: 'bg-transparent',
    purchases: 1200, // Adjusted for mid-term commitment
    priceId: 'price_1O4opEI8y7N0oWUMgRSR1Cbu',
  },
  {
    title: '12 Months',
    price: '$99.99',
    description: 'Best value for a full year of unlimited learning',
    features: [
      '50,000+ E-books, Audiobooks, & Courses',
      'Instant Access',
      'Offline Reading & Listening',
      'Multi-Device Support',
      'Weekly Content Updates',
      '24/7 Support',
      'Curated Learning Paths',
      '7-Day Money-Back Guarantee',
    ],
    savings: 'Save $55 📚',
    isPopular: true, // Marking 12 months as popular for emphasis
    variant: 'default',
    bgClass: 'bg-transparent',
    purchases: 1000, // Adjusted for long-term commitment
    priceId: 'price_1O4opEI8y7N0oWUMgRSR1Ccc',
  },
];