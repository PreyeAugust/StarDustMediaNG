"use client";

import dynamic from "next/dynamic";
import React from "react";

import CreativeHero from "@/app/creativeServices/creativeHero";
import CreativeSec from "@/app/creativeServices/creativeSec";

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
      <CreativeHero />
      <CreativeSec />

      <Footer />
    </div>
  );
}
