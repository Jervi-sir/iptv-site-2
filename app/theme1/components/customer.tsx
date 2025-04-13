import React from 'react';

export const Customer = ({ customer }: any) => {
  return (
    <div>
      <h3 className="font-semibold text-lg">Invoiced To:</h3>
      <p>{customer.name}</p>
      <p>{customer.email}</p>
      <p>{customer.address}</p>
    </div>
  );
};