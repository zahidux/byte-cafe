import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ItemsCart from "./ItemsCart";

const AllItems = () => {
  const items = useLoaderData();
  const [allItems, setAllItems] = useState(items);

  return (
    <div className="container py-48 ">
      <h3 className="text-4xl text-center font-semibold mb-12">Our Food</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
        {items.map((item) => (
          <ItemsCart
            key={item._id}
            item={item}
            allItems={allItems}
            setAllItems={setAllItems}
          />
        ))}
      </div>
    </div>
  );
};

export default AllItems;
