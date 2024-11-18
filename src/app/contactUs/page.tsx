"use client";

import dynamic from "next/dynamic";
import React from "react";

import ContactHero from "@/app/contactUs/contactHero";
import ContactSec2 from "@/app/contactUs/contactSec2";
import FAQAPP from "@/app/contactUs/FAQAPP";

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
      <ContactHero />
      <ContactSec2 />
      <FAQAPP />

      <Footer />
    </div>
  );
}
