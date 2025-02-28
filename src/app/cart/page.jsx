import CostCard from "@/components/CostCard";
import React from "react";
import { TableList } from "@/components/table";

function page() {
  return (
    <div>
      {/* topic */}
      <div className="py-8">
        <h1 className="font-bold text-3xl text-center">Cart</h1>
      </div>
      {/* content */}
      <div className="grid grid-cols-3  gap-4 px-4">
        {/* table */}
        <div className="col-span-2">
          <TableList />
        </div>

        {/* Cost card */}
        <div className="col-span-1">
          <CostCard />
        </div>
      </div>
    </div>
  );
}

export default page;
