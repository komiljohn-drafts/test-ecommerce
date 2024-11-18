import "../globals.css";

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BaseLayout from "@/components/layouts/BaseLayout";
import { routing } from "@/i18n/routing";

import Header from "./ui/Header";

export const metadata: Metadata = {
  title: "E-commerce",
  description: "Test task",
};

interface RootLayoutProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function RootLayout({ params }: Readonly<RootLayoutProps>) {
  const { locale } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <BaseLayout locale={locale}>
      <Header />
    </BaseLayout>
  );
}