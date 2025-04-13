import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';

export const SelectPrice = ({ handleProductChange, selectedProduct, productOptions }: any) => {
  return (
    <div className="space-y-2">
      <small className="font-medium">Product</small>
      <Select
        onValueChange={handleProductChange}
        value={selectedProduct || ""}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a product" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select Product</SelectLabel>
            {productOptions?.map((option: any) => (
              <SelectItem key={option.priceId} value={option.priceId}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};