import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function BannerCarousel() {
  return (
    <div className="max-w-[calc(100%-199px)] ml-[45px] mt-10 bg-black h-fit">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-full bg-black">
              <div className="p-px">
                <div className="flex items-center justify-between pl-[64px]">
                  <div className="text-white">
                    <Image src={"/images/apple.png"} width={40} height={49} className="" alt="apple logo" />
                    <p className="mt-5 text-5xl leading-[60px] font-semibold mb-[22px] max-w-[294px]">
                      Up to 10% off Voucher
                    </p>
                    <Link href={"/"} className="flex gap-2">
                      <span className="font-medium underline">Show Now</span>
                      <ArrowRight />
                    </Link>
                  </div>
                  <Image src={"/images/iphone.png"} width={496} height={352} className="mt-4" alt="iphone" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute right-0 -top-2 flex gap-2"></div>
      </Carousel>
    </div>
  );
}
