import React from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const menuItems = [
  {
    title: "Woman's Fashion",
    hasSubmenu: true,
  },
  {
    title: "Men's Fashion",
    hasSubmenu: true,
  },
  {
    title: "Electronics",
    hasSubmenu: false,
  },
  {
    title: "Home & Lifestyle",
    hasSubmenu: false,
  },
  {
    title: "Medicine",
    hasSubmenu: false,
  },
  {
    title: "Sports & Outdoor",
    hasSubmenu: false,
  },
  {
    title: "Baby's & Toys",
    hasSubmenu: false,
  },
  {
    title: "Groceries & Pets",
    hasSubmenu: false,
  },
  {
    title: "Health & Beauty",
    hasSubmenu: false,
  },
];

export default function BannerCategories() {
  return (
    <Accordion type="single" collapsible className="max-w-[217px] min-w-[217px] py-10 pr-4 border-r border-[#F8F8F8]">
      {menuItems.map((item, index) => (
        <AccordionItem className="border-none" value={`item-${index}`} key={index}>
          {item.hasSubmenu ? (
            <>
              <AccordionTrigger className="py-2 text-text-2 whitespace-nowrap text-base">{item.title}</AccordionTrigger>
              <AccordionContent>{/* Submenu content would go here */}</AccordionContent>
            </>
          ) : (
            <div className="flex items-center py-2">{item.title}</div>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
