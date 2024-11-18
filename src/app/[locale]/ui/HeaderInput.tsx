import { Search } from "lucide-react";
import React from "react";

import { Input } from "@/components/ui/input";

export default function HeaderInput() {
  return (
    <div className="relative">
      <Input
        placeholder="What are you looking for?"
        className="border-none bg-bgSecondary placeholder:text-[#7B7B7B] py-[7px] pl-5 pr-[48px] min-w-[243px] placeholder:text-xs text-xs h-[38px]"
      />
      <Search className="absolute top-2 right-4" />
    </div>
  );
}
