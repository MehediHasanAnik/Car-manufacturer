import React from "react";
import { toast } from "react-toastify";

const AdminOrderItem = ({ order, index, refetch }) => {
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

  const handleShipped = () => {
    fetch(`https://warm-shelf-03881.herokuapp.com/order-shipped/${_id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ id: _id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success(`Order is Shipped`);
          refetch();
        }
      });
  };
  const confirmDelete = () => {
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
        {price && paid ? (
          <div>
            <p>
              <span className="text-success">Paid</span>
            </p>
            <p>
              Transaction id:{" "}
              <span className="text-success">{transactionId}</span>
            </p>
          </div>
        ) : (
          "Unpaid"
        )}
      </td>
      <td>
        {diliverd !== "pending" ? (
          diliverd
        ) : (
          <>
            <span className="badge bg-warning mr-3">{diliverd}</span>
            {paid && (
              <button onClick={handleShipped} class=" btn btn-primary btn-xs">
                Shipped Now
              </button>
            )}
          </>
        )}
      </td>
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

export default AdminOrderItem;
