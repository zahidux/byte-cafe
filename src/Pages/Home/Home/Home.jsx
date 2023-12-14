import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ExpertChef from "../ExpertiesChef/ExpertiesChef";
import ByteMenu from "../ByteMenu/ByteMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <ExpertChef />
      <ByteMenu />
    </div>
  );
};

export default Home;
