import React from "react";
import { BiLike } from "react-icons/bi";
import UseTitle from "../../Components/UseTitle/UseTitle";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const {
    _id,
    name,
    image_url,
    bio,
    experience,
    phone,
    email,
    recipes,
    best_recipe,
    recipes_list,
  } = chef;
  UseTitle("Chef's");
  return (
    <section className="bg-slate-900 rounded-xl p-5 shadow-2xl">
      <div className=" rounded-xl">
        <img src={image_url} alt="image" />
      </div>
      <div className="my-5">
        <h3 className="text-orange-500 text-2xl font-semibold my-5">{name}</h3>
        <p className=" font-medium text-slate-300">
          {experience} Year of experience
        </p>

        <span className="font-medium text-slate-300">{recipes} Recipes</span>
      </div>
      <div className="flex justify-between">
        <p className="flex items-center gap-2 text-orange-500 text-2xl font-semibold ">
          <BiLike className=" cursor-pointer" />
          {Math.round(experience / 2)}
        </p>
        <button className="bg-orange-500 text-white font-semibold py-3 px-4 rounded-xl text-lg">
          <Link to={`/chef/${_id}`}> View Recipes</Link>
        </button>
      </div>
    </section>
  );
};

export default Chef;
