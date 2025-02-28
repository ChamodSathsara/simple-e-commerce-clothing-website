"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Logo from "@/assests/logo/logo.png";
import { Button } from "./ui/button";
import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";

import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();

  const clickSignup = () => {
    console.log("Clickd signup button");
    router.push("/signup");
  };

  const clickCart = () => {
    console.log("Clicked Card icon");
    router.push("/cart");
  };
  const navItems = [
    { id: 1, name: "Home", link: "/" },
    {
      id: 2,
      name: "Shop",
      dropdown: [
        { id: 1, name: "Kids", link: "/kids" },
        { id: 2, name: "Mens", link: "/mens" },
        { id: 3, name: "Womens", link: "/womens" },
      ],
      link: "/",
    },
    { id: 3, name: "About", link: "/about" },
  ];

  return (
    <div className="flex items-center justify-center bg-amber-100">
      <div className="flex flex-row justify-between items-center container">
        {/* logo icon */}
        <div>
          <Image src={Logo} width={80} height={80} alt="logo" />
        </div>
        {/* nav links */}
        <div className="flex flex-row gap-8 justify-center items-center">
          {navItems.map((item) => (
            <div key={item.id}>
              {item.dropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="font-bold  cursor-pointer">
                    {item.name}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black text-white rounded-none mt-6">
                    {item.dropdown.map((subItem) => (
                      <DropdownMenuItem
                        className="rounded-none mt-1"
                        key={subItem.id}
                      >
                        <Link href={subItem.link}>{subItem.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link className="font-bold  duration-200" href={item.link}>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        {/* login and cart button */}
        <div className="flex gap-14 ">
          {/* Cart icon */}
          <div
            onClick={clickCart}
            className=" cursor-pointer flex justify-center items-center font-bold text-2xl "
          >
            <ShoppingCart />
            <Badge className="bg-red-500 mt-[-35px] font-bold text-sm rounded-full">
              0
            </Badge>
          </div>
          {/* LoginButton */}
          <div>
            <Button
              onClick={clickSignup}
              className="cursor-pointer text-sm font-bold hover:text-black hover:bg-white duration-200"
            >
              <User />
              SIGNUP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
