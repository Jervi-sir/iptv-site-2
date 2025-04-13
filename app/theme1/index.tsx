import React, { Suspense } from 'react';
import InvoiceClient from './invoice-client';
// Explicitly type searchParams as a resolved object after awaiting
interface SearchParams {
  name?: string;
  email?: string;
  address?: string;
  invoiceId?: string;
  issueDate?: string;
  dueDate?: string;
  status?: string;
  priceId?: string;
  paymentMethod?: string;
}

export const Theme1 = async ({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) => {
    // Await searchParams to ensure all properties are resolved
    const resolvedSearchParams: SearchParams = await searchParams;
  
    // Extract data from resolved searchParams
    const customer = {
      name: (typeof resolvedSearchParams.name === "string" ? resolvedSearchParams.name : "John Doe"),
      email: (typeof resolvedSearchParams.email === "string" ? resolvedSearchParams.email : "john.doe@example.com"),
      address: (typeof resolvedSearchParams.address === "string" ? resolvedSearchParams.address : "456 Viewer Rd, Watchtown, USA"),
    };
  
    const invoice = {
      number: (typeof resolvedSearchParams.invoiceId === "string" ? resolvedSearchParams.invoiceId : "INV-2025-001"),
      issueDate: (typeof resolvedSearchParams.issueDate === "string" ? resolvedSearchParams.issueDate : "April 12, 2025"),
      dueDate: (typeof resolvedSearchParams.dueDate === "string" ? resolvedSearchParams.dueDate : "April 12, 2025"),
      status: (typeof resolvedSearchParams.status === "string" ? resolvedSearchParams.status : "Pending"),
    };
  
    const urlPriceId = (typeof resolvedSearchParams.priceId === "string" ? resolvedSearchParams.priceId : "price_1O4oDNI8y7N0oWUMJD6wEvBh");
    const urlPaymentMethod = (typeof resolvedSearchParams.paymentMethod === "string" ? resolvedSearchParams.paymentMethod : null);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InvoiceClient
        customer={customer}
        invoice={invoice}
        urlPriceId={urlPriceId}
        urlPaymentMethod={urlPaymentMethod}
      />
    </Suspense>
  );
};