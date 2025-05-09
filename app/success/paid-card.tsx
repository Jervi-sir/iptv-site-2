// PaidCard.tsx
import { Card } from '@/components/ui/card';
import { CircleCheckIcon } from 'lucide-react';
import Link from 'next/link';

interface PaidCardProps {
  amount: number;
  currency: string;
  paymentMethod: any;
  date: number;
  isDark: boolean;
}

export const PaidCard = ({ amount, currency, paymentMethod, date, isDark }: PaidCardProps) => {
  // Format the amount
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount);

  // Format the payment method
  let paymentMethodText = 'Unknown';
  if (paymentMethod) {
    if (paymentMethod.type === 'link') {
      paymentMethodText = `Link (${paymentMethod.link.email || 'no email provided'})`;
    } else if (paymentMethod.card) {
      const { brand, last4 } = paymentMethod.card;
      paymentMethodText = `${brand.charAt(0).toUpperCase() + brand.slice(1)} ending in ${last4}`;
    }
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
    <div className="relative z-50 ">
      <Card
        className={`max-w-md w-full space-y-6 p-6 rounded-lg shadow-lg ${
          isDark ? 'bg-zinc-950 text-gray-50' : 'bg-white text-gray-900'
        } bg-zinc-950 border-zinc-900`}
      >
        <div className="flex flex-col items-center">
          <CircleCheckIcon className="text-amber-500 h-16 w-16" />
          <h1 className="text-3xl font-bold mt-4 text-zinc-50">Payment Successful</h1>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-zinc-400 mt-2`}>
            Thank you for your payment.
          </p>
        </div>
        <div
          className={`border-t border-zinc-900 pt-6 space-y-4`}
        >
          <div className="flex justify-between">
            <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Amount Paid:</span>
            <span className="font-medium text-zinc-100">{formattedAmount}</span>
          </div>
          <div className="flex justify-between">
            <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Payment Method:</span>
            <span className="font-medium text-zinc-100">{paymentMethodText}</span>
          </div>
          <div className="flex justify-between">
            <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Date & Time:</span>
            <span className="font-medium text-zinc-100">{formattedDate}</span>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/checkout"
            className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              'bg-zinc-900 text-white hover:bg-amber-600 focus:ring-amber-500'
            } transition`}
            prefetch={false}
          >
            Back to Home
          </Link>
        </div>
      </Card>
    </div>
  );
};