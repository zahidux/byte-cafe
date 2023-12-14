import React from "react";

const SingleBlog = ({ blog }) => {
  const { question, answer } = blog;
  return (
    <div className="bg-slate-200 p-5 rounded-xl shadow-lg hover:shadow-orange-400">
      <h2 className="text-xl font-semibold text-slate-800 my-3">
        <span className="font-bold text-2xl">Question:</span> {question}
      </h2>
      <p className=" text-base ">
        <span className="font-semibold text-orange-500 text-lg">Answer:</span>{" "}
        {answer}
      </p>
    </div>
  );
};

export default SingleBlog;
