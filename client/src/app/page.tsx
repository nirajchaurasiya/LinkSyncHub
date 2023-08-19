"use client";
import React, { Suspense } from "react";
import Homepage from "@/Components/Home/Homepage";
export const dynamic = "force-dynamic";
export default function page() {
  // const getBackend = async () => {
  //   const response = await fetch("/backend");
  //   const data = await response.json();
  //   console.log(data);
  // };
  // useEffect(() => {
  //   getBackend();
  // }, []);
  return (
    <Suspense>
      <Homepage />
    </Suspense>
  );
}
