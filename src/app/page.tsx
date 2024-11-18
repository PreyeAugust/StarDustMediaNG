"use client";

import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Page from "../app/home/page";

export default function Home() {
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
      <Page />
    </div>
  );
}
