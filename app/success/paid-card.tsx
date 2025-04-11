import { Card } from '@/components/ui/card';
import { CircleCheckIcon } from 'lucide-react';
import Link from 'next/link';

interface PaidCardProps {
  amount: number; // Amount in dollars
  currency: string;
  paymentMethod: any; // Stripe payment method object
  date: number; // Unix timestamp
}

export const PaidCard = ({ amount, currency, paymentMethod, date }: PaidCardProps) => {
  // Format the amount
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount);

  // Format the payment method
  let paymentMethodText = 'Unknown';
  if (paymentMethod && paymentMethod.card) {
    const { brand, last4 } = paymentMethod.card;
    paymentMethodText = `${brand.charAt(0).toUpperCase() + brand.slice(1)} ending in ${last4}`;
  }

  // Format the date
  const formattedDate = new Date(date * 1000).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <div className="relative z-50">
      <Card className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-lg dark:bg-zinc-950">
        <div className="flex flex-col items-center">
          <CircleCheckIcon className="text-green-500 h-16 w-16" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mt-4">
            Payment Successful
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Thank you for your payment. Your order is being processed.
          </p>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Amount Paid:</span>
            <span className="font-medium text-gray-900 dark:text-gray-50">
              {formattedAmount}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Payment Method:</span>
            <span className="font-medium text-gray-900 dark:text-gray-50">
              {paymentMethodText}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Date & Time:</span>
            <span className="font-medium text-gray-900 dark:text-gray-50">
              {formattedDate}
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
            prefetch={false}
          >
            Back to Home
          </Link>
        </div>
      </Card>
    </div>
  );
};