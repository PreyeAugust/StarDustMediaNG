"use client";

import dynamic from "next/dynamic";
import React, { useEffect } from "react";

import CreativeHero from "@/app/creativeServices/creativeHero";
import CreativeSec from "@/app/creativeServices/creativeSec";


import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

export default function page() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <CreativeHero />
      <CreativeSec />
      

      <Footer />
    </div>
  );
}
