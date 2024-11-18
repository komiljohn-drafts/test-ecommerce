import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Button } from "./ui/button";

interface Props {
  className?: string;
}

export default function ProductCart({ className }: Props) {
  return (
    <article className={className}>
      <div className="bg-bgSecondary h-[250px] flex items-center justify-center relative rounded-sm group overflow-hidden">
        <p className="bg-secondary2Red rounded-sm py-1 px-3 text-xs leading-[18px] absolute left-3 top-3 text-white">
          -40%
        </p>
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <Button
            className="w-[34px] h-[34px] bg-white rounded-full [&_svg]:size-fit [&_svg]:stroke-[1.6px]"
            variant="ghost"
          >
            <Heart />
          </Button>
          <Button
            className="w-[34px] h-[34px] bg-white rounded-full [&_svg]:size-fit [&_svg]:stroke-[1.6px]"
            variant="ghost"
          >
            <Eye />
          </Button>
        </div>
        <Image src={"/images/product-1.png"} width={190} height={180} alt="product" />
        <Button className="w-full absolute h-[41px] -bottom-[41px] left-0 py-2 rounded-t-none text-base font-medium group-hover:bottom-0 transition-all">
          Add To Cart
        </Button>
      </div>
      <div className="pt-4">
        <p className="mb-2 font-medium">HAVIT HV-G92 Gamepad</p>
        <p className="flex gap-3 mb-2">
          <span className="font-medium text-secondary2Red">$120</span>
          <span className="font-medium line-through text-[#808080]">$160</span>
        </p>
        <div className="flex gap-2 items-center">
          <div className="flex gap-1">
            <Image src={"/icons/star.svg"} width={20} height={20} alt="star" />
            <Image src={"/icons/star.svg"} width={20} height={20} alt="star" />
            <Image src={"/icons/star.svg"} width={20} height={20} alt="star" />
            <Image src={"/icons/star.svg"} width={20} height={20} alt="star" />
          </div>
          <span className="text-sm leading-[21px] font-semibold text-[#808080]">(88)</span>
        </div>
      </div>
    </article>
  );
}
