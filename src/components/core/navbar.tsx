import React from "react";
import { Button } from "../ui/button";
import { HomeIcon, MenuIcon } from "lucide-react";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function Navbar() {
  return (
    <nav className="border-b h-16 flex justify-between items-center px-6">
      <span className="text-xl font-bold">{"< Raven />"}</span>
      <div className="space-x-2 flex items-center">
        <Button className="hidden lg:block">Home</Button>
        <Button className="hidden lg:block">Portfolio</Button>
        <Button className="hidden lg:block">Brain Gear</Button>
        <AnimatedThemeToggler />
        <Sheet>
          <SheetTrigger asChild>
            <Button size={"icon"} className="flex lg:hidden">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex  justify-between items-center px-6">
              <Button className="">
                <HomeIcon />
              </Button>
              <AnimatedThemeToggler />
            </div>
            <div className="space-y-6 px-6">
              <Button className="w-full">Portfolio</Button>
              <Button className="w-full">Brain Gear</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
