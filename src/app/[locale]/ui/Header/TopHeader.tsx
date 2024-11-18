import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

import LanguageSwitcher from "./LanguageSwitcher";

export default function TopHeader() {
  const t = useTranslations("header.top");

  return (
    <section className="bg-black text-white py-[13.5px]">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <span />
        <div className="flex gap-2 items-center">
          <p className="text-sm leading-[18px]">{t("text")}</p>
          <Link className="text-sm leading-6 font-semibold underline hover:no-underline" href="/shop">
            {t("buttonText")}
          </Link>
        </div>
        <LanguageSwitcher />
      </div>
    </section>
  );
}
