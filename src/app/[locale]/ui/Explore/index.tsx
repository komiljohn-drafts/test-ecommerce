import React from "react";

import ProductCart from "@/components/ProductCart";
import { SectionTitle1, SectionTitle2 } from "@/components/SectionTitles";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Explore() {
  return (
    <section className="container mx-auto px-4 pb-[60px]">
      <SectionTitle2 className="mb-3">Out Products</SectionTitle2>
      <SectionTitle1 className="mb-10">Explore Our Products</SectionTitle1>

      <div className="grid grid-cols-4 gap-x-[30px] mb-[60px] gap-y-[60px]">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
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
