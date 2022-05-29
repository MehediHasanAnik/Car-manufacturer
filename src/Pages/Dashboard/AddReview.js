import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase.int";
import Loading from "../Loading/Loading";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  const handleReview = (event) => {
    event.preventDefault();
    const addReview = {
      name: event.target.name.value,
      rating: event.target.rating.value,
      comment: event.target.comment.value,
    };
    console.log(addReview);
    fetch("https://warm-shelf-03881.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Review added`);
        }
      });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h1>Add a review</h1>

        <form onSubmit={handleReview}>
          <div class="mb-3">
            <input
              className="mt-3 form-control"
              value={user?.displayName}
              type="text"
              name="name"
              id=""
              placeholder="Enter name"
            />
          </div>
          <div class="mb-3">
            <input
              className="mt-3 form-control"
              type="text"
              name="rating"
              id=""
              placeholder="Enter rating"
            />
          </div>
          <div class="mb-3">
            <input
              className="mt-3 form-control"
              type="text"
              name="comment"
              id=""
              placeholder="Enter comment"
            />
          </div>

          <input
            className="mt-3 btn btn-primary"
            type="submit"
            value="Add review"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
