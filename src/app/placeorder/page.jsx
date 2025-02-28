import OrderForm from "@/components/OrderForm";
import React from "react";

function page() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-14">
      {/* topic */}
      <div>
        <h1 className="font-bold text-3xl">Place Order</h1>
      </div>
      {/* form */}
      <div>
        <OrderForm />
      </div>
    </div>
  );
}

export default page;
