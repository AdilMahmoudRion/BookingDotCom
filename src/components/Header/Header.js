import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
    
  const { signInUsingGoogle } = useAuth();
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
          <Navbar.Brand href="/home#home">Health Center</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <Link to="/home">home</Link>
              <Link to="/addHotel">add your hotel</Link>
            </Nav>
            <Nav>
              <NavLink>Log out</NavLink>
              <button onClick={signInUsingGoogle}>log in</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
