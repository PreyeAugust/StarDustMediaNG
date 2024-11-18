import React from "react";
import "./product.css";
import Image from "next/image";
import Button from "../Button/Button";

const productSecCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* Card Section */}
        {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group"
            key={data.id}
          >
            <div className="relative">
              <Image
                src={data.img}
                alt=""
                className="[h-180px] w-[260px] object-cover rounded-md "
              />
              {/* hover button */}
              <div
                className="pbtn hidden group-hover:flex absolute top-1/2 -translate-y-1/2 
               left-2/3 -translate-x-1/2 h-full w-full text-center 
               group-hover:backdrop-blur-sm justify center
               items-center duration-200"
              >
                <Button
                  text={"Purchase"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">${data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default productSecCard;