import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import ScrollToTop from "../Pages/Components/ScrollToTop/ScrollToTop";
import Aos from "aos";

const Main = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
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
