import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQueries, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });

  return (
    <div>
      <h3 className="text-center py-28 text-3xl font-bold">Admin Home</h3>
      <div className="container grid grid-cols-1 md:grid-cols-3 text-center gap-16">
        <div className="bg-slate-500 py-8 rounded-xl text-white font-semibold ">
          <p className="text-5xl">
            {stats.revenue} <br /> <span className="text-2xl">Revenue</span>
          </p>
        </div>
        <div>
          <h3 className="bg-orange-500 py-8 rounded-xl text-white font-semibold text-5xl">
            {stats.users}
            <br />
            <span className="text-2xl">Users</span>
          </h3>
        </div>
        <div>
          <h3 className="bg-sky-400 py-8 rounded-xl text-white font-semibold text-5xl">
            {stats.products}
            <br />
            <span className="text-2xl">Items</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
