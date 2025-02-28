import React from "react";
import heroImage from "@/assests/hero.jpg";
import { Button } from "./ui/button";
import { ShoppingBasket } from "lucide-react";
import { UserRound } from "lucide-react";
import { clickShoping, clickSignup } from "./buttonclicks/click";

function Hero() {
  return (
    <div
      className=" bg-cover bg-center flex items-center justify-center "
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div className="w-screen h-[91vh] flex flex-col justify-center gap-8 items-center container content-center">
        {/* Header and description */}
        <div className="backdrop-opacity-35 flex flex-col justify-center items-center gap-8">
          <h1 className="font-bold text-6xl text-green-900 uppercase text-center">
            Select your design
          </h1>
          <p className="text-center text-lg font-semibold text-white w-1/2 bg-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            molestiae libero minus porro consequuntur provident nemo eaque
            fugiat. Earum officia in temporibus rerum repellendus totam, quo
            consequuntur magni aperiam placeat molestias exercitationem velit,
            maxime fugiat voluptas!
          </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-row justify-between items-center gap-8">
          <Button
            onClick={clickShoping}
            className="bg-white rounded-none text-lg font-bold uppercase text-black hover:bg-black hover:text-white"
          >
            <ShoppingBasket />
            Shopping
          </Button>
          <Button
            onClick={clickSignup}
            className="bg-white rounded-none text-lg font-bold uppercase text-black  hover:bg-black hover:text-white"
          >
            <UserRound />
            SignUp
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
