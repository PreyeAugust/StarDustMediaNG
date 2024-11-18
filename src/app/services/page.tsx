"use client";

import dynamic from "next/dynamic";
import React from "react";

import ServiceHero from "@/app/services/serviceHero";
import ServiceSec2 from "@/app/services/serviceSec2";
import ServiceSec3 from "@/app/services/serviceSec3";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

export default function page() {
  return (
    <div>
      <Navbar />
      <ServiceHero />
      <ServiceSec2 />
      <ServiceSec3 />

      <Footer />
    </div>
  );
}
