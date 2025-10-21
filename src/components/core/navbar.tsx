"use client";
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
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b h-16 flex justify-between items-center px-6">
      <span className="text-xl font-bold">{"< Raven />"}</span>

      <div className="space-x-2 flex items-center">
        {/* Desktop Links */}
        <Button className="hidden lg:block" asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button className="hidden lg:block" asChild>
          <Link href="/portfolio">Portfolio</Link>
        </Button>
        <Button className="hidden lg:block" asChild>
          <Link href="/brain-gear">Brain Gear</Link>
        </Button>

        <AnimatedThemeToggler />

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="flex lg:hidden">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="flex flex-col gap-6 ">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            {/* Top Row */}
            <div className="flex justify-between items-center px-6">
              <Button asChild>
                <Link href="/">
                  <HomeIcon />
                </Link>
              </Button>
              <AnimatedThemeToggler />
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-4 px-6">
              <Button asChild className="w-full">
                <Link href="/portfolio">Portfolio</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/brain-gear">Brain Gear</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
