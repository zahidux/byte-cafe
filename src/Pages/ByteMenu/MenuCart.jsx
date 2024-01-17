import React from "react";

const MenuCart = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="md:flex mt-12 bg-slate-50 p-5 shadow-md rounded-lg">
      <img
        className="w-full p-3 rounded-3xl md:rounded-none md:w-24 md:rounded-tr-3xl md:rounded-bl-3xl"
        src={image}
        alt=""
      />
      <div className="ml-5 md:flex gap-10">
        <div className="">
          <h3 className="md:text-xl font-medium text-slate-900 mr-10">
            {name} <div className="inline invisible md:visible">-----</div>
          </h3>
          <p className="text-sm md:text-base text-slate-800 my-2">{recipe}</p>
        </div>
        <span className="text-orange-600"> ${price}</span>
      </div>
    </div>
  );
};

export default MenuCart;
