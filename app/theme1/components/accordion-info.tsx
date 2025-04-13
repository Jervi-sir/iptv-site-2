import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';

export const AccordionInfo = () => {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-2">
            Payment Instructions
          </AccordionTrigger>
          <AccordionContent className="px-2">
            Payment is due immediately to complete your order. Accepted
            methods: Credit Card, PayPal.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="px-2">
            Terms & Conditions
          </AccordionTrigger>
          <AccordionContent className="px-2">
            All sales are final upon payment. Ensure you have selected
            the correct plan before proceeding. We are not responsible
            for service interruptions due to external factors.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </>
  );
};