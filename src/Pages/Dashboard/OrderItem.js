import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const OrderItem = ({ order, index, refetch }) => {
  const {
    _id,
    productName,
    price,
    min_order,
    email,
    paid,
    transactionId,
    diliverd,
  } = order;

  const confirmDelete = () => {
    console.log(_id);
    fetch(`https://warm-shelf-03881.herokuapp.com/orderdelete/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Order is deleted`);
          refetch();
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>

      <td>{productName}</td>
      <td>{email}</td>
      <td>${price * min_order}</td>
      <td>{min_order}</td>
      <td>
        {price && !paid && (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-xs btn-success">pay</button>
          </Link>
        )}
        {price && paid && (
          <div>
            <p>
              <span className="text-success">Paid</span>
            </p>
            <p>
              Transaction id:{" "}
              <span className="text-success">{transactionId}</span>
            </p>
          </div>
        )}
      </td>
      <td>{diliverd}</td>
      <td>
        {paid ? (
          "Payment Completed"
        ) : (
          <button onClick={confirmDelete} class=" btn btn-error btn-xs">
            Delete
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderItem;
