"use client";

import React from "react";
import Navigation from "../../../public/components/Navigation";
import { usePathname } from "next/navigation";
import MainBody from "../../../public/components/MainBody";

export default function StartupSignupPage() {
  const info = {
    lineOne: "startup signup page",
  };

  return (
    <>
      <Navigation currentPage={usePathname()} />
      <MainBody info={info} />
    </>
  );
}
