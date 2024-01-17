import React from "react";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import UseCart from "../../Hook/UseCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

const Pay = () => {
  const [cart] = UseCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <div className="grid justify-center my-28">
        <SectionTitle Heading={"PAYMENT"} />
      </div>
      <Elements stripe={stripePromise}>
        <CheckOutForm price={price} />
      </Elements>
    </div>
  );
};

export default Pay;
