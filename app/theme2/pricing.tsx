'use client';

import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { pricingPlans } from '@/db/offers';

const PricingPlans = ({ doRedirect = false }: { doRedirect?: boolean }) => {
  return (
    <section id="pricing" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            No Limits, Your Price...{' '}
            <span className="gradient-heading">Unleash Boundless Streaming Freedom!</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a plan tailored to your streaming needs with our massive content library.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.priceId}
              className={`rounded-xl flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 ${
                plan.isPopular
                  ? 'border-2 border-violet-400 relative'
                  : 'bg-white shadow-md'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-violet-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  BEST VALUE
                </div>
              )}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 text-sm">/{plan.title.toLowerCase()}</span>
                </div>
                {plan.savings && (
                  <div className="mb-4 text-green-500 font-semibold text-sm">
                    {plan.savings}
                  </div>
                )}
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
                  href={doRedirect ? `${process.env.NEXT_PUBLIC_REDIRECT_TO}/checkout?plan=${plan.title.toLowerCase().replace(' ', '-')}` : `${plan.title.toLowerCase().replace(' ', '-')}`}
                  className="block w-full mt-auto"
                >
                  <Button
                    className={`w-full ${
                      plan.isPopular ? 'btn-primary' : 'btn-secondary'
                    }`}
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

export default PricingPlans;