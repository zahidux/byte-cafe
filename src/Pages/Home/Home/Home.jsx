import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ExpertChef from "../ExpertiesChef/ExpertiesChef";
import EspecialFood from "../EspecialFood/EspecialFood";
import Offer from "../Offer/Offer";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <ExpertChef />
      <EspecialFood />
      <Offer />
      <Testimonials />
    </div>
  );
};

export default Home;
