"use client";

import * as React from "react";
import { CreditCard, DollarSign, Wallet } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";

// Simulated purchase trend data for the last 30 days
const generatePurchaseTrendData = (planTitle: string) => {
  const data = [];
  const basePurchases = planTitle === "Premium" ? 100 : planTitle === "Basic" ? 50 : 30;
  for (let i = 30; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const day = date.getDate();
    const purchases = basePurchases + Math.floor(Math.random() * 20);
    data.push({
      day: `Day ${day}`,
      purchases,
    });
  }
  return data;
};

// Payment options
const paymentOptions = [
  { name: "Credit Card", icon: <CreditCard className="size-5" /> },
  { name: "PayPal", icon: <Wallet className="size-5" /> },
  { name: "Crypto", icon: <DollarSign className="size-5" /> },
];

interface PricingDrawerProps {
  triggerDrawerComponent: React.ReactNode;
  plan: {
    title: string;
    price: string;
    purchases: number;
    priceId: string; // Add priceId to the plan interface
  };
}

export function PricingDrawer({ triggerDrawerComponent, plan }: PricingDrawerProps) {
  const [selectedPayment, setSelectedPayment] = React.useState<string | null>(null);
  const purchaseTrendData = React.useMemo(() => generatePurchaseTrendData(plan.title), [plan.title]);

  // Handle form submission for Stripe payment
  const handleProceedToPayment = () => {
    if (selectedPayment === "Credit Card") {
      // The form will handle the submission to /api/checkout_sessions
      return;
    } else {
      alert(`${selectedPayment} is not supported yet. Please select Credit Card to proceed.`);
    }
  };

  return (
    <Drawer direction="right">
      {triggerDrawerComponent}
      <DrawerContent className="h-[100vh] flex flex-col">
        <ScrollArea className="h-full">
          <div className="mx-auto w-full max-w-md">
            <DrawerHeader>
              <DrawerTitle>{plan.title} Plan - {plan.price}</DrawerTitle>
              <DrawerDescription>
                Join {plan.purchases.toLocaleString()} happy customers who’ve chosen this plan!
              </DrawerDescription>
            </DrawerHeader>

            <div className="p-4">
              {/* Purchase Trend Chart */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  Purchases Over the Last 30 Days
                </h3>
                <div className="h-[150px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={purchaseTrendData}>
                      <XAxis dataKey="day" hide />
                      <YAxis hide />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--background)",
                          border: "1px solid var(--border)",
                          borderRadius: "4px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="purchases"
                        stroke="var(--chart-2)"
                        fill="var(--chart-2)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Payment Options */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  Select Payment Method
                </h3>
                <div className="grid gap-3">
                  {paymentOptions.map((option) => (
                    <Button
                      key={option.name}
                      variant={selectedPayment === option.name ? "default" : "outline"}
                      className="flex items-center gap-2 justify-start cursor-pointer"
                      onClick={() => setSelectedPayment(option.name)}
                    >
                      {option.icon}
                      {option.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <DrawerFooter>
              {/* Form to submit to Stripe API */}
              <form action="/api/checkout_sessions" method="POST">
                {/* Hidden input to pass the priceId */}
                <input type="hidden" name="priceId" value={plan.priceId} />
                <Button
                  type="submit"
                  disabled={!selectedPayment}
                  className="cursor-pointer w-full"
                  onClick={handleProceedToPayment}
                >
                  Proceed to Payment
                </Button>
              </form>
              <DrawerClose asChild>
                <Button variant="outline" className="cursor-pointer w-full">
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}