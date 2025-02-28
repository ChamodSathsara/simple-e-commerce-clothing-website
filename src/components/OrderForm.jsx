import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";

function OrderForm() {
  return (
    <div>
      <div className="flex flex-col container gap-8">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Full Name</Label>
          <Input
            type="text"
            id="name"
            className="rounded-none"
            placeholder="Full name"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            id="address"
            className="rounded-none"
            placeholder="Enter Address"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="tel">Telephone Number</Label>
          <Input
            type="Telephone"
            id="tel"
            className="rounded-none"
            placeholder="07* *** ****"
          />
        </div>
        <Button>Comfirm Order</Button>
      </div>
    </div>
  );
}

export default OrderForm;
