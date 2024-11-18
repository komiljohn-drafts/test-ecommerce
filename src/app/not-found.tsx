import { getLocale } from "next-intl/server";
import React from "react";

import BaseLayout from "@/components/layouts/BaseLayout";

export default async function NotFound() {
  const locale = await getLocale();

  return <BaseLayout locale={locale}>not found</BaseLayout>;
}
