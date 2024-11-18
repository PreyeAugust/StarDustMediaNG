/** @format */
"use client";

import React from "react";
import "./Footer.css";
import Image from "next/image";
import Img1 from "@/assets/logoBGOFF.png";
import {
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaMailBulk,
  FaMobileAlt,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Products",
    link: "/products",
  },
  {
    title: "Contact Us",
    link: "/contactUs",
  },
];

const FooterLinks2 = [
  {
    title1: "Services",
    link1: "/services",
  },
  {
    title1: "Products",
    link1: "/products",
  },
  {
    title1: "Contact Us",
    link1: "/contactUs",
  },
];

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div data-aos="fade-up" data-aos-delay="1500" className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold
              tracking-widest text-2xl uppercase sm:text-3xl"
            >
              <Image src={Img1} alt="" className="w-[100px]" />
            </a>
            <p className="footer-text lg:pr-24 pt-3">
              Stardust Media & Comics believes in the transformative power of
              storytelling and the profound influence it can have on young
              minds.
            </p>
            <p className="footer-text text-gray-500 mt-4">
              Fostering innovation and imaginative thinking.
            </p>
            <a
              href="#"
              className="footer-Link inline-block text-white
            py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit Our ( ) Channel
            </a>
          </div>

          {/* Footer Links */}
          <div
            className="footer-text col-span-2 grid grid-cols-2
           sm:grid-cols-3 md:pl-10"
          >
            <div data-aos="fade-up" data-aos-delay="1500" className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-white-600 dark:text-white-400 
                      hover:text-black hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second col link*/}
            <div data-aos="fade-up" data-aos-delay="1500" className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks2.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link1}
                      className="text-white-600 dark:text-white-400 
                      hover:text-black hover:text-black duration-300"
                    >
                      {data.title1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div
              data-aos="fade-up"
              data-aos-delay="1500"
              className="py-8 px-4 col-span-2 sm:col-auto"
            >
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>No.8 Abdullahi ibrahim St, Utako, Abuja</p>
                </div>

                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+234 706 486 4040</p>
                </div>

                <div className="flex items-center gap-3 mt-6">
                  <FaMailBulk />
                  <p>stardustcomicsmedia@gmail.com</p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 mt-6">
                  <a
                    href=""
                    className="text-3xl
                    hover:text-primary duration-300"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href=""
                    className="text-3xl
                    hover:text-primary duration-300"
                  >
                    <FaFacebook />
                  </a>

                  <a
                    href=""
                    className="text-3xl
                    hover:text-primary duration-300"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}