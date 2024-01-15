import { useQuery } from "@tanstack/react-query";
import React from "react";

const Users = () => {
  const {
    data: users = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      //   console.log(data);
      return data;
    },
  });

  return [users, loading, refetch];
};

export default Users;
