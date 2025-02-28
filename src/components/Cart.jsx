import Image from "next/image";
import React from "react";
import pic1 from "@/assests/tshirt/10.jpg";
import { Button } from "./ui/button";

function Card({ image, category, title, description, price }) {
  return (
    <div>
      <div className="flex flex-col  gap-3 bg-gray-100 border-2 hover:shadow-[-7px_7px_0px_#000000] p-2 mb-2">
        {/* image */}
        <div className="flex flex-col justify-center items-center ">
          <Image
            className="w-[320px] h-[340px]"
            src={image}
            width={320}
            height={340}
            alt="img"
          />
        </div>
        {/* category */}
        <div className="flex justify-start items-center">
          <p className="text-white font-bold text-sm bg-black px-3 ">
            {" "}
            {category}
          </p>
        </div>
        {/* name and description*/}
        <div className="flex flex-col gap-3 justify-center items-start">
          <p className="font-semibold">{title}</p>
          <p className="text-start text-gray-500">{description}</p>
        </div>
        {/* price */}
        <div className="flex flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-bold">{price}</p>
          <p className="text-sm font-bold underline">{price}</p>
        </div>
        {/* add to cart button */}
        <div className="min-w-full mt-2">
          <Button className="w-full">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
