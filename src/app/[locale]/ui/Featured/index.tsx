import Image from "next/image";
import React from "react";

import { SectionTitle1, SectionTitle2 } from "@/components/SectionTitles";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

import Features from "./Features";

export default function Featured() {
  return (
    <section className="container mx-auto px-4 pb-[60px]">
      <SectionTitle2 className="mb-3">Featured</SectionTitle2>
      <SectionTitle1 className="mb-10">New Arrival</SectionTitle1>

      <div className="grid grid-cols-4 grid-rows-2 h-[600px] gap-x-[30px] gap-y-[32px] mb-[150px]">
        <div className="rounded-sm col-start-1 col-end-3 row-start-1 row-end-3 bg-black flex flex-col justify-end items-center relative">
          <Image src={"/images/ps5.png"} width={511} height={511} alt="play station 5" />
          <Details
            title="PlayStation 5"
            text="Black and White version of the PS5 coming out on sale."
            className="absolute left-8 bottom-8 max-w-[242px]"
          />
        </div>
        <div className="rounded-sm col-start-3 col-end-5 bg-[#0E0E0E] relative flex justify-end">
          <Image src={"/images/woman.png"} width={432} height={286} alt="attractive woman" />
          <Details
            title="Women's Collections"
            text="Featured woman collections that give you another vibe."
            className="absolute left-6 bottom-6 max-w-[255px]"
          />
        </div>
        <div className="rounded-sm bg-[#1B1B1B] relative flex justify-center items-center">
          <Image src={"/images/speakers.png"} width={210} height={222} alt="speakers" />
          <Details
            title="Speakers"
            text="Amazon wireless speakers"
            className="absolute left-6 bottom-6 max-w-[191px]"
          />
        </div>
        <div className="rounded-sm bg-[#2E2E2E] relative flex justify-center items-center">
          <Image src={"/images/parfume.png"} width={210} height={222} alt="parfume" />
          <Details title="Parfume" text="GUCCI INTENSE OUD EDP" className="absolute left-6 bottom-6 max-w-[191px]" />
        </div>
      </div>
      <Features />
    </section>
  );
}

function Details({ className, title, text }: { className?: string; title: string; text: string }) {
  return (
    <div className={cn("text-white", className)}>
      <h5 className="text-2xl leading-[24px] font-semibold mb-4">{title}</h5>
      <p className="text-sm leading-[21px] mb-4">{text}</p>
      <Link href="/" className="font-medium underline decoration-[#808080]">
        Shop Now
      </Link>
    </div>
  );
}
