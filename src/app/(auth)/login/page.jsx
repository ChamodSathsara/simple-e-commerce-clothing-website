"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Component() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const clickLoginButton = () => {
    console.log(user);
  };
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <Card className="container w-1/4">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Please enter your email , username and password to login.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your E mail"
              required
              value={user.email}
              onChange={(e) => {
                e.preventDefault();
                const newEmail = e.target.value;
                setUser((item) => ({ ...item, email: newEmail }));
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Your username"
              required
              value={user.username}
              onChange={(e) => {
                e.preventDefault();
                const newEmail = e.target.value;
                setUser((item) => ({ ...item, username: newEmail }));
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={user.password}
              onChange={(e) => {
                e.preventDefault();
                const newEmail = e.target.value;
                setUser((item) => ({ ...item, password: newEmail }));
              }}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            onClick={clickLoginButton}
            className="w-full hover:bg-blue-500 transition-colors"
          >
            logIn
          </Button>
          <p>
            Are you doen't have Registed
            <Link href={"/signup"} className="font-bold underline">
              Signup
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
