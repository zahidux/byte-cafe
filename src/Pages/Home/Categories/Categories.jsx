import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import SingleCategory from "./SingleCategory";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [moreItem, setMoreItem] = useState(false);

  //show more button
  let content;
  if (!moreItem) {
    content = categories
      .slice(0, 3)
      .map((category) => (
        <SingleCategory key={category._id} category={category}></SingleCategory>
      ));
  }
  if (moreItem) {
    content = categories
      .slice(0, 6)
      .map((category) => (
        <SingleCategory key={category._id} category={category}></SingleCategory>
      ));
  }

  useEffect(() => {
    fetch("https://byte-cafe.onrender.com/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="mt-16">
      <div data-aos="zoom-in-up" className="flex justify-center text-center">
        <SectionTitle
          subHeading={"-- All Category --"}
          Heading={"Choose a Category"}
        ></SectionTitle>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="container grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
      >
        {content}
      </div>
      <div data-aos="zoom-in-up" className="text-center text-xl ">
        {!moreItem ? (
          <button
            onClick={() => {
              setMoreItem(true);
            }}
            className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg mt-8 hover:bg-orange-700 "
          >
            See All
          </button>
        ) : (
          <button
            onClick={() => {
              setMoreItem(false);
            }}
            className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg mt-8 hover:bg-orange-700 "
          >
            See Less
          </button>
        )}
      </div>
      ;
    </section>
  );
};

export default Categories;
