import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { ArrowLeft, CreditCard } from "lucide-react";
import { useState } from "react";

export const PaymentForm = ({
  formData,
  clientSecret,
  prevStep,
  setErrorMessage,
  setIsComplete,
}: {
  formData: any;
  clientSecret: string;
  prevStep: () => void;
  setErrorMessage: (msg: string | undefined) => void;
  setIsComplete: (complete: boolean) => void;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaymentElementReady, setIsPaymentElementReady] = useState(false); // New state for PaymentElement readiness

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements || !clientSecret) {
      setErrorMessage("Payment system not ready.");
      setIsProcessing(false);
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      setIsProcessing(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
        payment_method_data: {
          billing_details: {
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            address: {
              line1: formData.address,
              city: formData.city,
              postal_code: formData.zipCode,
              country: formData.country,
            },
          },
        },
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setIsProcessing(false);
    } else {
      setIsComplete(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
      <div className="space-y-4">
        <Label className="flex items-center">
          <CreditCard size={16} className="mr-1" /> Payment Details
        </Label>
        {!isPaymentElementReady && (
          <div className="flex items-center justify-center p-6">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-violet-400">
              <span className="sr-only">Loading payment form...</span>
            </div>
            <span className="ml-2 text-gray-600">Loading payment form...</span>
          </div>
        )}
        <div className={`${isPaymentElementReady ? "block" : "hidden"}`}>
          <PaymentElement
            onReady={() => {
              setIsPaymentElementReady(true); // Set ready when PaymentElement loads
            }}
            options={{
              defaultValues: {
                billingDetails: {
                  email: formData.email || "",
                },
              },

            }}

          />
        </div>
      </div>
      <div className="flex gap-4 mt-8">
        <Button type="button" variant="outline" onClick={prevStep}>
          <ArrowLeft size={16} className="mr-1" /> Back
        </Button>
        <Button
          type="submit"
          className="btn-primary flex-grow"
          disabled={isProcessing || !stripe || !elements || !isPaymentElementReady} // Disable until ready
        >
          {isProcessing ? "Processing..." : "Complete Subscription"}
        </Button>
      </div>
    </form>
  );
};