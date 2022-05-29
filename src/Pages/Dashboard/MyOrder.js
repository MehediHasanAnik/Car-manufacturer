import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { auth } from "../../firebase.int";
import Loading from "../Loading/Loading";
import OrderItem from "./OrderItem";

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://warm-shelf-03881.herokuapp.com/order/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading || loading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>this is manage doc {orders.length}</h2>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Total Price</th>
            <th>Quantity</th>
            <th>Payment</th>
            <th>Diliverd</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => (
            <OrderItem
              key={item._key}
              order={item}
              index={index}
              refetch={refetch}
            ></OrderItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
