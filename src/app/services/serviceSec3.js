import React from "react";
import "./service.css";

export default function serviceSec3() {
  return (
    <div className="py-8 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}

          <div className="sm:col-span-2 py-10 pl-5 text-black rounded-3xl relative h-[680px]  flex items-start Service3C">
            <div>
              <div data-aos="zoom-out" className="mb-4">
                <p className="text-4xl xl:text-5xl font-bold  mb-2">
                  Custom Book Design & Publishing:
                </p>
                <p className="mb-[2px] text-grey-400">
                  {" "}
                  Partner with us to create personalized and high-quality
                  childrens books. We offer a comprehensive suite of services
                  from concept development to printing and distribution.
                </p>
                <p className="text-2xl font-semibold mb-[2px]">
                  {" "}
                  Event Planning & Management:
                </p>
                <p className="mb-[2px] text-grey-400">
                  {" "}
                  We specialize in creating unforgettable birthday parties,
                  graduation ceremonies, and other special occasions centered
                  around childrens interests and learning. Our interactive and
                  engaging events are designed to be both fun and educational.
                </p>
                <p className="text-2xl font-semibold mb-[2px]">
                  {" "}
                  Educational Outreach and Partnerships:
                </p>
                <p className="mb-[2px] text-grey-400">
                  {" "}
                  We collaborate with schools, libraries, and community
                  organizations to promote literacy, education, and creative
                  expression. Our annual Childrens Quiz Competition is a
                  testament to our commitment to engaging young minds.
                </p>
              </div>
            </div>
          </div>

          {/* second col */}
          <div className=" py-10 pl-5 text-black rounded-3xl relative h-[480px]   flex items-end service3rdCol1">
           
          </div>

          {/* third col */}

          <div className=" py-10 pl-5 text-black rounded-3xl relative h-[480px]  flex items-end service3rdCol2">
           
          </div>
        </div>
      </div>
    </div>
  );
}
