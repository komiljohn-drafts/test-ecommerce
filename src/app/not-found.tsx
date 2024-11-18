import { getLocale } from "next-intl/server";
import React from "react";

import BaseLayout from "@/components/layouts/BaseLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

export default async function NotFound() {
  return <NotFoundContent />;
}

export async function NotFoundContent() {
  const locale = await getLocale();

  return (
    <BaseLayout locale={locale}>
      <div className="container px-4 mx-auto pb-[140px] pt-20 text-center">
        <Breadcrumb className="mb-[140px]">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <span className="text-xs">/</span>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>404 Error</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2 className="mb-10 text-[110px] leading-[115px] -tracking-[0.03rem]">404 Not Found</h2>
        <p className="mb-20">Your visited page not found. You may go home page.</p>
        <Link href="/" tabIndex={-1}>
          <Button className="bg-secondary2Red hover:bg-opacity-90 py-4 px-12 h-[56px]">Back to home page</Button>
        </Link>
      </div>
    </BaseLayout>
  );
}
