import React from "react";

const SingleCategory = ({ category }) => {
  const { id, title, image, description } = category;
  return (
    <section className="text-center shadow-xl p-4 rounded-lg bg-slate-50">
      <div className="p-4 ">
        <img className="w-full rounded-xl h-[200px]" src={image} alt="image" />
      </div>
      <h3 className="text-lg md:text-2xl font-medium text-slate-800 my-1 md:my-6">
        {title}
      </h3>
      <p className="text-sm md:text-base font-normal text-slate-600 mb-8">
        {description}
      </p>
    </section>
  );
};

export default SingleCategory;
