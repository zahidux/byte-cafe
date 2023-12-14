import React, { useContext, useState } from "react";
import logo from "../../../assets/logo.png";
import ActiveLink from "./ActiveLink";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Profile from "./Profile";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handelToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" bg-zinc-600 md:flex fixed z-10 bg-opacity-5 w-full justify-between items-center text-white pt-6 px-12 md:px-24">
      <Link to={"/"}>
        <img className="w-[200px] md:w-[300px] " src={logo} alt="byte-cafe" />
      </Link>

      {/* navbar toggle for small screen */}
      <div className="my-4 flex justify-end -mt-8 text-3xl">
        <button
          onClick={handelToggle}
          className="block md:hidden focus:outline-none "
        >
          {isOpen ? <IoMdClose /> : <FaBars />}
        </button>
      </div>

      <ul
        className={` gap-7 text-lg font-medium items-center ${
          !isOpen ? "hidden md:flex" : "md:flex"
        }`}
      >
        <li>
          <ActiveLink to={"/"}>Home</ActiveLink>
        </li>
        <li>
          <ActiveLink to={"/chefs"}>Chef's</ActiveLink>
        </li>
        <li>
          <ActiveLink to={"/offer"}>Today's Offer </ActiveLink>
        </li>
        <li>
          <ActiveLink to={"/blogs"}>Blogs</ActiveLink>
        </li>
        <Link to={"login"}>
          {user ? (
            <Profile user={user} logOut={logOut} />
          ) : (
            <button className="bg-orange-500 mt-3 px-5  py-2 rounded-md text-xl font-semibold hover:bg-orange-400 ">
              Login
            </button>
          )}
        </Link>
      </ul>
    </header>
  );
};

export default Navbar;
