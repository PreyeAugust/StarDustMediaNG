import React from "react";
import "./about.css";



export default function aboutSec2() {

  return (
    <div className="py-2">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-20">
          {/* first col */}
          <div className=" about2First py-10 pl-5 text-white rounded-3xl relative h-[480px]  flex items-end">
            <div>
              <div data-aos="zoom-in" className="mb-4">
                <p className="mb-[2px] text-grey-400 about2ps"> Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px] about2ps">StarDust</p>
                <p className="text-4xl xl:text-5xl font-bold mb-2 about2ps">
                  {" "}
                  Comics
                </p>
              </div>
            </div>
          </div>
          {/* second col */}
          <div className="about2First2 py-10 pl-5 text-white rounded-3xl relative h-[480px]   flex items-end">
            <div>
              <div data-aos="zoom-in" className="mb-4">
                <p className="mb-[2px] text-grey-400 about2ps"> Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px] about2ps">StarDust</p>
                <p className="text-4xl xl:text-5xl font-bold  mb-2 about2ps">
                  {" "}
                  Comics
                </p>
              </div>
            </div>
          </div>

          {/* third col */}

          <div className="about2First3 py-10 pl-5 text-white rounded-3xl relative h-[480px]  flex items-end">
            <div>
              <div data-aos="zoom-in" className="mb-4">
                <p className="mb-[2px] about2ps"> Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px] about2ps">StarDust</p>
                <p className="text-4xl xl:text-5xl font-bold  mb-2 about2ps">
                  {" "}
                  Comics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
