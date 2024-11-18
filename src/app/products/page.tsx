"use client";

import dynamic from "next/dynamic";

import React from "react";
import ProductHero from "@/app/products/productHero";
import ProductSec1 from "@/app/products/productSec1";
import ProductSec2 from "@/app/products/productSec2";

import Img1 from "@/assets/The Patriot Kids - Cover.png";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const ProductServices = {
  discount: "Merchandise",
  title:
    "Show off your love for Stardust Media & Comics with our line of merchandise, including t-shirts, mugs, and more",
  img: Img1,
  date: "Event Planning Services:",
  title2:
    "Let us handle the stress of planning your child's special event with our tailored event planning services.",
  date2: "Digital Downloads:",
  title3:
    "Make our educational content accessible anytime, anywhere with our digital downloads of e-books and audiobooks.",
  bgColor: "#2c540e",
};

export default function page() {
  return (
    <div>
      <Navbar />
      <ProductHero />
      <ProductSec1 />
      <ProductSec2 data={ProductServices} />

      <Footer />
    </div>
  );
}
