import React from "react";
import "./home.css";
import Button from "../Button/Button";

export default function section1() {
  return (
    <div className="py-8 firstCon">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}

          <div className="sm:col-span-2 py-10 pl-5 text-white rounded-3xl relative h-[480px]  flex items-end first2">
            <div>
              <div data-aos="zoom-out" className="mb-4">
                <p className="mb-[2px] text-grey-400"> Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">Comic</p>
                <p className="text-4xl xl:text-5xl font-bold  mb-2">
                  {" "}
                  With StarDust
                </p>
                <a href="/products">
                <Button
                  text={"Browse"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </a>
              </div>
            </div>
          </div>

          {/* second col */}
          <div className="second2 py-10 pl-5 text-white rounded-3xl relative h-[480px]   flex items-end">
            <div>
              <div data-aos="zoom-out" className="mb-4">
                <p className="mb-[2px] text-grey-400"> Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">Comic</p>
                <p className="text-4xl xl:text-5xl font-bold  mb-2">
                  {" "}
                  With StarDust
                </p>
                <a href="/products">
                <Button
                  text={"Browse"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </a>
              </div>
            </div>
          </div>

          {/* third col */}

          <div className="third2 py-10 pl-5 text-white rounded-3xl relative h-[480px]  flex items-end">
            <div>
              <div data-aos="zoom-out" className="mb-4">
                <p className="mb-[2px] text-grey-400"> Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">Comic</p>
                <p className="text-4xl xl:text-5xl font-bold  mb-2">
                  {" "}
                  With StarDust
                </p>
                <a href="/products">
                <Button
                  text={"Browse"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
