"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Products } from "@/assests/data";
import { Button } from "./ui/button";
import Image from "next/image";

const clickDelete = (item) => {
  console.log(item);
};

export function TableList() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Index</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>qty</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Products.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>
              <Image
                className="w-40 h-40"
                src={item.image}
                alt="img"
                width={200}
                height={200}
              />
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <input className="w-10" type="number" value={12} onChange={12} />
            </TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell className="text-right">
              <Button onClick={() => clickDelete(item)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
