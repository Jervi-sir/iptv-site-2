import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const SuccessMessage = ({
  plan,
  price,
  duration,
}: {
  plan: { name: string };
  price: number;
  duration: string;
}) => (
  <Card className="shadow-lg max-w-2xl mx-auto animate-scale-in">
    <CardContent className="p-8 text-center">
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="text-green-600" size={36} />
      </div>
      <h1 className="text-2xl font-bold mb-2">Welcome to Your Learning Journey!</h1>
      <p className="text-gray-600 mb-8">
        Thank you for subscribing. Your {plan.name} plan is now active. Start exploring 50,000+ e-books, audiobooks, and courses!
      </p>
      <div className="space-y-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Learning Plan Details</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-gray-500 text-left">Plan:</div>
            <div className="text-right font-medium">{plan.name}</div>
            <div className="text-gray-500 text-left">Duration:</div>
            <div className="text-right font-medium capitalize">{duration}</div>
            <div className="text-gray-500 text-left">Price:</div>
            <div className="text-right font-medium">
              ${price.toFixed(2)}/{duration}
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">What's Next?</h3>
          <p className="text-sm text-gray-600 text-left">
            Check your email for login details and instructions to access your learning library.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);