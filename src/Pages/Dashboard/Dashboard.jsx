import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { Link, Outlet } from "react-router-dom";
import { HiTemplate } from "react-icons/hi";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-max">
      <div
        className={`${
          open ? "w-36 md:w-72 " : "w-20"
        } bg-slate-900 duration-700 h-screen relative`}
      >
        <SlArrowRight
          onClick={() => {
            setOpen(!open);
          }}
          className={` absolute text-black cursor-pointer -right-3 top-10 rounded-full w-7 border-2 px-2 border-sky-600 bg-white text-2xl font-bold ${
            open && "rotate-180"
          }`}
        />

        <div className="text-white container py-10">
          <>
            <div className="">
              <h2 className="text-yellow text-center font-bold text-xl my-8">
                Admin
              </h2>

              <div className="flex gap-4 items-center font-bold my-7">
                <span
                  className={`text-2xl cursor-pointer duration-500 ${
                    open && "rotate-[180deg]"
                  }`}
                >
                  <HiTemplate />
                </span>
                <Link
                  to={"/dashboard/users"}
                  className={`text-lg origin-left duration-500 ${
                    !open && "scale-0"
                  }`}
                >
                  Users
                </Link>
              </div>
              <div className="flex gap-4 items-center font-bold border-t-2 ">
                <span
                  className={`text-2xl cursor-pointer duration-500 mt-8 ${
                    open && "rotate-[360deg]"
                  }`}
                >
                  <FaHome />
                </span>
                <Link
                  to={"/"}
                  className={`text-lg origin-left duration-500 mt-8  ${
                    !open && "scale-0"
                  }`}
                >
                  Home
                </Link>
              </div>
            </div>
          </>
        </div>
      </div>
      <div className=" w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
