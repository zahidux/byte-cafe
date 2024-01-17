import React, { useState } from "react";
import MenuCover from "../ByteMenu/MenuCover";
import orderImg from "../../assets/order.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../Components/UseMenu";
import FoodCard from "./FoodCard";
import TabItems from "./TabItems";
import { useParams } from "react-router";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = UseMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div className="py-20 container">
      <MenuCover img={orderImg} title="Order Food" />
      <Tabs defaultValue={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList
          className={
            " mx-5 md:mx-0 my-12 text-xl font-semibold flex justify-center "
          }
        >
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <TabItems items={desserts}></TabItems>
        </TabPanel>
        <TabPanel>
          <TabItems items={soup}></TabItems>
        </TabPanel>
        <TabPanel>
          <TabItems items={salad}></TabItems>
        </TabPanel>
        <TabPanel>
          <TabItems items={pizza}></TabItems>
        </TabPanel>
        <TabPanel>
          <TabItems items={drinks}></TabItems>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
