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
    price: '$15.99',
    description: 'Kickstart your learning with a one-month pass',
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
    purchases: 2500, // Kept high to reflect short-term plan popularity
    priceId: 'price_1RMunIGozbvJVw89jQ5DEKuB', // Reused original priceId (can be updated if needed)
  },
  {
    title: '3 Months',
    price: '$29.99',
    description: 'Grow your knowledge with a quarterly plan',
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
    savings: 'Save $17.98 📚', // Calculated: (15.99 * 3) - 29.99 = 17.98
    variant: 'outline',
    bgClass: 'bg-transparent',
    purchases: 1800, // Kept consistent with original
    priceId: 'price_1RMupsGozbvJVw89fDBnt8qe', // Reused original priceId
  },
  {
    title: '6 Months',
    price: '$49.99',
    description: 'Deepen your expertise with a half-year plan',
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
    savings: 'Save $45.95 📚', // Calculated: (15.99 * 6) - 49.99 = 45.95
    variant: 'outline',
    bgClass: 'bg-transparent',
    purchases: 1200, // Kept consistent with original
    priceId: 'price_1RMurVGozbvJVw89jhXKH96a', // Reused original priceId
  },
  {
    title: '12 Months',
    price: '$59.99',
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
    savings: 'Save $131.89 📚', // Calculated: (15.99 * 12) - 59.99 = 131.89
    isPopular: true, // Kept as popular, per original
    variant: 'default',
    bgClass: 'bg-transparent',
    purchases: 1000, // Kept consistent with original
    priceId: 'price_1RMusbGozbvJVw8976c4CyhW', // Reused original priceId
  },
];