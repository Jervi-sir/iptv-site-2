import { Card, CardContent } from "@/components/ui/card";

export const OrderSummary = ({
  plan,
  billing,
  price,
}: {
  plan: { name: string };
  billing: string;
  price: number;
}) => (
  <Card className="shadow-md sticky">
    <CardContent className="p-6">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      <div className="space-y-3 mb-4">
        {[
          { label: "Plan", value: plan.name },
          { label: "Billing", value: billing.charAt(0).toUpperCase() + billing.slice(1) },
          {
            label: "Total",
            value: (
              <>
                ${price.toFixed(2)}
                <span className="text-sm font-normal text-gray-500">
                  /{billing === "yearly" ? "mo (billed yearly)" : "month"}
                </span>
              </>
            ),
          },
        ].map(({ label, value }) => (
          <div key={label} className={`flex justify-between ${label === "Total" ? "border-t pt-3 mt-3" : ""}`}>
            <span className="text-gray-600">{label}</span>
            <span className={label === "Total" ? "text-lg font-bold" : "font-medium"}>{value}</span>
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-500 mt-6">
        By completing your purchase, you agree to our Terms of Service and Privacy Policy.
      </div>
    </CardContent>
  </Card>
);