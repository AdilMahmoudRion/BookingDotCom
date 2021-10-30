import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
    
  const { signInUsingGoogle, user, logout } = useAuth();
  const imgUrl = user.photoURL;
 

  return (
    <div>
      <Navbar className="navbar" sticky="top" collapseOnSelect expand="lg">
        <Container className="">
          <Navbar.Brand className="fs-3 fw-bolder text-white" href="/home">
            Booking.com
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <Link className="nav-link text-white" to="/home">
                Home
              </Link>
              <Link className="nav-link text-white" to="/addHotel">
                Add your Hotel
              </Link>
              <Link className="nav-link text-white" to="/booking">
                Booking
              </Link>
            </Nav>

            <Nav>
              <div className="userInf">
                <img className="img" src={imgUrl} alt="" />
                <p className="text-white m-0">{user.displayName}</p>
              </div>
              {user?.email ? (
                <button className="button" onClick={logout}>
                  Logout
                </button>
              ) : (
                <button className="button" onClick={signInUsingGoogle}>
                  Login
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
