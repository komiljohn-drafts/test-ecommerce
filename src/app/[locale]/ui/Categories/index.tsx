"use client";

import Image from "next/image";
import React, { useState } from "react";

import { SectionTitle1, SectionTitle2 } from "@/components/SectionTitles";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import categories from "./data";

export default function Categories() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="container mx-auto px-4 pb-[60px]">
      <SectionTitle2 className="mb-3">Categories</SectionTitle2>
      <SectionTitle1 className="mb-[60px]">Browse By Category</SectionTitle1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {categories.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6" onClick={() => setActiveIdx(index)}>
              <div className="p-px">
                <div
                  className={cn(
                    "flex flex-col items-center justify-center py-[25px] rounded-sm border border-[#0000004D] stroke-white",
                    activeIdx === index && "bg-secondary2Red border-transparent text-white stroke-white fill-white"
                  )}
                >
                  <Image src={item.iconUrl} width={56} height={56} className="mb-4" alt="phone category" />
                  <p>{item.text}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute right-0 -top-[83px] flex gap-2">
          <CarouselPrevious variant="outline" size="icon" className="bg-bgSecondary size-[46px] [&_svg]:size-fit" />
          <CarouselNext variant="outline" size="icon" className="bg-bgSecondary size-[46px] [&_svg]:size-fit" />
        </div>
      </Carousel>
      <Separator className="mt-[70px]" />
    </section>
  );
}
