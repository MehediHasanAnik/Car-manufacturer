import Button from "react-bootstrap/Button";
import React, { useRef, useEffect } from "react";
import { Form } from "react-bootstrap";
import {
  //   useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.int";
import useToken from "../hooks/useToken";
import Loading from "../Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
  //   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [token] = useToken(user || user2);
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const emailRef = useRef("");
  const passRef = useRef("");

  // login submit
  const subForm = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmailAndPassword(email, password);
    // navigate(from, { replace: true });
    console.log(email, password);
  };

  if (token) {
    navigate(from, { replace: true });
  }

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading || loading2) {
    return <Loading></Loading>;
  }
  let signInError;
  if (error || error2) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || error2?.message}</small>
      </p>
    );
  }

  return (
    <div>
      <Form onSubmit={subForm} className="container w-50">
        {signInError && signInError}
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
        <Button className="w-100 " variant="primary" type="submit">
          Log In
        </Button>
        <p className="mt-3">
          New here?{" "}
          <Link to="/register" className="text-danger text-decoration-none">
            Please Register Here.
          </Link>
        </p>
      </Form>
      <div className="text-center">
        <button
          className="btn btn-primary m-2"
          onClick={() => signInWithGoogle()}
        >
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
