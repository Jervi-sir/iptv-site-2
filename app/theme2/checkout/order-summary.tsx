import { Card, CardContent } from '@/components/ui/card';

export const OrderSummary = ({
  plan,
  price,
  duration,
}: {
  plan: { name: string; savings?: string };
  price: number;
  duration: string;
}) => (
  <Card className="shadow-md sticky top-2 border-zinc-800">
    <CardContent className="p-6 py-2">
      <h3 className="text-lg font-semibold mb-4">Growth Plan Summary</h3>
      <div className="space-y-3 mb-4">
        {[
          { label: 'Plan', value: plan.name },
          { label: 'Duration', value: duration.charAt(0).toUpperCase() + duration.slice(1) },
          {
            label: 'Total',
            value: (
              <>
                ${price.toFixed(2)}
                <span className="text-sm font-normal text-gray-500">/{duration}</span>
              </>
            ),
          },
          ...(plan.savings ? [{ label: 'Savings', value: plan.savings }] : []),
        ].map(({ label, value }) => (
          <div key={label} className={`flex justify-between ${label === 'Total' ? 'border-t pt-3 mt-3' : ''}`}>
            <span className="text-gray-500">{label}</span>
            <span className={label === 'Total' ? 'text-lg font-bold' : 'font-medium'}>{value}</span>
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-500 mt-6">
        By subscribing, you agree to our Terms of Service and Privacy Policy.
      </div>
    </CardContent>
  </Card>
);