import React from "react";
import offer from "../../../assets/offer.png";
import "./Offer.css";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <section class="offer bg-fixed">
      <div className="  bg-slate-500 bg-opacity-30 ">
        <div className="mx-24 flex items-center gap-24 mt-12 p-24 rounded-2xl md:p-28  text-white font-bold">
          <div>
            <img className="rounded-2xl h-[500px]  " src={offer} alt="" />
          </div>
          <div>
            <h3 className="text-4xl md:text-6xl ">
              Today special <br /> offer !!
            </h3>
            <Link to={"/order"}>
              <button className="border-0 border-b-4 shadow-xl hover:shadow-orange-300 bg-orange-600 py-2 px-4 mt-4 rounded-xl">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
