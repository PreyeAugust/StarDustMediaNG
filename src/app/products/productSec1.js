import React from "react";
import "./product.css";
import ProductHeading from "../products/productHeading";
import ProductSecCard from "../products/productSecCard";

import Img2 from "../../assets/Nkem Learns About Vat.png";
import Img3 from "../../assets/The Patriot Kids - Cover.png";
import Img4 from "../../assets/Giving Peace a Chance irene Abuja-1.png";
import Img5 from "../../assets/REWARD OF SAVINNGS COVER - STARDUST.png";

const ProductSecData = [
  {
    id: 1,
    img: Img3,
    title1: "The Patriot Kids",
    price: 1.5,
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Nkem Learns About VAT",
    price: 1.5,
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img4,
    title: "Giving Peace a Chance",
    price: 1.5,
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img5,
    title: "Rewards of Savings",
    price: 1.5,
    aosDelay: "600",
  },
];

const ProductSecData2 = [
  {
    id: 5,
    img: Img5,
    title: "Rewards of Savings",
    price: 1.5,
    aosDelay: "600",
  },
  {
    id: 6,
    img: Img4,
    title: "Giving Peace a Chance",
    price: 1.5,
    aosDelay: "400",
  },
  {
    id: 6,
    img: Img2,
    title: "Nkem Learns About VAT",
    price: 1.5,
    aosDelay: "200",
  },
  {
    id: 7,
    img: Img3,
    title1: "The Patriot Kids",
    price: 1.5,
    aosDelay: "0",
  },
];

export default function productSec1() {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <ProductHeading
          title={"Our Products"}
          subtitle={"Explore Our Products"}
        />

        {/* Body section */}
        <ProductSecCard data={ProductSecData} />
        <ProductSecCard data={ProductSecData2} />
      </div>
    </div>
  );
}
