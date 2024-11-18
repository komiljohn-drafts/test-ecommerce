import React from "react";

import BannerCarousel from "@/app/[locale]/ui/Banner/BannerCarousel";
import BannerCategories from "@/app/[locale]/ui/Banner/BannerCategories";

export default function Banner() {
  return (
    <div className="container mx-auto px-4 mb-[140px] flex justify-between">
      <BannerCategories />
      <BannerCarousel />
    </div>
  );
}
