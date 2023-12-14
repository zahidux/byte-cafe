import React from "react";
import Error404 from "../../../assets/404-not-found.jpg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="grid justify-center items-center py-24 md:py-52 ">
      <div>
        <img className="w-[250px] my-9" src={Error404} alt="" />
        <div className="text-center">
          <Link
            className="bg-orange-500 py-2 px-4 rounded-lg text-white font-semibold hover:bg-orange-600 "
            to={"/"}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
