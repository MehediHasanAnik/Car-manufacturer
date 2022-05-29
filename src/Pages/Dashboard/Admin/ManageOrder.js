import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import AdminOrderItem from "./AdminOrderItem";

const ManageOrder = () => {
  const {
    data: adminOrders,
    isLoading,
    refetch,
  } = useQuery("adminOrders", () =>
    fetch(`https://warm-shelf-03881.herokuapp.com/admin-order/`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>this is manage doc {adminOrders.length}</h2>
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
          {adminOrders.map((item, index) => (
            <AdminOrderItem
              key={item._key}
              order={item}
              index={index}
              refetch={refetch}
            ></AdminOrderItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;
