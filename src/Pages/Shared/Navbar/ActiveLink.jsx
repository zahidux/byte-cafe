import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? " text-orange-500 font-bold  text-secondary text-xl"
          : "font-medium"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
