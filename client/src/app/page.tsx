import React, { Suspense } from "react";
import Homepage from "@/Components/Home/Homepage";
export const dynamic = "force-dynamic";
export default function page() {
  return (
    <Suspense>
      <Homepage />
    </Suspense>
  );
}
