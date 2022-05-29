import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.int";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <>
      <div>
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">
            Dasboard
          </li>
          <li class="list-group-item">
            <Link to="profile">Profile</Link>
          </li>
          {admin ? (
            <>
              <li class="list-group-item">
                <Link to="manage-order">Manage all orders</Link>
              </li>
              <li class="list-group-item">
                <Link to="addproduct">Add Products</Link>
              </li>

              <li class="list-group-item">
                <Link to="users">All Users</Link>
              </li>
              <li class="list-group-item">
                <Link to="manageproducts">Manage Products</Link>
              </li>
            </>

          ) : (
            <>

              <li class="list-group-item">
                <Link to="order">MyOrders</Link>
              </li>

              <li class="list-group-item">
                <Link to="add-review">Add review</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
