import React from "react";

const SectionTitle = ({ subHeading, Heading }) => {
  return (
    <div>
      <p className="text-base text-orange-400 font-semibold mb-3">
        {subHeading}
      </p>
      <h2 className="text-3xl text-slate-900 font-bold border-t-2 border-b-2 py-3 border-slate-300">
        {Heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
