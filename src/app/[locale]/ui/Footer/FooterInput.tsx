import { SendHorizontalIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FooterInput() {
  return (
    <div className="relative">
      <Input
        placeholder="Enter your email"
        className="border-white bg-black placeholder:text-[#7B7B7B] py-[7px] pl-5 pr-[48px] min-w-[243px] placeholder:text-base text-base h-[48px]"
      />
      <Button variant="ghost" size="sm" className="px-1.5 [&_svg]:size-fit absolute top-2 right-[14px]">
        <SendHorizontalIcon className="" />
      </Button>
    </div>
  );
}
