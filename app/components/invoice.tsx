import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import React from 'react';

export const Invoice = ({ invoice }: any) => {
  return (
    <div className="">
      <div className="flex space-x-1">
        <Label>Invoice Number:</Label>
        <p>{invoice.number}</p>
      </div>
      <div className="flex space-x-1">
        <Label>Issue Date:</Label>
        <p>{invoice.issueDate}</p>
      </div>
      <div className="flex space-x-1">
        <Label>Due Date:</Label>
        <p>{invoice.dueDate}</p>
      </div>
      <div className="flex space-x-1">
        <Label>Status:</Label>
        <Badge
          variant={invoice.status === "Paid" ? "default" : "secondary"}
        >
          {invoice.status}
        </Badge>
      </div>
    </div>
  );
};