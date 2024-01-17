import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer";
import ScrollToTop from "../Components/ScrollToTop";

import AOS from "aos";
import "aos/dist/aos.css";
import Spinner from "../Components/Spinner ";

const Main = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signUp");

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);

  let content;

  if (navigation.state === "loading") {
    content = <Spinner />;
  } else {
    content = <Outlet />;
  }

  return (
    <div>
     <ScrollToTop />
      {noHeaderFooter || <Navbar />}
      <main>{content}</main>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;

// use it Main js
import "aos/dist/aos.css";

// and use it on component that you want change

data-aos="flip-left"
