import React from "react";
import Logo from "@/assests/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { InputWithButton } from "./InputWithButton";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";

function Footer() {
  const socialLinks = [
    { id: 1, name: "Facebook", link: "/", icon: <Facebook /> },
    { id: 2, name: "Instagrame", link: "/", icon: <Instagram /> },
    { id: 3, name: "Twitter", link: "/", icon: <Instagram /> },
    { id: 4, name: "Linkdin", link: "/", icon: <Instagram /> },
  ];
  return (
    <div className="h-[40vh] flex flex-col justify-between items-center bg-gray-200">
      <div className="grid grid-cols-3 container pt-10">
        {/* logo address and tele number */}
        <div className="flex flex-col gap-5">
          {/* Logo */}
          <Image src={Logo} alt="logo" width={40} height={40} />
          {/* address */}
          <p className="font-bold">
            No 45 , Main Street , Colombo 04 ,<br /> Sri Lanka.
          </p>
          {/* tel number */}
          <p className="font-bold">+94 71 000 254 12</p>
        </div>
        {/* Links */}
        <div className="flex flex-col justify-center items-center gap-4">
          {/* topic */}
          <h1 className="font-bold">LINKS</h1>
          <div className="flex flex-col gap-1.5">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Kids</Link>
            <Link href={"/"}>Mens</Link>
            <Link href={"/"}>Womens</Link>
          </div>
        </div>
        {/* email boc and social media links */}
        <div className="space-y-5">
          {/* Emailbox */}
          <div>
            <InputWithButton />
          </div>
          {/* Social media Links */}
          <div className="flex gap-5">
            {socialLinks.map((item) => (
              <div
                className="w-10 h-10 bg-black text-white flex justify-center items-center font-semibold rounded-full"
                key={item.id}
              >
                <p>{item.icon}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="bg-black w-full flex justify-center py-4">
        <p className="text-sm text-white font-bold ">
          Copy Rights by Chamod @2025
        </p>
      </div>
    </div>
  );
}

export default Footer;
