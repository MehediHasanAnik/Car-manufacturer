import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.int";
import useToken from "../hooks/useToken";
import Loading from "../Loading/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error2] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [token] = useToken(user);

  const emailRef = useRef("");
  const passRef = useRef("");
  const nameRef = useRef("");

  const subForm = async (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");

    e.preventDefault();
  };
  if (token) {
    navigate("/dashboard");
  }
  let signInError;
  if (error || error2) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || error2?.message}</small>
      </p>
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Form onSubmit={subForm} className="container w-50">
        {signInError && signInError}
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="w-100 " variant="success" type="submit">
          Register Now
        </Button>
        <p>
          Already Have An Account?
          <Link to="/login" className="text-danger text-decoration-none">
            Please Login Here
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
