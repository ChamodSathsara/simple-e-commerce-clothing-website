"use client";
import React from "react";
import Card from "./Cart";
import { Products } from "@/assests/data";

function CardList() {
  return (
    <div className="my-10 ">
      <div className="grid grid-cols-5 gap-x-10 gap-y-10">
        {Products.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            category={item.category}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
