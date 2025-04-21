import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { pricingPlans } from '@/db/offers';

export const PricingPlans = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const getPrice = (price: string) => {
    const monthlyPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    return billingPeriod === 'yearly' ? (monthlyPrice * 0.8).toFixed(2) : monthlyPrice.toFixed(2);
  };

  return (
    <section id="pricing" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="gradient-heading">Growth Plan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Affordable plans to unlock 10+ digital tools for your business.
          </p>
          <div className="flex justify-center mt-8">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              {['monthly', 'yearly'].map((period) => (
                <button
                  key={period}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    billingPeriod === period
                      ? 'bg-white shadow-md text-gray-800'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setBillingPeriod(period as 'monthly' | 'yearly')}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                  {period === 'yearly' && (
                    <span className="text-xs font-bold text-green-500"> Save 20%</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.priceId}
              className={`rounded-xl flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 ${
                plan.isPopular
                  ? 'border-2 border-blue-500 relative'
                  : 'bg-white shadow-md'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">${getPrice(plan.price)}</span>
                  <span className="text-gray-500 text-sm">
                    /{billingPeriod === 'yearly' ? 'mo (billed yearly)' : 'month'}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/checkout?plan=${plan.title.toLowerCase().replace(' ', '-')}&billing=${billingPeriod}`}
                  className="block w-full mt-auto"
                >
                  <Button
                    className={`w-full ${plan.isPopular ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    Choose {plan.title}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-500 text-sm">
          All plans include a 7-day money-back guarantee.
        </div>
      </div>
    </section>
  );
};