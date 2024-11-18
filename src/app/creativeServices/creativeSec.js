import React from "react";
import "./creative.css";

import Image from "next/image";
import Img1 from "@/assets/GraphicDesignIMG.jpg";
import Img2 from "@/assets/BrandingIMG.jpg";
import Img3 from "@/assets/ArtCrafts.jpg";

import { HiOutlineLocationMarker } from "react-icons/hi";

const Data = [
  {
    id: 1,
    imgSrc: Img1,
    destTitle: "GRAPHIC DESIGN",
    location: "StarDust Media",
    grade: "IMAGINATION TO REALITY",
    fees: "$-",
    description:
      " We offer a range of graphic design services to bring your vision to life. From creating illustrations for your   childrens book, logo, to designing engaging marketing materials.",
  },

  {
    id: 2,
    imgSrc: Img2,
    destTitle: "BRANDING",
    location: "StarDust Media",
    grade: "IMAGINATION TO REALITY",
    fees: "$-",
    description:
      "At StarDust Media We Prioratize  helping you develop a strong and recognizable brand identity for your childrens book, or educational initiative.",
  },

  {
    id: 3,
    imgSrc: Img3,
    destTitle: "ARTS & CRAFT WORKSHOP",
    location: "StarDust Media",
    grade: "IMAGINATION TO REALITY",
    fees: "$-",
    description:
      "Also at StarDust Media we take top priority in sparking childrens creativity with our interactive and educational arts and crafts workshops.",
  },
];

const creativeSec = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Our Creative Services
        </h3>
      </div>

      <div className="secContent grid">
        {/* here i'm going to use high order array method(map). To do that we shall use a list of object in one array.
           I'm going to create an array named data and from that we shall .map() array to fetch each destination at once. */}

        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                {/* Here it will return a single id from the map array*/}

                <div className="imageDiv">
                  <Image src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <br />
      <br />
      <br />
    </section>
  );
};

export default creativeSec;
