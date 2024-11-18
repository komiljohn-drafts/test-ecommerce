import Image from "next/image";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    iconUrl: "/icons/truck.svg",
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    iconUrl: "/icons/headphone-with-mic.svg",
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    iconUrl: "/icons/guarantee.svg",
    title: "MONEY BACK GUARANTEE",
    description: "We reurn money within 30 days",
  },
];

export default function Features() {
  return (
    <div className="flex items-center justify-center gap-[88px]">
      {features.map((feature, index) => (
        <Card key={index} className="border-none shadow-none">
          <CardContent className="flex flex-col items-center gap-6 p-0">
            <div className="size-[58px] shadow-[0_0_0_11px_#C1C0C1] bg-black p-[4px] rounded-full flex justify-center items-center">
              <Image src={feature.iconUrl} width={40} height={40} alt={`feature ${feature.title}`} />
            </div>

            <div className="flex flex-col items-center gap-2">
              <h3 className="font-semibold text-xl text-black">{feature.title}</h3>
              <p className="text-sm leading-[21px] text-black text-center">{feature.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
