import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { requestSuccess } from "../login/authSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  const handleOnLogout = () => {
    dispatch(requestSuccess({}));
  };

  return (
    <div>
      <Navbar bg="warning" expand="md">
        <Container>
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav> get categories here. </Nav> */}
            <Nav className="ms-auto">
              {user?._id ? (
                <>
                  <h4 className="nav">Welcone back {user.fName}</h4>
                  <Link to="/" className="nav-link">
                    <i className="fa-solid fa-bell" title="Notifications"></i>
                  </Link>
                  <Link to="/login" className="nav-link">
                    <i
                      className="fa-solid fa-user-pen"
                      title="User Profile"
                    ></i>
                  </Link>
                  {/* put link for carts here */}

                  {/* <Link to="/" className="nav-link" onClick={handleOnLogout}>
                    <i className="fa-solid fa-right-to-bracket"></i>
                  </Link> */}
                </>
              ) : (
                <>
                  <Link className="navbar-brand" to="/">
                    Home
                  </Link>
                  <Link to="/login" className="nav-link">
                    <i
                      className="fa-solid fa-house fa-lg"
                      title="MyUserAccount"
                    ></i>
                  </Link>

                  {/* link a cart here */}

                  {/* <Link to="/register" className="nav-link">
                    <i className="fa-solid fa-user-pen">Sign Up</i>
                  </Link> */}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
