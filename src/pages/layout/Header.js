import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <NavBar bg="warning" expand="md">
      <Container>
        <Link to="/" className="navbar-brand">
          CLient Shop
        </Link>
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link to="/register" className="nav-link">
                  <i className="fa-solid fa-bell" title="Notifications"></i>
                </Link>
                <Link to="/register" className="nav-link">
                  <i className="fa-solid fa-user-pen" title="User Profile"></i>
                </Link>
                <Link to="/" className="nav-link">
                  <i
                    className="fa-solid fa-right-to-bracket"
                    title="Notifications"
                  ></i>
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  <i className="fa-solid fa-right-to-bracket" title="Login"></i>
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  <i className="fa-solid fa-user-pen" title="Login"></i>Signup
                </Link>
              </>
            )}
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
};
