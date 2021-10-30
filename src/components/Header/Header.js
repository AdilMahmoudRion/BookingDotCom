import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
    
  const { signInUsingGoogle, user,logout } = useAuth();

  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/home">Booking.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <Link to="/home">home</Link>
              <Link to="/addHotel">add your hotel</Link>
              <Link to="/booking">booking</Link>
            </Nav>
            <Nav>
              <span className="text-white">{user.displayName}</span>

              {user?.email ? (
                <button onClick={logout}>Logout</button>
              ) : (
                <button onClick={signInUsingGoogle}>Login</button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
