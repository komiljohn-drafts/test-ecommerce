import React from "react";

import ProductCart from "@/components/ProductCart";
import { SectionTitle1, SectionTitle2 } from "@/components/SectionTitles";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import CountDown from "./CountDown";

export default function Todays() {
  return (
    <section className="container mx-auto px-4 pb-[60px]">
      <SectionTitle2 className="mb-3">Today's</SectionTitle2>
      <div className="flex gap-[87px] mb-10 items-end justify-between">
        <SectionTitle1>Flash Sales</SectionTitle1>
        <CountDown />
      </div>

      <div className="grid grid-cols-4 gap-[30px] mb-[60px]">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>

      <div className="text-center mb-[60px]">
        <Button className="bg-secondary2Red hover:bg-opacity-90 py-4 px-12 h-[56px]">View All Products</Button>
      </div>
      <Separator />
    </section>
  );
}
