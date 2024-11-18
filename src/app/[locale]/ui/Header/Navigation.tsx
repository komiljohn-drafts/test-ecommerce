import { Heart, ShoppingCart } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

import HeaderInput from "./HeaderInput";

export default function Navigation() {
  return (
    <div className="pt-10 pb-4 border-b border-[#f8f8f8]">
      <nav className="flex items-center justify-between container mx-auto px-4">
        <Link href={"/"} className="text-2xl leading-6 font-semibold">
          Exclusive
        </Link>
        <ul className="flex justify-center space-x-12">
          <li>
            <Link
              href={"/"}
              className={cn(
                "text-base relative",
                // add isActive toggle to each nav item once other pages are ready
                "before:absolute before:left-0 before:bottom-0 before:content-[''] before:w-full before:h-px before:bg-[#808080]"
              )}
            >
              Home
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-base">
              Contact
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-base">
              About
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-base">
              Sign Up
            </Link>
          </li>
        </ul>
        <div className="flex gap-6 items-center">
          <HeaderInput />
          <div className="flex gap-1.5">
            <Button variant="ghost" size="sm" className="px-1.5 [&_svg]:size-fit">
              <Heart />
            </Button>
            <Button variant="ghost" size="sm" className="px-1.5 [&_svg]:size-fit">
              <ShoppingCart />
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
