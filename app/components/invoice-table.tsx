import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';

export const InvoiceTable = ({ items, subtotal, tax, total }: any) => {
  return (
    <>
      <Table className="table">
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item: any, index: number) => (
            <TableRow key={index}>
              <TableCell>{item.description}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">
                ${(item.quantity * item.unitPrice).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="table-footer">
          <TableRow>
            <TableCell colSpan={2}></TableCell>
            <TableCell colSpan={1} className="text-right">
              Subtotal
            </TableCell>
            <TableCell className="text-right">
              {subtotal.toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}></TableCell>
            <TableCell colSpan={1} className="text-right">
              Credit
            </TableCell>
            <TableCell className="text-right">
              {tax.toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}></TableCell>
            <TableCell colSpan={1} className="font-semibold text-right">
              Total
            </TableCell>
            <TableCell className="text-right font-semibold">
              {total.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};