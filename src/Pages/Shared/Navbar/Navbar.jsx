import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// icons
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";

import logo from "../../../assets/logo.png";
import ActiveLink from "./ActiveLink";
import Profile from "./Profile";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import UseCart from "../../../Hook/UseCart";
import useAdmin from "../../../Hook/useAdmin";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [cart] = UseCart();
  const [isAdmin] = useAdmin();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 40) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-200 ease-in-out ${
        navState ? "bg-white shadow-lg" : "md:bg-[#00000070] text-white"
      }`}
    >
      <nav
        className={`py-2 relative transition-all duration-200 ease-in-out ${
          navState ? "py-2" : "py-5"
        }`}
      >
        <div className="container px-4 md:px-8 mx-auto flex justify-between items-center">
          {/* Navbar Logo */}
          <Link to="/" className="text-3xl">
            {navState ? (
              <img className="w-14 md:w-24" src={logo} alt="" />
            ) : (
              <img className="w-14 md:w-24" src={logo} alt="" />
            )}
          </Link>

          {/* Navbar Toggle Button for small screens */}
          <button
            className="block md:hidden text-secondary focus:outline-none text-3xl"
            id="navbar-toggle"
            onClick={toggleNavbar}
          >
            {isOpen ? <MdClose /> : <FaBars />}
          </button>

          {/* Navbar Links */}
          <ul className="hidden md:flex gap-10 text-darkGray">
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/all-chef">Chef's</ActiveLink>
            <ActiveLink to="/menu">Menu</ActiveLink>
            <ActiveLink to="/order/1">Order</ActiveLink>
            <ActiveLink to="/blogs">Blogs</ActiveLink>
            {isAdmin ? (
              <ActiveLink to="/dashboard/adminhome">Dashboard</ActiveLink>
            ) : (
              <ActiveLink to="/dashboard/userhome">Dashboard</ActiveLink>
            )}
            <Link to={"/dashboard/cart"}>
              <div className="flex items-center gap-2 px-2  rounded-xl bg-slate-700 text-white">
                <div className="text-xl">
                  <FaCartArrowDown />
                </div>
                <button className=" text-lg">{cart?.length || 0}</button>
              </div>
            </Link>
          </ul>

          {user ? (
            <Profile user={user} logOut={logOut} />
          ) : (
            <Link to="/login" className="hidden md:block btn_regular">
              Login
            </Link>
          )}

          {/* mobile menu */}
          <div
            onClick={() => setIsOpen(false)}
            className={`absolute md:hidden w-full h-screen top-0 left-0 bg-[#0000007b] transition-all duration-200 ease-in-out ${
              isOpen ? "scale-100" : "scale-0"
            }`}
          ></div>
          <ul
            className={`flex md:hidden flex-col gap-5 absolute w-64 h-screen p-8 top-0 bg-dark transition-all duration-300 ease-in-out bg-primary text-white z-50 ${
              isOpen ? "-left-4" : "-left-full"
            }`}
          >
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/all-chef">Chef's</ActiveLink>
            <ActiveLink to="/menu">Menu</ActiveLink>
            <ActiveLink to="/order/1">Order</ActiveLink>
            <ActiveLink to="/blogs">Blogs</ActiveLink>
            <ActiveLink to="/dashboard">Dashboard</ActiveLink>

            <div>
              {user?.photoURL ? (
                <img
                  className="h-14 w-14 rounded-full object-cover shadow-lg shadow-[#00000049]"
                  src={user?.photoURL}
                  alt="User avatar"
                />
              ) : (
                <img
                  className="h-14 w-14 rounded-full object-cover shadow-lg shadow-[#00000049]"
                  src="https://i.pravatar.cc/300"
                  alt="User avatar"
                />
              )}
            </div>

            <button onClick={() => logOut()} className="btn_regular logout">
              LogOut
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
