import React from "react";
import offer from "../../assets/offer.png";

const Offer = () => {
  return (
    <div className=" md:flex justify-center gap-12 py-36 md:py-48 bg-slate-900 text-white font-bold">
      <div className="flex  items-center">
        <h3 className="text-4xl md:text-6xl justify-center">
          Today{" "}
          <span className="text-orange-600">
            special <br /> offer !!
          </span>
        </h3>
      </div>
      <img className="rounded-2xl h-[500px]  " src={offer} alt="" />
    </div>
  );
};

export default Offer;
