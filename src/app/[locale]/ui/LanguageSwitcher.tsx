"use client";

import { ChevronDown, Languages, Loader } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTransition } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale, usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const languages = [
    { name: "O'zbekcha", locale: "uz", imgUrl: "/images/uzbekistan.png" },
    { name: "English", locale: "en", imgUrl: "/images/usa.png" },
    { name: "Русский", locale: "ru", imgUrl: "/images/russia.png" },
  ];

  function handleSelect(locale: Locale) {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  }

  return (
    <div className="ml-1">
      <DropdownMenu>
        <DropdownMenuTrigger className="text-sm leading-[21px] flex items-center gap-2">
          {isPending && <Loader className="animate-spin" />}
          {params.locale && <span>{languages.find((i) => i.locale === params.locale)?.name}</span>}
          <ChevronDown size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="flex gap-2 items-center">
            <Languages size={16} />
            <span>Language</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {languages.map((item) => (
            <DropdownMenuItem
              key={item.locale}
              className="flex gap-2"
              onClick={() => handleSelect(item.locale as Locale)}
            >
              <Image src={item.imgUrl} width={20} height={20} alt="usa flag" className="min-w-5" />
              <span>{item.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
