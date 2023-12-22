import React, { useEffect, useState } from "react";
import MenuCart from "./MenuCart";
import SectionTitle from "../Components/SectionTitle/SectionTitle";

const ByteMenu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <section className="py-32 md:py-36">
        <div className="text-center">
          <SectionTitle
            subHeading={"Sweet Food"}
            Heading={"Byte Cafe Menu"}
          ></SectionTitle>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {items.map((item) => (
            <MenuCart key={item._id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ByteMenu;
