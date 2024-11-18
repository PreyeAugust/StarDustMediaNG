import React from "react";
import "./home.css";
import Heading from "../home/Heading";
import ProductCard from "@/app/home/productCard";

import Img2 from "../../assets/The Patriot Kids - Cover.png";
import Img3 from "../../assets/Nkem Learns About Vat.png";
import Img4 from "../../assets/REWARD OF SAVINNGS COVER - STARDUST.png";
import Img5 from "../../assets/Giving Peace a Chance irene Abuja-1.png";

const ProductsData = [
  {
    id: 1,
    img: Img2,
    title: " The Patriot Kids",
    price: 1.5,
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img3,
    title: "Nkem Learns About Vat",
    price: 120,
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img4,
    title: "REWARD OF SAVINNGS",
    price: 1.5,
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img5,
    title: "Giving Peace a Chance",
    price: 1.5,
    aosDelay: "600",
  },
];

const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Giving Peace a Chance",
    price: 1.5,
    aosDelay: "600",
  },
  {
    id: 2,
    img: Img4,
    title: "REWARD OF SAVINNGS",
    price: 1.5,
    aosDelay: "400",
  },
  {
    id: 3,
    img: Img3,
    title: "Nkem Learns About Vat",
    price: 120,
    aosDelay: "200",
  },
  {
    id: 4,
    img: Img2,
    title: " The Patriot Kids",
    price: 1.5,
    aosDelay: "0",
  },
];

export default function section4() {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title={"Our Products"} subtitle={"Explore Our Products"} />

        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
}
