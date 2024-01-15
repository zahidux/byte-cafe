import React from "react";
import UseCart from "../../Hook/UseCart";

const MyCart = () => {
  const [cart] = UseCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div className="flex justify-center item-center my-32">
      <div className="text-xl font-semibold">
        <h3>Total Food: {cart.length}</h3>
        <h3>Total Price: {total}</h3>
        <div className="text-center">
          <button className="my-5 bg-orange-500 py-2 px-3 text-white rounded-xl">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
