"use client";

import * as React from "react";
import { CreditCardIcon, Printer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/logo";
import { Style } from "./components/style";
import { InvoiceLoading } from "./components/invoice-loading";
import { Customer } from "./components/customer";
import { Invoice } from "./components/invoice";
import { SelectPrice } from "./components/select-price";
import { InvoiceTable } from "./components/invoice-table";
import { AccordionInfo } from "./components/accordion-info";
import { SelectPayment } from "./components/select-payment";

// name=Jane Smith&email=jane.smith@example.com&address=789 Main St&invoiceId=INV-2025-002&issueDate=April 12, 2025&dueDate=April 19, 2025&status=Pending&priceId=price_1O4oDNI8y7N0oWUMJD6wEvBh&paymentMethod=credit-card
// name, email, address, invoiceId, issueDate, dueDate, status, priceId, paymentMethod

export default function InvoiceClient({ customer, invoice, urlPriceId, urlPaymentMethod }: any) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = React.useState<string | null>(null);

  // Product options with provided priceIds
  const productOptions = [
    { label: "Offer 1 – $15", priceId: "price_1O4oDNI8y7N0oWUMJD6wEvBh", price: 15.0 },
    { label: "Offer 2 – $25", priceId: "price_1O4oCHI8y7N0oWUMfPrLKdd0", price: 25.0 },
    { label: "Offer 3 – $35", priceId: "price_1O4opEI8y7N0oWUMgRSR1Cbu", price: 35.0 },
  ];

  // Find the selected product based on priceId
  const selectedProductOption = productOptions.find(
    (option) => option.priceId === urlPriceId
  ) || productOptions[0];

  // Items based on selected product
  const items = [
    {
      description: selectedProductOption.label,
      quantity: 1,
      unitPrice: selectedProductOption.price,
    },
  ];

  // Calculate totals
  const subtotal = items.reduce(
    (acc: any, item: any) => acc + item.quantity * item.unitPrice,
    0
  );
  const tax = subtotal * 0.1; // 10% tax example
  const total = subtotal + tax;

  // Set initial state based on URL parameters
  React.useEffect(() => {
    setSelectedProduct(urlPriceId);
    setSelectedPayment(urlPaymentMethod);
  }, [urlPriceId, urlPaymentMethod]);

  // Simulate loading (optional, for dynamic data)
  React.useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Print functionality
  const handlePrint = () => {
    window.print();
  };

  // Handle product selection
  const handleProductChange = (value: string) => {
    setSelectedProduct(value);
  };

  // Handle payment method selection
  const handlePaymentMethodChange = (value: string) => {
    setSelectedPayment(value);
  };

  // Handle form submission (optional logging)
  const handleProceedToPayment = () => {
    console.log("Proceeding to payment with priceId:", selectedProduct);
  };

  // Ensure selected priceId for the form
  const selectedPriceId = selectedProduct || urlPriceId;

  return (
    <>
      <Style />
      <Card className="max-w-2xl mx-auto my-8 card">
        <CardHeader className="card-header">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <Logo />
              <CardTitle className="text-2xl">Invoice #{invoice.number}</CardTitle>
            </div>
            <Button
              onClick={handlePrint}
              variant="outline"
              size="sm"
              className="cursor-pointer no-print"
            >
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
          </div>
        </CardHeader>
        <CardContent className="card-content">
          {/* Loading State */}
          {isLoading ? (
            <InvoiceLoading />
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <Customer customer={customer} />
                <div>
                  <h3 className="font-semibold text-lg text-right">Pay To:</h3>
                  <p className="text-right">Worldwide</p>
                </div>
              </div>

              <Separator className="my-4 separator" />

              {/* Invoice Details */}
              <div className="flex flex-row justify-between items-start">
                <Invoice invoice={invoice} />
                <div className="space-y-1">
                  <SelectPrice
                    handleProductChange={handleProductChange}
                    selectedProduct={selectedProduct}
                    productOptions={productOptions}
                  />
                  <SelectPayment
                    handlePaymentMethodChange={handlePaymentMethodChange}
                    selectedPayment={selectedPayment}
                  />
                </div>
              </div>

              {/* Itemized Charges */}
              <div className="border rounded-lg mt-5 mb-5">
                <InvoiceTable items={items} subtotal={subtotal} tax={tax} total={total} />
              </div>

              {/* Stripe Payment Form */}
              <div className="w-full flex">
                <form
                  action="/api/checkout_sessions"
                  method="POST"
                  className="ml-auto no-print"
                >
                  <input type="hidden" name="priceId" value={selectedPriceId} />
                  <Button
                    type="submit"
                    disabled={!selectedProduct || !selectedPayment}
                    className="cursor-pointer px-6"
                    onClick={handleProceedToPayment}
                  >
                    <CreditCardIcon className="mr-2 h-4 w-4" />
                    Pay Now
                  </Button>
                </form>
              </div>

              {/* Payment Instructions and Terms */}
              <Separator className="mt-4 separator" />
              <AccordionInfo />
              {/* Footer */}
              <div className="text-center">
                <p className="font-semibold">Thank you for choosing us</p>
                <p>
                  Contact us at{" "}
                  <a
                    href="mailto:support@ammiteboune.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@ammiteboune.com
                  </a>
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
}