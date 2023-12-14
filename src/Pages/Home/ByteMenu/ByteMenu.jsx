import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCart from "./MenuCart";

const ByteMenu = () => {
  const [items, setItems] = useState([]);
  const [moreItem, setMoreItem] = useState(false);

  //show more button
  let content;
  if (!moreItem) {
    content = items
      .slice(0, 8)
      .map((item) => <MenuCart key={item._id} item={item}></MenuCart>);
  }
  if (moreItem) {
    content = items
      .slice(0, 6)
      .map((item) => <MenuCart key={item._id} item={item}></MenuCart>);
  }

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="my-16">
      <div className="text-center">
        <SectionTitle
          subHeading={"Sweet Food"}
          Heading={"Byte Cafe Menu"}
        ></SectionTitle>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-x-16">
        {content}
      </div>
      <div className="text-center text-xl ">
        {!moreItem ? (
          <button
            onClick={() => {
              setMoreItem(true);
            }}
            className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg mt-12 hover:bg-orange-700 "
          >
            See All
          </button>
        ) : (
          <button
            onClick={() => {
              setMoreItem(false);
            }}
            className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg mt-12 hover:bg-orange-700 "
          >
            See Less
          </button>
        )}
      </div>
    </section>
  );
};

export default ByteMenu;
