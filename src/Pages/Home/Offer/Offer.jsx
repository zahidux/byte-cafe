import React from "react";
import offer from "../../../assets/offer.png";
import "./Offer.css";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <section class="offer bg-fixed">
      <div className="  bg-slate-500 bg-opacity-30 ">
        <div className="mx-12 ms:mx-24  md:flex  items-center gap-5 md:gap-24 pt-12  rounded-2xl md:p-28  text-white font-bold">
          <div>
            <img
              className="rounded-2xl w-full md:h-[500px]  "
              src={offer}
              alt=""
            />
          </div>
          <div>
            <h3 className="text-4xl md:text-6xl text-center md:text-left ">
              Today special <br /> offer !!
            </h3>
            <Link
              to={"/order"}
              className="text-center grid justify-center md:justify-start"
            >
              <button className="border-0 border-b-4 shadow-xl hover:shadow-orange-300 bg-orange-600 py-2 px-4 my-5  rounded-xl">
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
