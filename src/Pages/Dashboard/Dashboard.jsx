import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className=" bg-slate-900 py-32">
      <h2 className="text-4xl text-center text-white font-bold">Dashboard </h2>
      <div className="flex gap-5 justify-center my-8 text-white font-semibold text-xl">
        <Link to={"/addItems"}>
          <button className="bg-orange-500 py-2 px-3 hover:bg-orange-700 shadow-md hover:shadow-cyan-300 rounded-lg">
            Add New Item
          </button>
        </Link>
        <Link to={"/allItems"}>
          <button className="bg-orange-500 py-2 px-3 hover:bg-orange-500 shadow-md hover:shadow-lime-600 rounded-lg">
            See All Item
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
