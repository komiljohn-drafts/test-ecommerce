import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: ReactNode;
}

export function SectionTitle1({ children, className }: Props) {
  return <h3 className={cn("text-4xl leading-[48px] font-semibold -tracking-[0.04rem]", className)}>{children}</h3>;
}

export function SectionTitle2({ className, children }: Props) {
  return (
    <div className={cn("flex gap-4 items-center", className)}>
      <div className="bg-secondary2Red w-5 h-10 rounded-sm" />
      <h2 className="relative text-base leading-[20px] font-semibold text-secondary2Red">{children}</h2>
    </div>
  );
}
