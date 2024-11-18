"use client";

import dynamic from "next/dynamic";
import React from "react";

import HeroSectionAbout from "@/app/about/heroSectionAbout";
import AboutSec1 from "@/app/about/aboutSec1";
import AboutSec2 from "@/app/about/aboutSec2";


const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const AboutSec1Data = {
  discount:
    "Stardust Media & Comics is a dynamic publishing house dedicated to inspiring and educating young minds through captivating storytelling. Founded by Queen Irene Onwuka, our mission is to empower children with knowledge, imagination, and a lifelong love of learning. We believe in the transfomative power of stories and strive to create a positive impact on society through engaging and educational content",
  title: "Why Choose Stardust Media & Comics",
  date: "We differentiate ourselves through:",
  title2:
    "Engaging Educational Content: Our comics and books seamlessly blend entertainment with learning, ensuring children retain information while having fun.",
  title3:
    "Customization and Personalization: We offer tailored solutions, from custom comic books to themed events, to meet your specific needs.",
  title4:
    "Commitment to Quality: We deliver exceptional products and services with a focus on high-quality content, design, and production",
  title5:
    "Positive Social Impact: We are dedicated to making a positive difference in the lives of children by promoting literacy, education, and social values.",
  bgColor: "#2c540e",
};

export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSectionAbout />
      <AboutSec1 data={AboutSec1Data} />
      <AboutSec2 />

      <Footer />
    </div>
  );
}
