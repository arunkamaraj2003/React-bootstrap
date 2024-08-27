import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Asset Management</Navbar.Brand>
        <Nav className="ml-auto">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/inventory">Asset Inventory</NavLink>
          <NavLink className="nav-link" to="/tracking">Asset Tracking</NavLink>
          <NavLink className="nav-link" to="/maintenance">Asset Maintenance</NavLink>
          <NavLink className="nav-link" to="/about">About Us</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
