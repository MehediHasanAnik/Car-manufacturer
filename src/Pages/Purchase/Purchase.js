import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../firebase.int";
import Loading from "../Loading/Loading";

const Purchase = () => {
  const [user, loading] = useAuthState(auth);
  const [OrderQty, setOrderQty] = useState(1);
  const { id } = useParams();

  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const url = `https://warm-shelf-03881.herokuapp.com/equipments/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventory, id]);

  const handleOrder = (event) => {
    event.preventDefault();

    const order = {
      productId: inventory._id,
      email: user?.email,
      user_name: user?.displayName,
      productName: inventory.name,
      price: inventory.price,
      min_order: event.target.qty.value,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    console.log(order);
    fetch("https://warm-shelf-03881.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Order added`);
        }
      });
  };
  if (loading) {
    return <Loading />;
  }
  const handleIncreaseQuantity = () => {
    if (parseInt(OrderQty) < inventory.available_quantity) {
      setOrderQty(parseInt(OrderQty) + 1);
    }
  };
  const handleDecreaseQuantity = () => {
    if (parseInt(OrderQty) > 1) {
      setOrderQty(parseInt(OrderQty) - 1);
    }
  };
  return (
    <div className="purchase">

      <div className="container">


        <div className="row">
          <div className="col-md-6"><col-6>
            <h2 className="text-center">Purchase Here</h2>
            <h3>Id: {id}</h3>
            <h4>Name: {inventory.name}</h4>
            <h4>Price: {inventory.price}</h4>
            <h4>Minimum Order: {inventory.minimum_order}</h4>
            <h4>Avabilbe Quentity: {inventory.available_quantity}</h4> <br />

          </col-6>
          </div>

          <div className="col-md-6">
            <h3>Enter Order Quentity</h3>
            <form onSubmit={handleOrder}>
              <input type="name" class="form-control" id="exampleInputEmail1" value={user?.displayName} aria-describedby="emailHelp" />
              <input type="email" class="form-control" id="exampleInputEmail1" value={user?.email} aria-describedby="emailHelp" />
              <input type="text" name="address" class="form-control" id="exampleInputEmail1" placeholder="Enter your Address" aria-describedby="emailHelp" />
              <input type="text" name="phone" class="form-control" id="exampleInputEmail1" placeholder="Enter your Number" aria-describedby="emailHelp" />




              <button type="button" onClick={handleDecreaseQuantity}>
                Decrease
              </button>
              <input
                className="mt-3"
                type="text"
                value={OrderQty}
                onChange={(e) => setOrderQty(e.target.value)}
                name="qty"
                id=""
                placeholder="Add Quantity"
              />{" "}
              <button type="button" onClick={handleIncreaseQuantity}>
                Increment
              </button>
              <br />
              <input
                disabled={OrderQty < inventory.minimum_order}
                className="mt-3"
                type="submit"
                value="Add Now"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
