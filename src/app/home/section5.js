import React from "react";
import Image from "next/image";
import brand1 from "@/assets/br-1.png";
import brand2 from "@/assets/br-2.png";
import brand3 from "@/assets/br-3.png";
import brand4 from "@/assets/br-4.png";
import brand5 from "@/assets/br-5.png";

export default function section5() {
  return (
    <div 
    data-aos="fade-up"
    data-aos-delay="1500"
    className="py-8 mt-24 md:block bg-gray-200 dark:bg-white/10 ">
      <div className="container">
        <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
          <Image src={brand1} alt="brand" className="w-[80px] dark:invert" />
          <Image src={brand2} alt="brand" className="w-[80px] dark:invert" />
          <Image src={brand3} alt="brand" className="w-[80px] dark:invert" />
          <Image src={brand4} alt="brand" className="w-[80px] dark:invert" />
          <Image src={brand5} alt="brand" className="w-[80px] dark:invert" />
        </div>
      </div>
    </div>
  );
}
