import React from "react";

const MenuCart = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="flex mt-12 bg-slate-50 p-5 shadow-lg rounded-lg">
      <img className="w-28 rounded-tr-3xl rounded-bl-3xl" src={image} alt="" />
      <div className="ml-5 flex gap-12">
        <div className="">
          <h3 className="text-xl font-medium text-slate-900 mr-10">
            {name} -----
          </h3>
          <p className="text-base text-slate-800">{recipe}</p>
        </div>
        <span className="text-orange-600"> ${price}</span>
      </div>
    </div>
  );
};

export default MenuCart;
