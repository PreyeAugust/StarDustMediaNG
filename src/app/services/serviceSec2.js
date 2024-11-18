import React from "react";
import "./service.css";

export default function serviceSec2() {
  return (
    <div className="py-8 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* first col */}

          <div className="sm:col-span-2 py-10 pl-5 text-black rounded-3xl relative h-[680px]  flex items-start Service2C">
            <div>
              <div data-aos="zoom-in" className="mb-4">
                <p className="text-4xl xl:text-5xl font-bold mb-2">
                  {" "}
                  Educational Comic Books:
                </p>
                <p className="mb-[3px] text-600">
                  {" "}
                  Explore our collection of engaging and educational comic
                  books, like
                </p>
                <p className="text-2xl font-semibold mb-[2px]">
                  {" "}
                  The Patriot Kids:
                </p>
                <p className="mb-[3px] text-600">
                  {" "}
                  Teaches children about citizenship and civic responsibility.
                </p>
                <p className="text-2xl font-semibold mb-[2px]">
                  {" "}
                  The Young Emeralds:
                </p>
                <p className="mb-[3px] text-600">
                  {" "}
                  Promotes environmental awareness and sustainability
                </p>
                <p className="text-2xl font-semibold mb-[2px]">
                  {" "}
                  Giving Peace a Chance:
                </p>
                <p className="mb-[3px] text-600">
                  {" "}
                  Encourages conflict resolution and peaceful solutions
                </p>
                <p className="text-2xl font-semibold mb-[2px]">
                  {" "}
                  Reward of Savings:
                </p>
                <p className="mb-[3px] text-600">
                  {" "}
                  Introduces children to financial literacy concepts.
                </p>
                <p className="text-2xl font-semibold mb-[2px]">
                  {" "}
                  Nkem Learns About Vat:
                </p>
                <p className="mb-[3px] text-600">
                  {" "}
                  its importance in nation-building, and real-world examples of
                  how VAT works.
                </p>
              </div>
            </div>
          </div>





          {/* second col */}
          <div className=" py-10 pl-5 text-black rounded-3xl relative h-[480px]  flex items-end service2ndCol">
            <div>
              <div data-aos="zoom-in" className="mb-4">
              </div>
            </div>
          </div>
          {/* third col */}
          <div className=" py-10 pl-5 text-black rounded-3xl relative h-[480px]   flex items-end service2ndCol2">
            <div>
              <div data-aos="zoom-in" className="mb-4">
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}
