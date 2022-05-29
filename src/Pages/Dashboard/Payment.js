import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L2mgUBaxce2sXAiyTOmijTEAsl3j3dKLRvPMAOKp39mMLbYNZSaSXqEGy0nMdQfqnPzAFmBhuzG5ekvY0wZ2R4g00Svs89dCO"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://warm-shelf-03881.herokuapp.com/order-payment/${id}`;

  const { data: paymentOrder, isLoading } = useQuery(["paymentOrder", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  //   console.log(paymentOrder);
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">
            Hello, {paymentOrder.productName}
          </p>
          <p>Please pay: ${paymentOrder.price}</p>
          <p>Total price: ${paymentOrder.min_order * paymentOrder.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={paymentOrder} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
