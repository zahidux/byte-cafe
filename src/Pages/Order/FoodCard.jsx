import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import UseCart from "../../Hook/UseCart";

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { _id, image, name, price, recipe } = item;
  const [, refetch] = UseCart();

  const handelAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = { menuItemId: _id, name, price, email: user.email };

      fetch("https://byte-cafe.onrender.com/carts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Food Added successful",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };
  return (
    <div className="relative rounded-xl p-5 shadow-2xl">
      <img className="rounded-xl" src={image} alt="" />
      <p className="bg-slate-700 absolute text-white top-8 right-8 p-1 rounded-md">
        ${price}
      </p>
      <div>
        <div className="text-left">
          <h3 className="text-xl font-semibold my-2 md:my-3">{name}</h3>
          <p>{recipe}</p>
        </div>
        <div onClick={() => handelAddToCart(item)} className="mt-12 ">
          <button
            className="shadow-lg border-0 absolute bottom-5 right-8 hover:text-white border-b-4 hover:shadow-orange-700 text-base md:text-xl py-1 md:py-2 px-2 md:px-2 rounded-xl 
          font-medium hover:bg-orange-500 "
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
