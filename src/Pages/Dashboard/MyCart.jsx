import React from "react";
import UseCart from "../../Hook/UseCart";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart] = UseCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div className="flex justify-center item-center my-32">
      <div className="text-xl font-semibold">
        <h3>Total Food: {cart.length}</h3>
        <h3>Total Price: {total}</h3>
        <Link to={"/dashboard/pay"} className="text-center">
          <button className="my-5 bg-orange-500 py-2 px-3 text-white rounded-xl">
            Pay
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyCart;
