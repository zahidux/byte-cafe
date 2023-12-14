import React from "react";
import bImg1 from "../../../assets/images/b-1.jpg";

const Banner = () => {
  return (
    <section className="">
      <div className="">
        <img className="w-full md:h-[750px] " src={bImg1} />
      </div>
      <div className="container absolute top-[15%] md:top-[35%] left-48 md:left-[55%] text-white ">
        <p className="font-semibold text-xl ">Welcome To Tasty Salt</p>
        <h1 className=" text-3xl md:text-6xl font-extrabold md:mt-3 md:mb-5">
          Find Your Favorite <br /> Tasty Food
        </h1>
        <p className="text-lg font-normal ">
          Creative space for food where you will find healthy culinary
          inspiration.
        </p>
        <button className="text-white bg-orange-600 text-xl md:text-2xl py-2 md:py-3 px-3 md:px-7 rounded-lg mt-2 md:mt-6 font-medium hover:bg-orange-500">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default Banner;
