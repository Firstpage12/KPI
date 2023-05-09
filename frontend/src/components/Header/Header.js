import React from "react";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="info" variant="dark" expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto "></Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar></Navbar>
    </>
  );
};

export default Header;
