import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';

export const SelectPayment = ({ handlePaymentMethodChange, selectedPayment }: any) => {
  return (
    <div className="space-y-2">
      <small className="font-medium">Payment Method</small>
      <Select
        onValueChange={handlePaymentMethodChange}
        value={selectedPayment || ""}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a method" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Payment Methods</SelectLabel>
            <SelectItem value="credit-card">Credit Card</SelectItem>
            <SelectItem value="paypal">PayPal</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};