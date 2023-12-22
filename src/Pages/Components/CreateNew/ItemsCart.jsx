import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemsCart = ({ item, allItems, setAllItems }) => {
  const { _id, name, supplierName, price, photo } = item;

  const handelDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://localhost:5000/items/${_id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = allItems.filter((items) => items._id !== _id);
              setAllItems(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="flex gap-5 justify-around items-center bg-slate-900 py-7 rounded-2xl ">
      <div className="flex gap-4 items-center ">
        <img className="w-[200px] rounded-xl" src={photo} alt="" />
        <div className="text-white font-semibold">
          <h3 className="text-xl">Name : {name}</h3>
          <p>Supplier Name : {supplierName}</p>
          <p>
            Price: <span className="text-orange-500">${price}</span>
          </p>
        </div>
      </div>
      <div className="grid gap-3 text-white">
        <p className=" bg-[#D2B48C] text-lg px-2 rounded-lg ">View</p>
        <Link to={`update/${_id}`}>
          <button className=" bg-[#3C393B] text-lg px-2 rounded-lg">
            Edit
          </button>
        </Link>
        <button
          onClick={() => handelDelete(_id)}
          className="bg-[#EA4744] text-lg rounded-lg px-4 "
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ItemsCart;
