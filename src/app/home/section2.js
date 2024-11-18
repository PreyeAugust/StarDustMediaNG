import React from "react";
import "./home.css";

const section2 = () => {
  return (
    <div className="py-8 secondcol1">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div
            data-aos="zoom-out"
            data-aos-delay="1500"
            className="col1 py-10 pl-5 text-white rounded-3xl relative h-[80px]  flex items-end"
          ></div>

          <div
            data-aos="zoom-out"
            data-aos-delay="1500"
            className="col1 py-10 pl-5 text-white rounded-3xl relative h-[80px]  flex items-end"
          ></div>

          <div
            data-aos="zoom-out"
            data-aos-delay="1500"
            className="col1 py-10 pl-5 text-white rounded-3xl relative h-[80px]  flex items-end"
          ></div>

          <div
            data-aos="zoom-out"
            data-aos-delay="1500"
            className="col1 py-10 pl-5 text-white rounded-3xl relative h-[80px]  flex items-end"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default section2;
