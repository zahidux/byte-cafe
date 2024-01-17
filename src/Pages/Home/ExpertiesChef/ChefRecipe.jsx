import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefRecipe = () => {
  const recipeData = useLoaderData();
  console.log(recipeData);

  const {
    name,
    image_url,
    bio,
    experience,
    phone,
    email,
    recipes,
    best_recipe,
  } = recipeData;

  return (
    <section
      data-aos="fade-up"
      className="  bg-slate-900  pt-24 md:pt-48 pb-8 md:px-48  "
    >
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center mt-5 md:mt-0 text-white">
          <div>
            <h1 className="text-4xl font-bold drop-shadow-lg">{name}</h1>
            <h3 className="my-1 mt-4 font-semibold text-2xl">About :</h3>
            <p className="text-lg font-medium text-slate-300">{bio}</p>

            <div className="md:flex gap-10 mt-8  font-medium text-xl">
              <div>
                <p>
                  Recipes : <span className="text-lg">{recipes}</span>
                </p>
                <p>
                  Phone : <span className="text-lg">{phone}</span>
                </p>
              </div>

              <div>
                <p>
                  Experience :{" "}
                  <span className="text-lg">{experience} Years</span>
                </p>

                <p>
                  Email : <span className="text-lg">{email}</span>
                </p>
              </div>
            </div>

            <p className="font-medium mt-3 md:flex gap-3 text-lg mb-12">
              <span className=" text-orange-400 font-bold underline">
                Best Recipe :{" "}
              </span>
              <div>{best_recipe}</div>
            </p>
          </div>
          <div className="h-80 rounded-xl md:h-[480px]  overflow-hidden  ">
            <img src={image_url} alt={name} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecipe;
