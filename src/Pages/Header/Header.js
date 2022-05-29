import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.int";
import "../Header/Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <Navbar className="navbar moto_nav" expand="lg">
      <Container fluid>
        <Navbar.Brand className="title" as={Link} to="/">
          <h4>  <small>Car-Manufacturer</small></h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="ml-auto">
          <Nav
            className="myNavbar navbar-link  "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio">
              PortFolio
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>



            {user ? (
              <>
                <Button onClick={logout}>SignOut</Button>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
