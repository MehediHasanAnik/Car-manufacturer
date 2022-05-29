import { signOut } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.int";
import Loading from "../Loading/Loading";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (inputData) => {
    console.log(inputData);
    const updateProfile = {
      education: inputData.education,
      location: inputData.location,
      phone: inputData.phone,
      socialLink: inputData.LinkedInProfile,
    };

    try {
      fetch(`https://warm-shelf-03881.herokuapp.com/profile-update/${user?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(updateProfile),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast(`Updated profile`);
          }
        });
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        signOut(auth);
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="">
      <div className="flex justify-center pt-5 pb-40">
        <div className=" w-50">
          <h2 className="text-2xl">Update Profile</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control  w-full  mb-3">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <div className="input-group w-full">
                <input
                  {...register("name", { required: true })}
                  type="text"
                  value={user?.displayName}
                  placeholder="Enter name"
                  className="input input-bordered w-full "
                />
              </div>
              <p className="text-danger fw-bold">
                {errors.name?.type === "required" && "Name is required"}
              </p>
            </div>
            <div className="form-control w-full  mb-3">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="input-group w-full">
                <input
                  {...register("email", { required: true })}
                  type="text"
                  value={user?.email}
                  placeholder="Enter rating"
                  className="input input-bordered w-full "
                />
              </div>
              <p className="text-danger fw-bold">
                {errors.email?.type === "required" && "Email is required"}
              </p>
            </div>
            <div className="form-control w-full  mb-3">
              <label className="label">
                <span className="label-text">Education</span>
              </label>
              <div className="input-group w-full">
                <input
                  {...register("education", { required: false })}
                  type="text"
                  placeholder="Enter education"
                  className="input input-bordered w-full "
                ></input>
              </div>
              <p className="text-danger fw-bold">
                {errors.education?.type === "required" && "Education is required"}
              </p>
            </div>
            <div className="form-control w-full  mb-3">
              <label className="label">
                <span className="label-text">location</span>
              </label>
              <div className="input-group w-full">
                <input
                  {...register("location", { required: false })}
                  type="text"
                  placeholder="Enter location"
                  className="input input-bordered w-full "
                ></input>
              </div>
              <p className="text-danger fw-bold">
                {errors.location?.type === "required" && "location is required"}
              </p>
            </div>
            <div className="form-control w-full  mb-3">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <div className="input-group w-full">
                <input
                  {...register("phone", { required: false })}
                  type="text"
                  placeholder="Enter phone"
                  className="input input-bordered w-full "
                ></input>
              </div>
              <p className="text-danger fw-bold">
                {errors.phone?.type === "required" && "Phone is required"}
              </p>
            </div>
            <div className="form-control w-full  mb-3">
              <label className="label">
                <span className="label-text">LinkedInProfile</span>
              </label>
              <div className="input-group w-full">
                <input
                  {...register("LinkedInProfile", { required: false })}
                  type="text"
                  placeholder="Enter LinkedInProfile"
                  className="input input-bordered w-full "
                ></input>
              </div>
              <p className="text-danger fw-bold">
                {errors.LinkedInProfile?.type === "required" &&
                  "LinkedIn Profile link is required"}
              </p>
            </div>
            <input
              className="btn btn-primary w-full  text-white"
              type="submit"
              value="Update profile"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
