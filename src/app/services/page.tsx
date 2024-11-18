"use client";

import dynamic from "next/dynamic";
import React, { useEffect } from "react";

import ServiceHero from "@/app/services/serviceHero";
import ServiceSec2 from "@/app/services/serviceSec2";
import ServiceSec3 from "@/app/services/serviceSec3";




import Aos from "aos";
import "aos/dist/aos.css"
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
      <ServiceHero />
      <ServiceSec2 />
      <ServiceSec3 />


      <Footer />
    </div>
  );
}
