import React from "react";
import newItemsData from "./newItemsData";
import ItemsCart from "./ItemsCart";

const NewItems = () => {
  const [items] = newItemsData();
  console.log(items);
  return (
    <div className="container py-48 ">
      <h3 className="text-4xl text-center font-semibold mb-12">Our Food</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
        {items.map((item) => (
          <ItemsCart key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewItems;
