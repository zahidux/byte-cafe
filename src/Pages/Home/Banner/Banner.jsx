import React from "react";
import banner1 from "../../../assets/images/Banner/banner1.jpg";
import banner2 from "../../../assets/images/Banner/banner2.jpg";
import banner3 from "../../../assets/images/Banner/banner3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section>
      <Carousel>
        <div className="flex flex-row items-center">
          <img src={banner1} />
          <div
            data-aos="fade-down-left"
            className=" absolute text-white  text-left mt-10 mx-20 md:mx-36"
          >
            <p className="font-semibold text- md:text-xl ">
              Welcome To Byte Cafe
            </p>
            <h1 className=" text-xl md:text-6xl font-extrabold md:my-5">
              Find Your Favorite <br /> Tasty Food
            </h1>
            <div className="invisible md:visible">
              <p className="text-lg font-normal md:mb-5 ">
                Creative space for food where you will find healthy <br />{" "}
                culinary inspiration.
              </p>
            </div>

            <div className="-mt-20 md:mt-0 ">
              <Link to={"/menu"}>
                <button
                  className="text-white  shadow-lg border-0 border-b-4 hover:shadow-orange-700 text-sm md:text-xl py-2 md:py-2 px-2 md:px-3 rounded-xl 
          md:mt-6 font-medium hover:bg-orange-500"
                >
                  View Menu
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center">
          <img src={banner2} />
          <div
            data-aos="fade-down-left"
            className=" absolute text-white  text-left mt-10 mx-20 md:mx-36"
          >
            <p className="font-semibold text- md:text-xl ">
              Welcome To Byte Cafe
            </p>
            <h1 className=" text-xl md:text-6xl font-extrabold md:my-5">
              Find Your Favorite <br /> Tasty Food
            </h1>
            <div className="invisible md:visible">
              <p className="text-lg font-normal md:mb-5 ">
                Creative space for food where you will find healthy <br />{" "}
                culinary inspiration.
              </p>
            </div>

            <div className="-mt-20 md:mt-0 ">
              <Link to={"/menu"}>
                <button
                  className="text-white  shadow-lg border-0 border-b-4 hover:shadow-orange-700 text-sm md:text-xl py-2 md:py-2 px-2 md:px-3 rounded-xl 
          md:mt-6 font-medium hover:bg-orange-500"
                >
                  View Menu
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center">
          <img src={banner3} />
          <div
            data-aos="fade-down-left"
            className=" absolute text-white  text-left mt-10 mx-20 md:mx-36"
          >
            <p className="font-semibold text- md:text-xl ">
              Welcome To Byte Cafe
            </p>
            <h1 className=" text-xl md:text-6xl font-extrabold md:my-5">
              Find Your Favorite <br /> Tasty Food
            </h1>
            <div className="invisible md:visible">
              <p className="text-lg font-normal md:mb-5 ">
                Creative space for food where you will find healthy <br />{" "}
                culinary inspiration.
              </p>
            </div>

            <div className="-mt-20 md:mt-0 ">
              <Link to={"/menu"}>
                <button
                  className="text-white  shadow-lg border-0 border-b-4 hover:shadow-orange-700 text-sm md:text-xl py-2 md:py-2 px-2 md:px-3 rounded-xl 
          md:mt-6 font-medium hover:bg-orange-500"
                >
                  View Menu
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;
