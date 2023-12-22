import React from "react";
import bImg1 from "../../../assets/images/b-1.jpg";

const Banner = () => {
  return (
    <section>
      <div>
        <img className="w-full md:h-[750px] " src={bImg1} />
      </div>
      <div className="container absolute top-[15%] md:top-[30%] md:left-[150px] text-white ">
        <p className="font-semibold text-xl ">Welcome To Byte Cafe</p>
        <h1 className=" text-3xl md:text-6xl font-extrabold md:mt-3 md:mb-5">
          Find Your Favorite <br /> Tasty Food
        </h1>
        <div className="invisible md:visible">
          <p className="text-lg font-normal ">
            Creative space for food where you will find healthy <br /> culinary
            inspiration.
          </p>
        </div>

        <div className="-mt-20 md:mt-0 ">
          <button
            className="text-white bg-orange-600 text-xl md:text-2xl py-2 md:py-3 px-3 md:px-7 rounded-lg 
         md:mt-6 font-medium hover:bg-orange-500"
          >
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
