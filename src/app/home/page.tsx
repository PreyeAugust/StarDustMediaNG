"use client";

import dynamic from "next/dynamic";
import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import HeroSection from "@/app/home/heroSection";
import Section1 from "@/app/home/section1";
import Section101 from "@/app/home/section1(101)";
import Section2 from "@/app/home/section2";
import Section3 from "@/app/home/section3";
import Section4 from "@/app/home/section4";
import Section5 from "@/app/home/section5";
import comic from "@/assets/section3IMG2-removebg-preview.png";
import comic2 from "@/assets/section3IMG.jpg";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const Section3Data = {
  discount: "To Ignite",
  title: "Young Imaginations",
  date: "Through engaging and inspiring content",
  Image: comic,
  title2: "To Be The Leading Provider",
  title3: "Of Innovative",
  title4:
    "& Educational Media for Children Shaping a brighter Future Through The Power Of Storytelling",
  bgColor: "#f42c37",
};

const Section3Data2 = {
  discount: "Develop & Publish",
  title: "A Diverse Range",
  date: "Of Educational Comic Books",
  Image: comic2,
  title2: "Expand Our Reach",
  title3: "Through Partnerships",
  title4: "With Schools, Libraries And Organizations",
  bgColor: "#2C540E",
};

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

      <HeroSection />
      <Section1 />
      <Section101 />
      <Section2 />
      <Section3 data={Section3Data} />
      <Section4 />
      <Section3 data={Section3Data2} />
      <Section5 />

      <Footer />
    </div>
  );
}
