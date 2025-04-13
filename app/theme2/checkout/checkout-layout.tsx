"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { PersonalInfoForm } from "./personal-info-form";
import { Card, CardContent } from "@/components/ui/card";
import { Elements } from "@stripe/react-stripe-js";
import { OrderSummary } from "./order-summary";
import { Theme2Layout } from "../theme2-layout";
import { SuccessMessage } from "./success-message";
import { pricingPlans } from "@/db/offers";
import { PaymentForm } from "./payment-form";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useSearchParams } from "next/navigation"; // Add this import

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const planDetails = pricingPlans.reduce(
  (acc, plan) => {
    const monthlyPrice = parseFloat(plan.price.replace(/[^0-9.]/g, ""));
    const yearlyPrice = monthlyPrice * 0.8;
    acc[plan.title.toLowerCase()] = {
      name: plan.title,
      monthlyPrice,
      yearlyPrice,
    };
    return acc;
  },
  {} as Record<string, { name: string; monthlyPrice: number; yearlyPrice: number }>
);
const planIdMap: Record<string, string> = {
  starter: "starter",
  pro: "pro",
  elite: "elite",
};

const convertToSubcurrency = (amount: number) => Math.round(amount * 100);

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  location?: string;
}

export const CheckoutLayout = () => {
  const [step, setStep] = useState(1);
  const [clientSecret, setClientSecret] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [isComplete, setIsComplete] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  // Use useSearchParams to get query parameters
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan")?.toLowerCase();
  const billingParam = searchParams.get("billing");

  useEffect(() => {
    if (planId && billingParam && ["monthly", "yearly"].includes(billingParam)) {
      console.log("Advancing to step 2:", { planId, billingParam }); // Debug log
      setSelectedPlan(planId);
      setBilling(billingParam as "monthly" | "yearly");
      setStep(2);
    }
  }, [planId, billingParam]);

  const plan = selectedPlan
    ? planDetails[planIdMap[selectedPlan] || selectedPlan] || planDetails.pro
    : planDetails.pro;
  const price = billing === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    location: "",
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    if (step === 3 && selectedPlan && !clientSecret) {
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: convertToSubcurrency(price),
          currency: "usd",
          metadata: { planId: selectedPlan, billing, price: price.toFixed(2) },
        }),
      })
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then((data) => {
          if (data.clientSecret) {
            setClientSecret(data.clientSecret);
          } else {
            setErrorMessage("Invalid response from payment intent API.");
          }
        })
        .catch((error) => {
          console.error("Error fetching clientSecret:", error);
          setErrorMessage("Failed to initialize payment. Please try again.");
        });
    }
  }, [price, selectedPlan, billing, step, clientSecret]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = (fields: (keyof FormData)[]) => {
    const errors: Partial<FormData> = {};
    fields.forEach((field) => {
      if (!formData[field]) errors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
      else if (field === "email" && !/\S+@\S+\.\S+/.test(formData.email))
        errors.email = "Invalid email address";
      else if (field === "phone" && !/^\+?\d{10,15}$/.test(formData.phone.replace(/\D/g, "")))
        errors.phone = "Invalid phone number";
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    const stepFields: (keyof FormData)[][] = [
      [], // Step 1: Plan selection
      ["fullName", "email", "phone"], // Step 2: Personal info
      [], // Step 3: Payment (handled by Stripe)
    ];
    if (step === 1 && selectedPlan) {
      setStep(2);
      window.scrollTo(0, 0);
    } else if (step === 2 && validateForm(stepFields[1])) {
      setStep(3);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const getPrice = (price: string) => {
    const monthlyPrice = parseFloat(price.replace(/[^0-9.]/g, ""));
    return billing === "yearly" ? (monthlyPrice * 0.8).toFixed(2) : monthlyPrice.toFixed(2);
  };

  return (
    <Theme2Layout>
      <main className="flex-grow pt-28 pb-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {isComplete ? (
            <SuccessMessage plan={plan} billing={billing} price={price} />
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Complete Your Subscription</h1>
                {selectedPlan && (
                  <p className="text-gray-600">
                    Subscribing to {plan.name} ({billing === "yearly" ? "Yearly" : "Monthly"})
                  </p>
                )}
              </div>

              <div className="flex mb-8">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex w-full items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                        step >= num ? "bg-violet-400 text-white" : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {num}
                    </div>
                    {num < 3 && (
                      <div
                        className={`h-1 flex-grow ${
                          step > num ? "bg-violet-400" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      {step === 1 && (
                        <div>
                          <h2 className="text-xl font-semibold mb-6">Select Your Plan</h2>
                          <div className="flex justify-center mb-6">
                            <div className="bg-gray-100 p-1 rounded-full inline-flex">
                              {["monthly", "yearly"].map((period) => (
                                <button
                                  key={period}
                                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                                    billing === period
                                      ? "bg-white shadow-md text-gray-800"
                                      : "text-gray-500 hover:text-gray-700"
                                  }`}
                                  onClick={() => setBilling(period as "monthly" | "yearly")}
                                >
                                  {period.charAt(0).toUpperCase() + period.slice(1)}
                                  {period === "yearly" && (
                                    <span className="text-xs font-bold text-green-500"> Save 20%</span>
                                  )}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col gap-4">
                            {pricingPlans.map((plan) => (
                              <div
                                key={plan.priceId}
                                className={`rounded-xl flex overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 ${
                                  plan.isPopular
                                    ? "border-2 border-violet-400 relative"
                                    : "bg-white shadow-md"
                                }`}
                              >
                                {plan.isPopular && (
                                  <div className="absolute top-0 right-0 bg-violet-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    MOST POPULAR
                                  </div>
                                )}
                                <div className="flex flex-row flex-1 p-6 items-center">
                                  <div className="flex-1 pr-4">
                                    <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                                    <div className="mb-2">
                                      <span className="text-2xl font-bold">${getPrice(plan.price)}</span>
                                      <span className="text-gray-500 text-xs">
                                        /{billing === "yearly" ? "mo (billed yearly)" : "month"}
                                      </span>
                                    </div>
                                    <p className="text-gray-600 text-sm">{plan.description}</p>
                                  </div>
                                  <div className="flex-1 flex flex-col justify-between">
                                    <ul className="space-y-2 mb-4">
                                      {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                          <Check size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />
                                          <span className="text-gray-700 text-sm">{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                    <Button
                                      className={`w-full ${
                                        plan.isPopular ? "btn-primary" : "btn-secondary"
                                      }`}
                                      onClick={() => {
                                        setSelectedPlan(plan.title.toLowerCase());
                                        nextStep();
                                      }}
                                    >
                                      Choose {plan.title}
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {step === 2 && (
                        <PersonalInfoForm
                          formData={formData as any}
                          formErrors={formErrors as any}
                          handleChange={handleChange}
                          nextStep={nextStep}
                          prevStep={prevStep}
                        />
                      )}
                      {step === 3 && clientSecret && (
                        <Elements
                          stripe={stripePromise}
                          options={{
                            clientSecret,
                            appearance: { theme: "stripe", variables: { colorPrimary: "#6b21a8" } },
                          }}
                        >
                          <PaymentForm
                            formData={formData}
                            clientSecret={clientSecret}
                            prevStep={prevStep}
                            setErrorMessage={setErrorMessage}
                            setIsComplete={setIsComplete}
                          />
                        </Elements>
                      )}
                      {step === 3 && !clientSecret && (
                        <div className="flex items-center justify-center p-6">
                          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-violet-400">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                      )}
                      {errorMessage && step === 3 && (
                        <div className="text-red-500 text-sm mt-4">{errorMessage}</div>
                      )}
                    </CardContent>
                  </Card>
                </div>
                <div className="">
                  {selectedPlan && <OrderSummary plan={plan} billing={billing} price={price} />}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </Theme2Layout>
  );
};