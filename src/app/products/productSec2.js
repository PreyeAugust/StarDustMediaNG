import React from "react";
import "./product.css";
import Image from "next/image";

export default function productSec2({ data }) {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 overAll">
      <div className="aboutContainer">
        <div className="grid101 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="uppercase  font-bold">
              {data.discount}
            </p>
            <br />
            <h1 data-aos="zoom-out" className="uppercase  font-semi-bold">
              {data.title}
            </h1>{" "}
            <br />
          </div>

          {/* second col */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <Image
              src={data.Image}
              alt=""
              className="scale-125 w-[220px] md:w-[240px] mx-auto drop-shadow-2xl object-cover rounded-3xl"
            />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos="fade-up" className="font-bold uppercase">
              {data.date}
            </p>
            <p data-aos="zoom-out" className="titles font-semi-bold">
              {data.title2}
            </p>
            <p data-aos="fade-up" className="font-bold uppercase">
              {data.date2}
            </p>
            <p data-aos="fade-up" className="titles font-semi-bold">
              {data.title3}
            </p>
            <p data-aos="fade-up" className="titles font-bold">
              {data.title4}
            </p>
            <p data-aos="fade-up" className="titles font-bold">
              {data.title5}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
