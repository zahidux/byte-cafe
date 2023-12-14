import React from "react";
import ExpertChef from "../Home/ExpertiesChef/ExpertiesChef";

const Chef = () => {
  return (
    <div>
      <div className="bg-slate-900 text-center py-8 md:py-36 invisible md:visible">
        <h1 className="text-5xl text-orange-500 font-bold">All Chef</h1>
      </div>
      <ExpertChef />
    </div>
  );
};

export default Chef;
