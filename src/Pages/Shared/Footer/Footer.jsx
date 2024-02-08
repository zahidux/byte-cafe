import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#222D3B]">
      <div className="container px-4 md:px-8  text-slate-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center items-center py-20 font-semibold">
          <div data-aos="fade-right">
            <h1 className="text-xl md:text-3xl  mb-4 text-white">Subscribe</h1>
            <p className="text-white text-xs md:text-base mb-5">
              Register and get notified about all the news & updates before it
              gets too late.
            </p>

            <div
              data-aos="fade-right"
              className="flex box-border w-full font-semibold"
            >
              <input
                className="pl-4 w-full py-2 text-sm md:text-base outline-orange-400"
                type="text"
                placeholder="Your email address"
              />
              <button className="text-white md:text-xl bg-orange-500 w-52 hover:bg-orange-700">
                Subscribe
              </button>
            </div>
          </div>

          <div data-aos="fade-down">
            <Link to="/" className="text-3xl font-semibold">
              <img className="w-24 m-auto" src={logo} alt="tasty-salt" />
            </Link>
            <p className="text-white my-8">
              Be the first to know about new collections, going on at Our social
              network
            </p>
            <div className="flex items-center justify-center text-white text-2xl">
              {/* Social Icons */}
              <Link to="/" className="mr-4 text-blue">
                <FaFacebookF />
              </Link>
              <Link to="/" className="mr-4 text-blue">
                <FaTwitter />
              </Link>
              <Link to="/" className="mr-4 text-red-600">
                <FaInstagram />
              </Link>
              <Link to="/" className="mr-4 text-red-700">
                <FaYoutube />
              </Link>
            </div>
          </div>

          <div data-aos="fade-left">
            <h1 className="text-xl md:text-3xl font-semibold mb-4 ">
              Contact Us
            </h1>
            <p className="text-xs md:text-base ">
              Byte Cafe Restaurant <br /> 71 Madison Ave, New York, USA
            </p>
            <p className="text-xs my-2 md:text-base">
              +39-057-098754,+39-066-666999
            </p>
            <p className="text-xs  md:text-base">zahid@bytecafe.com</p>
          </div>
        </div>

        {/* footer bottom */}
        <div className="border-t text-xs md:text-base border-white flex flex-col md:flex-row items-center justify-between py-5 text-white text-center">
          <p>@Copyright by Byte Cafe-2023, All Right Reserved.</p>

          <div>
            <Link to="/">Privacy & Policy</Link>|
            <Link to="/">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
