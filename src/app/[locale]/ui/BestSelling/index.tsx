import React from "react";

import ProductCart from "@/components/ProductCart";
import { SectionTitle1, SectionTitle2 } from "@/components/SectionTitles";
import { Button } from "@/components/ui/button";

export default function BestSelling() {
  return (
    <section className="container mx-auto px-4 pb-[140px]">
      <SectionTitle2 className="mb-3">This Month</SectionTitle2>
      <div className="flex items-center justify-between">
        <SectionTitle1 className="mb-10">Best Selling Products</SectionTitle1>
        <Button className="bg-secondary2Red hover:bg-opacity-90 py-4 px-12 h-[56px]">View All</Button>
      </div>

      <div className="grid grid-cols-4 gap-[30px] mb-[60px]">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </section>
  );
}
