import React from "react";
import Users from "../../Hook/Users";
import { FaRegUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const UserCart = () => {
  const [userData, , refetch] = Users();
  console.log(userData);

  const handelMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="container my-24 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-slate-900  text-white font-semibold text-xl ">
          <tr>
            <th className="px-6 py-3 text-left  uppercase tracking-wider">
              Index
            </th>
            <th className="px-6 py-3 text-left  uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left  uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left  uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left  uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={user._id} className="bg-slate-700 text-white text-lg">
              <td className="px-6 py-4 ">{index + 1}</td>
              <td className="px-6 py-4 ">{user.name}</td>
              <td className="px-6 py-4 ">{user.email}</td>
              <td className="px-6 py-4 ">
                <button onClick={() => handelMakeAdmin(user)}>
                  {user.role === "admin" ? "admin" : <FaRegUser />}
                </button>
              </td>
              <td className="px-6 py-4 font-semibold text-2xl ">
                <div className="rounded-xl ">
                  <MdDelete className="bg-red-600 " />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserCart;
