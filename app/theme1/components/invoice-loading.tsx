import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export const InvoiceLoading = () => {
  return (
    <>
      <div className="space-y-4">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-20 w-full" />
      </div>
    </>
  );
};