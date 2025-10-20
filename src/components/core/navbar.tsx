import React from "react";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b h-16 flex justify-between items-center px-6">
      <span className="text-xl font-bold">{"< Raven />"}</span>
      <div className="space-x-2 flex items-center">
        <Button>Home</Button>
        <Button>Portfolio</Button>
        <Button>Brain Gear</Button>
        <Button size={"icon"}>
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
}
