"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";

function CastCard() {
  const router = useRouter();
  const clickPlaceOrder = () => {
    console.log("Click plce order");
    router.push("/placeorder");
  };
  return (
    <div className="flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Total Cost</CardTitle>
          <CardDescription>Add your Order to click this</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-row justify-start space-y-1.5">
                <h1>Itom price :</h1>
                <h1>LKR 2500.00</h1>
              </div>
              <div className="flex flex-row justify-start space-y-1.5">
                <h1>Delevery cost :</h1>
                <h1>LKR 350.00</h1>
              </div>
              <div className="flex flex-row justify-start space-y-1.5">
                <h1>descount :</h1>
                <h1>LKR 00</h1>
              </div>
              <hr className="border border-black" />
              <div className="flex font-bold flex-row justify-start space-y-1.5">
                <h1>Total Cost :</h1>
                <h1>LKR 7550.00</h1>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex w-full">
          <Button className="w-full" onClick={clickPlaceOrder}>
            Place Order
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CastCard;
